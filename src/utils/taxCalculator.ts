/**
 * Irish Salary Tax Calculator – 2026
 * Covers: PAYE, USC, PRSI (Class A), Pension relief
 * Sources: Revenue.ie, Budget 2026
 */

// ─── TAX CREDITS ────────────────────────────────────────────────────────────
const TAX_CREDITS = {
  personal: 2000,      // Personal Tax Credit
  paye: 2000,          // PAYE / Employee Credit
  // Married couples get a combined personal credit of €4,000 (2 × €2,000)
};

// ─── PAYE BANDS ─────────────────────────────────────────────────────────────
// Standard Rate Cut-Off Points (SRCOP) for 2026
const SRCOP = {
  single: 44000,
  'married-one-income': 53000,
  'married-two-income': 88000,   // combined; max €44k transferable to higher earner
};

function calcPAYE(taxableIncome, maritalStatus) {
  const srcop = SRCOP[maritalStatus] ?? SRCOP.single;

  const standardBand  = Math.min(taxableIncome, srcop);
  const higherBand    = Math.max(0, taxableIncome - srcop);

  const grossTax = standardBand * 0.20 + higherBand * 0.40;

  // Tax credits
  let credits = TAX_CREDITS.personal + TAX_CREDITS.paye;
  if (maritalStatus === 'married-one-income' || maritalStatus === 'married-two-income') {
    credits = TAX_CREDITS.personal * 2 + TAX_CREDITS.paye; // married personal credit = €4,000
  }

  return Math.max(0, grossTax - credits);
}

// ─── USC BANDS ───────────────────────────────────────────────────────────────
// Budget 2026 rates (the 3% rate replaced the old 4% rate; 2% band ceiling raised to €28,700)
const USC_BANDS = [
  { limit: 12012,  rate: 0.005 },   // 0.5%
  { limit: 28700,  rate: 0.020 },   // 2%
  { limit: 70044,  rate: 0.030 },   // 3%  (reduced from 4% in Budget 2026)
  { limit: Infinity, rate: 0.080 }, // 8%
];
const USC_EXEMPTION_THRESHOLD = 13000;

function calcUSC(grossIncome) {
  if (grossIncome <= USC_EXEMPTION_THRESHOLD) return 0;

  let usc = 0;
  let prev = 0;
  for (const band of USC_BANDS) {
    if (grossIncome <= prev) break;
    const taxable = Math.min(grossIncome, band.limit) - prev;
    usc += taxable * band.rate;
    prev = band.limit;
  }
  return usc;
}

// ─── PRSI ────────────────────────────────────────────────────────────────────
// Class A employee rate.
// Budget 2026: 4.2% Jan–Sep 2026, rising to 4.35% from 1 Oct 2026.
// Weighted annual average ≈ 4.24% (9 months × 4.2% + 3 months × 4.35%).
// We use 4.2% as the primary rate (Revenue uses the rate at point of payment).
const PRSI_RATE        = 0.042;
const PRSI_RATE_OCT26  = 0.0435; // From 1 Oct 2026
const PRSI_WEEKLY_EXEMPT = 352;  // €352/week or less = exempt
const PRSI_WEEKLY_CREDIT_MAX  = 12;     // Max sliding scale credit
const PRSI_WEEKLY_CREDIT_LOWER = 352;   // Weekly income lower threshold for credit
const PRSI_WEEKLY_CREDIT_UPPER = 424;   // Weekly income upper threshold for credit

function calcPRSI(grossIncome) {
  const weeklyIncome = grossIncome / 52;

  // Exempt threshold
  if (weeklyIncome <= PRSI_WEEKLY_EXEMPT) return 0;

  const annualPRSI = grossIncome * PRSI_RATE;

  // Sliding scale credit: max €12/week where weekly income is between €352 and €424
  let annualCredit = 0;
  if (weeklyIncome > PRSI_WEEKLY_CREDIT_LOWER && weeklyIncome <= PRSI_WEEKLY_CREDIT_UPPER) {
    // Linear interpolation: credit reduces from €12 to €0 as income goes from €352 to €424
    const fraction = (weeklyIncome - PRSI_WEEKLY_CREDIT_LOWER) /
                     (PRSI_WEEKLY_CREDIT_UPPER - PRSI_WEEKLY_CREDIT_LOWER);
    const weeklyCredit = PRSI_WEEKLY_CREDIT_MAX * (1 - fraction);
    annualCredit = weeklyCredit * 52;
  }

  return Math.max(0, annualPRSI - annualCredit);
}

// ─── PENSION ─────────────────────────────────────────────────────────────────
// Relief at marginal rate; age-based contribution limits (we apply a flat cap of 40%).
// Revenue age-based limits: under 30 → 15%, 30–39 → 20%, 40–49 → 25%, 50–54 → 30%,
// 55–59 → 35%, 60+ → 40%. Max earnings cap: €115,000.
const PENSION_EARNINGS_CAP = 115000;

function calcPension(grossSalary, pensionPercent) {
  const cappedEarnings = Math.min(grossSalary, PENSION_EARNINGS_CAP);
  return (cappedEarnings * pensionPercent) / 100;
}

// ─── PERIOD DIVISORS ─────────────────────────────────────────────────────────
const PERIOD_DIVISORS = {
  annual:      1,
  monthly:     12,
  fortnightly: 26,
  weekly:      52,
};

