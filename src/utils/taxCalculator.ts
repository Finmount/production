export interface SalaryInputs {
  salary: number;
  bonus: number;
  pensionPercent: number;
  maritalStatus:
    | 'single'
    | 'married-one-income'
    | 'married-two-income';
}

export interface SalaryResult {
  grossIncome: number;
  taxableIncome: number;

  paye: number;
  usc: number;
  prsi: number;
  pension: number;

  totalDeductions: number;
  takeHomePay: number;

  monthlyTakeHome: number;
  fortnightlyTakeHome: number;
  weeklyTakeHome: number;

  deductionPercentage: number;
}

export function calculateSalary(
  inputs: SalaryInputs
): SalaryResult {
  const grossIncome =
    inputs.salary + inputs.bonus;

  const pension =
    grossIncome *
    (inputs.pensionPercent / 100);

  const taxableIncome =
    grossIncome - pension;

  // PAYE
  let standardBand = 44000;

  if (
    inputs.maritalStatus ===
    'married-one-income'
  ) {
    standardBand = 53000;
  }

  if (
    inputs.maritalStatus ===
    'married-two-income'
  ) {
    standardBand = 62000;
  }

  let paye = 0;

  if (taxableIncome <= standardBand) {
    paye = taxableIncome * 0.2;
  } else {
    paye =
      standardBand * 0.2 +
      (taxableIncome - standardBand) *
        0.4;
  }

  // Basic tax credits
  paye = Math.max(0, paye - 4000);

  // USC
  let usc = 0;

  if (taxableIncome <= 12012) {
    usc = taxableIncome * 0.005;
  } else if (taxableIncome <= 28656) {
    usc =
      12012 * 0.005 +
      (taxableIncome - 12012) * 0.02;
  } else if (taxableIncome <= 70044) {
    usc =
      12012 * 0.005 +
      (28656 - 12012) * 0.02 +
      (taxableIncome - 28656) * 0.03;
  } else {
    usc =
      12012 * 0.005 +
      (28656 - 12012) * 0.02 +
      (70044 - 28656) * 0.03 +
      (taxableIncome - 70044) * 0.08;
  }

  // PRSI
  const prsi =
    taxableIncome * 0.042;

  const totalDeductions =
    paye +
    usc +
    prsi +
    pension;

  const takeHomePay =
    grossIncome -
    totalDeductions;

  const monthlyTakeHome =
    takeHomePay / 12;

  const fortnightlyTakeHome =
    takeHomePay / 26;

  const weeklyTakeHome =
    takeHomePay / 52;

  const deductionPercentage =
    grossIncome > 0
      ? (totalDeductions /
          grossIncome) *
        100
      : 0;

  return {
    grossIncome,
    taxableIncome,

    paye,
    usc,
    prsi,
    pension,

    totalDeductions,
    takeHomePay,

    monthlyTakeHome,
    fortnightlyTakeHome,
    weeklyTakeHome,

    deductionPercentage
  };
}
