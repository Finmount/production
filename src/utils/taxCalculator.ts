// taxCalculator.js — Irish tax calculator 2026

const FREQUENCY_MULTIPLIERS = {
  annual:      1,
  monthly:     12,
  fortnightly: 26,
  weekly:      52,
};

function calcPAYE(taxableIncome, maritalStatus) {
  // Standard rate cutoffs 2026
  const cutoffs = {
    'single':             42000,
    'married-one-income': 51000,
    'married-two-income': 84000,
  };

  // Tax credits 2026
  const credits = {
    'single':             1875,
    'married-one-income': 3750,
    'married-two-income': 3750,
  };

  const cutoff = cutoffs[maritalStatus] ?? cutoffs['single'];
  const credit = credits[maritalStatus] ?? credits['single'];

  let paye = 0;
  if (taxableIncome <= cutoff) {
    paye = taxableIncome * 0.20;
  } else {
    paye = cutoff * 0.20 + (taxableIncome - cutoff) * 0.40;
  }

  return Math.max(0, paye - credit);
}

function calcUSC(income) {
  // USC exempt if income <= €13,000
  if (income <= 13000) return income * 0.005;

  const bands = [
    [0,     12012, 0.005],
    [12012, 22920, 0.02 ],
    [22920, 70044, 0.04 ],
    [70044, Infinity, 0.08],
  ];

  let usc = 0;
  for (const [lo, hi, rate] of bands) {
    if (income > lo) {
      usc += (Math.min(income, hi) - lo) * rate;
    }
  }
  return usc;
}

function calcPRSI(income) {
  // Class A PRSI: 4% on all income (no upper ceiling for employee)
  // Exempt if weekly income <= €352 (annualised: €18,304)
  if (income <= 18304) return 0;
  return income * 0.04;
}

export function calculateSalary({
  salary,
  bonus = 0,
  pensionPercent = 0,
  maritalStatus = 'single',
  payFrequency = 'annual',
}) {
  const divisors = FREQUENCY_MULTIPLIERS;

  // Salary input is always the ANNUAL figure — payFrequency only controls display
  const grossIncome = salary + bonus;

  // Pension is pre-tax (relief at source)
  const pensionAmount = grossIncome * (pensionPercent / 100);
  const taxableIncome = grossIncome - pensionAmount;

  // Annual tax figures
  // Revenue rules: PAYE and PRSI on taxable (post-pension), USC on gross (pre-pension)
  const paye  = calcPAYE(taxableIncome, maritalStatus);
  const usc   = calcUSC(grossIncome);
  const prsi  = calcPRSI(grossIncome);

  const totalDeductions = paye + usc + prsi + pensionAmount;
  const takeHomePay     = grossIncome - totalDeductions;

  const deductionPercentage = grossIncome > 0
    ? (totalDeductions / grossIncome) * 100
    : 0;

  return {
    // Annual figures
    grossIncome,
    paye,
    usc,
    prsi,
    pension: pensionAmount,
    totalDeductions,
    takeHomePay,
    deductionPercentage,

    // Periodic breakdowns — divide annual figures by frequency
    monthlyTakeHome:     takeHomePay / (divisors['monthly']),
    fortnightlyTakeHome: takeHomePay / (divisors['fortnightly']),
    weeklyTakeHome:      takeHomePay / (divisors['weekly']),

    // Display divisor for the selected frequency
    periodDivisor: divisors[payFrequency] ?? 1,
  };
}
