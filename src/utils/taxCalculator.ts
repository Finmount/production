export interface SalaryInputs {
  salary: number;
  bonus: number;
  pensionPercent: number;
  maritalStatus: 'single' | 'married-one-income' | 'married-two-income';
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
}

export function calculateSalary(inputs: SalaryInputs): SalaryResult {
  const grossIncome = inputs.salary + inputs.bonus;

  const pension =
    grossIncome * (inputs.pensionPercent / 100);

  const taxableIncome = grossIncome - pension;

  // PAYE
  let standardBand = 44000;

  if (inputs.maritalStatus === 'married-one-income') {
    standardBand = 53000;
  }

  if (inputs.maritalStatus === 'married-two-income') {
    standardBand = 62000;
  }

  let paye = 0;

  if (taxableIncome <= standardBand) {
    paye = taxableIncome * 0.20;
  } else {
    paye =
      standardBand * 0.20 +
      (taxableIncome - standardBand) * 0.40;
  }

  // Tax Credits
  paye = Math.max(0, paye - 4000);

  // USC
  let usc = 0;

  const uscBands = [
    { limit: 12012, rate: 0.005 },
    { limit: 16688, rate: 0.02 },
    { limit: 41344, rate: 0.03 }
  ];

  let remaining = taxableIncome;

  for (const band of uscBands) {
    const taxable = Math.min(remaining, band.limit);
    usc += taxable * band.rate;
    remaining -= taxable;

    if (remaining <= 0) break;
  }

  if (remaining > 0) {
    usc += remaining * 0.08;
  }

  // PRSI
  const prsi = taxableIncome * 0.042;

  const totalDeductions =
    paye + usc + prsi + pension;

  const takeHomePay =
    grossIncome - totalDeductions;

  return {
    grossIncome,
    taxableIncome,
    paye,
    usc,
    prsi,
    pension,
    totalDeductions,
    takeHomePay
  };
}