// ─── MARGINAL RATE ───────────────────────────────────────────────────────────
function getMarginalRate(taxableIncome, maritalStatus) {
  const srcop = SRCOP[maritalStatus] ?? SRCOP.single;
  const payeMargin = taxableIncome > srcop ? 0.40 : 0.20;
  const uscMargin  = taxableIncome > 70044 ? 0.08
                   : taxableIncome > 28700 ? 0.03
                   : taxableIncome > 12012 ? 0.02
                   : 0.005;
  return payeMargin + uscMargin + PRSI_RATE;
}

// ─── EFFECTIVE RATE ──────────────────────────────────────────────────────────
function getEffectiveRate(totalTax, grossIncome) {
  if (!grossIncome) return 0;
  return (totalTax / grossIncome) * 100;
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
/**
 * @param {object} params
 * @param {number}  params.salary          – Gross annual salary (€)
 * @param {number}  [params.bonus=0]       – Annual bonus (€)
 * @param {number}  [params.pensionPercent=0] – Employee pension contribution (%)
 * @param {string}  [params.maritalStatus='single'] – 'single' | 'married-one-income' | 'married-two-income'
 * @param {string}  [params.payFrequency='annual']  – 'annual' | 'monthly' | 'fortnightly' | 'weekly'
 * @param {boolean} [params.medicalCard=false]       – Reduced USC rate (max 2% if income ≤ €60k)
 * @param {boolean} [params.aged70plus=false]        – PRSI exempt; reduced USC
 * @returns {object} Full tax breakdown
 */
export function calculateSalary({
  salary = 0,
  bonus = 0,
  pensionPercent = 0,
  maritalStatus = 'single',
  payFrequency = 'annual',
  medicalCard = false,
  aged70plus = false,

  prsiCategory = 'full',
  selfEmployed = false,
  dependentChildren = false,
  rentalIncome = 0,
}) {
  const grossIncome = salary + bonus + rentalIncome;
  const pensionAmount = calcPension(salary, pensionPercent); // pension on salary only
  const taxableIncome = Math.max(0, grossIncome - pensionAmount); // pension reduces taxable income

  // PAYE (income tax)
  const paye = calcPAYE(taxableIncome, maritalStatus);
  const childTaxCredit = dependentChildren ? 500 : 0;
  const adjustedPAYE = Math.max(0, paye - childTaxCredit);

  // USC – applied to GROSS income (pension does NOT reduce USC)
  let usc = calcUSC(grossIncome);
  // Medical card / aged 70+ reduced USC: max 2% if total income ≤ €60,000
  if ((medicalCard || aged70plus) && grossIncome <= 60000) {
    // Re-calc at reduced rates (capped at 2%)
    const reducedBands = [
      { limit: 12012,    rate: 0.005 },
      { limit: Infinity, rate: 0.020 },
    ];
    usc = 0;
    let prev = 0;
    for (const band of reducedBands) {
      if (grossIncome <= prev) break;
      const taxable = Math.min(grossIncome, band.limit) - prev;
      usc += taxable * band.rate;
      prev = band.limit;
    }
  }
  if (grossIncome <= USC_EXEMPTION_THRESHOLD) usc = 0;

  // PRSI – applied to GROSS income; exempt if aged 70+
  let prsi = 0;

  if (!aged70plus) {
    if (selfEmployed || prsiCategory === 'self-employed') {
      prsi = grossIncome * 0.04; // Class S
    } else if (prsiCategory === 'reduced') {
      prsi = grossIncome * 0.02;
    } else {
      prsi = calcPRSI(grossIncome); // Class A
    }
  }

  const totalTax        = adjustedPAYE + usc + prsi;
  const totalDeductions = totalTax + pensionAmount;
  const takeHomePay     = grossIncome - totalDeductions;

  const periodDivisor    = PERIOD_DIVISORS[payFrequency] ?? 1;
  const marginalRate     = getMarginalRate(taxableIncome, maritalStatus);
  const effectiveRate    = getEffectiveRate(totalTax, grossIncome);
  const deductionPercentage = grossIncome > 0 ? (totalDeductions / grossIncome) * 100 : 0;

  // Standard period breakdowns (always annual base)
  const monthly      = takeHomePay / 12;
  const fortnightly  = takeHomePay / 26;
  const weekly       = takeHomePay / 52;

  // Pension tax saving
  const pensionTaxSaving = pensionAmount * (taxableIncome > (SRCOP[maritalStatus] ?? 44000) ? 0.40 : 0.20);

  return {
    // Inputs echoed
    grossSalary: salary,
    bonus,
    pensionPercent,
    maritalStatus,
    payFrequency,

    // New fields
    prsiCategory,
    selfEmployed,
    dependentChildren,
    rentalIncome,

    // Gross
    grossIncome,
    taxableIncome,
    pension: pensionAmount,

    // Tax components (annual)
    paye: adjustedPAYE,
    usc,
    prsi,
    totalTax,
    totalDeductions,

    // Take home
    takeHomePay,
    monthlyTakeHome:      monthly,
    fortnightlyTakeHome:  fortnightly,
    weeklyTakeHome:       weekly,

    // Rates
    marginalRate:          marginalRate * 100,   // as percentage
    effectiveRate,
    deductionPercentage,

    // Period divisor for the UI
    periodDivisor,

    // Pension insight
    pensionTaxSaving,

    // Band info (useful for UI hints)
    srcop: SRCOP[maritalStatus] ?? SRCOP.single,
    inHigherBand: taxableIncome > (SRCOP[maritalStatus] ?? 44000),
    higherBandAmount: Math.max(0, taxableIncome - (SRCOP[maritalStatus] ?? 44000)),
  };
}
