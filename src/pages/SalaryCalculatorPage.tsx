import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateSalary } from '../utils/taxCalculator';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) =>
  Number(n).toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

const fmtDec = (n) =>
  Number(n).toLocaleString('en-IE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ─── Donut Chart ──────────────────────────────────────────────────────────────
function DonutChart({ result }) {
  const total = result.grossIncome || 1;
  const segments = [
    { label: 'Take Home',  value: result.takeHomePay,  color: '#16a34a' },
    { label: 'PAYE',       value: result.paye,         color: '#dc2626' },
    { label: 'USC',        value: result.usc,          color: '#ea580c' },
    { label: 'PRSI',       value: result.prsi,         color: '#9333ea' },
    { label: 'Pension',    value: result.pension,      color: '#2563eb' },
  ];

  const radius = 80;
  const cx = 110;
  const cy = 110;
  let cumAngle = -Math.PI / 2;

  const arcs = segments.map((seg) => {
    const fraction = seg.value / total;
    const angle = fraction * 2 * Math.PI;
    const x1 = cx + radius * Math.cos(cumAngle);
    const y1 = cy + radius * Math.sin(cumAngle);
    cumAngle += angle;
    const x2 = cx + radius * Math.cos(cumAngle);
    const y2 = cy + radius * Math.sin(cumAngle);
    const large = angle > Math.PI ? 1 : 0;
    return { ...seg, d: `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2} Z`, fraction };
  });

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <svg width="220" height="220" viewBox="0 0 220 220">
          {arcs.map((arc) => (
            <path key={arc.label} d={arc.d} fill={arc.color} opacity="0.9" />
          ))}
          <circle cx={cx} cy={cy} r="48" fill="white" />
          <text x={cx} y={cy - 8} textAnchor="middle" fontSize="11" fill="#6b7280">Take Home</text>
          <text x={cx} y={cy + 10} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#16a34a">
            {result.grossIncome > 0 ? Math.round((result.takeHomePay / result.grossIncome) * 100) : 0}%
          </text>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm w-full">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-gray-600">{seg.label}</span>
            <span className="ml-auto font-semibold text-gray-800">
              {result.grossIncome > 0 ? Math.round((seg.value / result.grossIncome) * 100) : 0}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Band Visualiser ─────────────────────────────────────────────────────────
function BandBar({ label, value, max, color, textColor }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="font-semibold">€{fmt(value)}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ─── Tax Band Visualiser ──────────────────────────────────────────────────────
function TaxBandVisualiser({ result }) {
  const { grossIncome, srcop, taxableIncome } = result;
  if (!grossIncome) return null;

  const standardPortion = Math.min(taxableIncome, srcop);
  const higherPortion   = Math.max(0, taxableIncome - srcop);

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-xl">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">Income Tax Band Split</h4>
      <div className="w-full h-6 rounded-full overflow-hidden flex">
        <div
          className="bg-blue-400 h-full flex items-center justify-center text-xs text-white font-medium"
          style={{ width: `${(standardPortion / grossIncome) * 100}%` }}
          title={`20% band: €${fmt(standardPortion)}`}
        >
          {standardPortion > grossIncome * 0.15 ? '20%' : ''}
        </div>
        {higherPortion > 0 && (
          <div
            className="bg-red-500 h-full flex items-center justify-center text-xs text-white font-medium"
            style={{ width: `${(higherPortion / grossIncome) * 100}%` }}
            title={`40% band: €${fmt(higherPortion)}`}
          >
            {higherPortion > grossIncome * 0.10 ? '40%' : ''}
          </div>
        )}
        <div
          className="bg-green-400 h-full"
          style={{ width: `${(result.pension / grossIncome) * 100}%` }}
          title={`Pension: €${fmt(result.pension)}`}
        />
      </div>
      <div className="flex gap-4 mt-2 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block" />20% band: €{fmt(standardPortion)}</span>
        {higherPortion > 0 && <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full inline-block" />40% band: €{fmt(higherPortion)}</span>}
        {result.pension > 0 && <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full inline-block" />Pension relief</span>}
      </div>
    </div>
  );
}

// ─── USC Band Breakdown ───────────────────────────────────────────────────────
function USCBreakdown({ grossIncome }) {
  if (!grossIncome) return null;
  const bands = [
    { label: '0.5% on first €12,012',        from: 0,     to: 12012,    rate: 0.005 },
    { label: '2% on €12,013–€28,700',         from: 12012, to: 28700,    rate: 0.020 },
    { label: '3% on €28,701–€70,044',         from: 28700, to: 70044,    rate: 0.030 },
    { label: '8% on income above €70,044',    from: 70044, to: Infinity, rate: 0.080 },
  ];
  return (
    <div className="mt-4 space-y-2">
      {bands.map((b) => {
        const taxable = Math.max(0, Math.min(grossIncome, b.to) - b.from);
        if (!taxable) return null;
        const tax = taxable * b.rate;
        return (
          <div key={b.label} className="flex justify-between text-sm py-1 border-b border-gray-100">
            <span className="text-gray-600">{b.label}</span>
            <div className="text-right">
              <span className="text-gray-400 text-xs mr-2">€{fmt(taxable)}</span>
              <span className="font-semibold">€{fmtDec(tax)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Insight Badge ────────────────────────────────────────────────────────────
function Insight({ icon, text, color = 'blue' }) {
  const colors = {
    blue:   'bg-blue-50 border-blue-200 text-blue-800',
    green:  'bg-green-50 border-green-200 text-green-800',
    amber:  'bg-amber-50 border-amber-200 text-amber-800',
    red:    'bg-red-50 border-red-200 text-red-800',
  };
  return (
    <div className={`border rounded-lg p-3 text-sm flex gap-2 items-start ${colors[color]}`}>
      <span className="text-base">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const SalaryCalculatorPage = () => {
  const [salary, setSalary] = useState(60000);
  const [bonus, setBonus] = useState(0);
  const [pension, setPension] = useState(5);
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [payFrequency, setPayFrequency] = useState('monthly');
  const [medicalCard, setMedicalCard] = useState(false);
  const [aged70plus, setAged70plus] = useState(false);
  const [activeTab, setActiveTab] = useState('breakdown');
  const [salaryType, setSalaryType] = useState('annual');

  const annualSalary =
  salaryType === 'monthly'
    ? salary * 12
    : salary;
  
  const result = calculateSalary({
    salary: annualSalary,
    bonus,
    pensionPercent: pension,
    maritalStatus,
    payFrequency,
    medicalCard,
    aged70plus,
  });

  const d = result.periodDivisor;
  const periodLabels = { annual: 'Annual', monthly: 'Monthly', fortnightly: 'Fortnightly', weekly: 'Weekly' };
  const periodLabel  = periodLabels[payFrequency] ?? 'Annual';
  const p = (n) => `€${fmt(n / d)}`;
  const pd = (n) => `€${fmtDec(n / d)}`;

  // Smart insights
  const insights = [];
  if (result.inHigherBand) {
    insights.push({
      icon: '📊',
      color: 'red',
      text: `€${fmt(result.higherBandAmount)} of your income is taxed at 40%. Increasing your pension by 1% saves ~€${fmt(salary * 0.01 * 0.40)} in tax.`,
    });
  }
  if (result.pension > 0) {
    insights.push({
      icon: '💰',
      color: 'green',
      text: `Your pension contribution saves you ~€${fmt(result.pensionTaxSaving)} in income tax this year.`,
    });
  }
  if (result.marginalRate >= 52) {
    insights.push({
      icon: '⚠️',
      color: 'amber',
      text: `Your marginal tax rate is ${result.marginalRate.toFixed(1)}% (PAYE + USC + PRSI). Every €1 earned above €70,044 costs 52c in tax.`,
    });
  }
  if (!medicalCard && !aged70plus && result.grossIncome > 70044) {
    insights.push({
      icon: '💡',
      color: 'blue',
      text: 'Salary sacrifice, additional pension or share schemes can help reduce income above €70,044 that attracts 8% USC.',
    });
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16 mb-12 rounded-2xl">
          <div className="max-w-5xl mx-auto text-center px-6">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
              Updated for Budget 2026
            </div>
            <h1 className="text-5xl font-bold mb-4">Irish Salary Calculator 2026</h1>
            <p className="text-xl text-blue-100 mb-8">
              Calculate PAYE, USC, PRSI, pension deductions and take-home pay using current Revenue rules.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-blue-100">
              <span>✓ 2026 Tax Bands</span>
              <span>✓ Budget 2026 USC (3% rate)</span>
              <span>✓ PRSI 4.2% / 4.35%</span>
              <span>✓ Pension Tax Relief</span>
              <span>✓ Married &amp; Single</span>
              <span>✓ Medical Card / Age 70+</span>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── Input Panel ── */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Your Details</h2>         
            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-sm">
                Salary Type
              </label>
            
            <select
            value={salaryType}
            onChange={(e) => setSalaryType(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg"  
            >
            <option value="annual">Annual Salary</option>
            <option value="monthly">Monthly Salary</option>
              </select>
            </div>
            
            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-sm">
                {salaryType === 'annual'
                  ? 'Gross Annual Salary (€)'
                  : 'Gross Monthly Salary (€)'}
              </label>
            
            <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            </div>


            {/* Bonus */}
            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-sm">Annual Bonus (€)</label>
              <input
                type="number"
                value={bonus}
                onChange={(e) => setBonus(Math.max(0, Number(e.target.value)))}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Marital Status */}
            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-sm">Marital Status</label>
              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="single">Single / Widowed</option>
                <option value="married-one-income">Married — One Income (€53k SRCOP)</option>
                <option value="married-two-income">Married — Two Incomes (€88k combined)</option>
              </select>
            </div>

            {/* Pay Frequency */}
            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-sm">View Results As</label>
              <div className="grid grid-cols-4 gap-2">
                {['annual','monthly','fortnightly','weekly'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setPayFrequency(f)}
                    className={`py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      payFrequency === f
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {f === 'fortnightly' ? '2-weekly' : f}
                  </button>
                ))}
              </div>
            </div>

            {/* Pension Slider */}
            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-sm">
                Pension Contribution — <span className="text-blue-700">{pension.toFixed(1)}%</span>
                {pension > 0 && (
                  <span className="text-green-600 text-xs ml-2">
                    (saves ~€{fmt(result.pensionTaxSaving)}/yr in tax)
                  </span>
                )}
              </label>
              <input
                type="range" min="0" max="40" step="0.5" value={pension}
                onChange={(e) => setPension(Number(e.target.value))}
                className="w-full accent-blue-700"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0%</span><span>10%</span><span>20%</span><span>30%</span><span>40%</span>
              </div>
            </div>

            {/* Extra Options */}
            <div className="border-t pt-4 space-y-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Additional Options</p>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox" checked={medicalCard}
                  onChange={(e) => setMedicalCard(e.target.checked)}
                  className="w-4 h-4 accent-blue-700"
                />
                <span className="text-sm text-gray-700">Full Medical Card holder <span className="text-gray-400">(reduced USC if income ≤ €60k)</span></span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox" checked={aged70plus}
                  onChange={(e) => setAged70plus(e.target.checked)}
                  className="w-4 h-4 accent-blue-700"
                />
                <span className="text-sm text-gray-700">Aged 70 or over <span className="text-gray-400">(PRSI exempt; reduced USC if income ≤ €60k)</span></span>
              </label>
            </div>
          </div>

          {/* ── Results Panel ── */}
          <div className="space-y-6">

            {/* Key Numbers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Your Results <span className="text-base font-normal text-gray-400">({periodLabel})</span></h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Gross Income</span>
                  <span className="text-xl font-bold text-gray-900">{p(result.grossIncome)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Income Tax (PAYE)</span>
                  <span className="text-lg font-semibold text-red-600">−{p(result.paye)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">USC</span>
                  <span className="text-lg font-semibold text-red-600">−{p(result.usc)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">PRSI</span>
                  <span className="text-lg font-semibold text-red-600">−{p(result.prsi)}</span>
                </div>
                {result.pension > 0 && (
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Pension Contribution</span>
                    <span className="text-lg font-semibold text-blue-600">−{p(result.pension)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-4 bg-green-50 rounded-xl px-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Take Home Pay</p>
                    <p className="text-3xl font-bold text-green-700">{p(result.takeHomePay)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Effective rate</p>
                    <p className="text-xl font-bold text-gray-700">{result.effectiveRate.toFixed(1)}%</p>
                  </div>
                </div>
              </div>

              {/* Rate pills */}
              <div className="flex gap-3 mt-5 flex-wrap">
                <div className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Marginal rate: {result.marginalRate.toFixed(1)}%
                </div>
                <div className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Effective rate: {result.effectiveRate.toFixed(1)}%
                </div>
                <div className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Total deducted: {result.deductionPercentage.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Donut */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold mb-4">Income Breakdown</h3>
              <DonutChart result={result} />
            </div>
          </div>
        </div>

        {/* Period Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <p className="text-sm text-blue-600 font-medium mb-1">Monthly Take Home</p>
            <p className="text-3xl font-bold text-blue-900">€{fmt(result.monthlyTakeHome)}</p>
            <p className="text-xs text-blue-400 mt-1">per month</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow">
            <p className="text-sm text-purple-600 font-medium mb-1">Fortnightly Take Home</p>
            <p className="text-3xl font-bold text-purple-700">€{fmt(result.fortnightlyTakeHome)}</p>
            <p className="text-xs text-purple-400 mt-1">every 2 weeks</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow">
            <p className="text-sm text-green-600 font-medium mb-1">Weekly Take Home</p>
            <p className="text-3xl font-bold text-green-700">€{fmt(result.weeklyTakeHome)}</p>
            <p className="text-xs text-green-400 mt-1">per week</p>
          </div>
        </div>

        {/* Detailed Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mt-10 overflow-hidden">
          {/* Tab Nav */}
          <div className="flex border-b">
            {[
              { id: 'breakdown', label: '📋 Tax Breakdown' },
              { id: 'usc',       label: '💼 USC Detail' },
              { id: 'bands',     label: '📈 Tax Bands' },
              { id: 'insights',  label: '💡 Insights' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* ── Tab: Breakdown ── */}
            {activeTab === 'breakdown' && (
              <div>
                <h3 className="text-xl font-bold mb-6">Full Tax Breakdown ({periodLabel})</h3>
                <div className="space-y-4">
                  <BandBar label="Take Home Pay"        value={result.takeHomePay / d}   max={result.grossIncome / d} color="bg-green-500" />
                  <BandBar label="Income Tax (PAYE)"    value={result.paye / d}           max={result.grossIncome / d} color="bg-red-500" />
                  <BandBar label="USC"                  value={result.usc / d}            max={result.grossIncome / d} color="bg-orange-400" />
                  <BandBar label="PRSI (Class A 4.2%)"  value={result.prsi / d}           max={result.grossIncome / d} color="bg-purple-500" />
                  {result.pension > 0 && (
                    <BandBar label="Pension Contribution" value={result.pension / d}      max={result.grossIncome / d} color="bg-blue-500" />
                  )}
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">Annual Figures</p>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span>Gross Income</span><span className="font-semibold">€{fmt(result.grossIncome)}</span></div>
                      <div className="flex justify-between"><span>Taxable Income</span><span className="font-semibold">€{fmt(result.taxableIncome)}</span></div>
                      <div className="flex justify-between text-red-600"><span>PAYE</span><span>−€{fmt(result.paye)}</span></div>
                      <div className="flex justify-between text-red-600"><span>USC</span><span>−€{fmt(result.usc)}</span></div>
                      <div className="flex justify-between text-red-600"><span>PRSI</span><span>−€{fmt(result.prsi)}</span></div>
                      {result.pension > 0 && <div className="flex justify-between text-blue-600"><span>Pension</span><span>−€{fmt(result.pension)}</span></div>}
                      <div className="flex justify-between font-bold text-gray-900 border-t pt-2"><span>Total Deductions</span><span>−€{fmt(result.totalDeductions)}</span></div>
                      <div className="flex justify-between font-bold text-green-700 text-lg"><span>Take Home</span><span>€{fmt(result.takeHomePay)}</span></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">Rates Summary</p>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span>PAYE Standard Rate</span><span className="font-semibold">20%</span></div>
                      <div className="flex justify-between"><span>PAYE Higher Rate</span><span className="font-semibold">40%</span></div>
                      <div className="flex justify-between"><span>Standard Rate Cut-Off</span><span className="font-semibold">€{fmt(result.srcop)}</span></div>
                      <div className="flex justify-between"><span>PRSI Rate</span><span className="font-semibold">4.2%</span></div>
                      <div className="flex justify-between"><span>Personal Tax Credit</span><span className="font-semibold text-green-700">€{maritalStatus !== 'single' ? '4,000' : '2,000'}</span></div>
                      <div className="flex justify-between"><span>PAYE Tax Credit</span><span className="font-semibold text-green-700">€2,000</span></div>
                      <div className="flex justify-between border-t pt-2"><span>Effective Tax Rate</span><span className="font-bold">{result.effectiveRate.toFixed(2)}%</span></div>
                      <div className="flex justify-between"><span>Marginal Rate</span><span className="font-bold">{result.marginalRate.toFixed(1)}%</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab: USC ── */}
            {activeTab === 'usc' && (
              <div>
                <h3 className="text-xl font-bold mb-2">USC Breakdown (Budget 2026)</h3>
                <p className="text-sm text-gray-500 mb-4">
                  USC is charged on <strong>gross income</strong> before pension deductions. The 3% rate (formerly 4%) and raised €28,700 ceiling are Budget 2026 changes.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-4">
                  ⚠️ Individuals with total income of €13,000 or less are <strong>exempt</strong> from USC entirely.
                  {(medicalCard || aged70plus) && result.grossIncome <= 60000 && (
                    <span> Reduced rates (max 2%) apply to you.</span>
                  )}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="pb-2">Band</th>
                        <th className="pb-2">Rate</th>
                        <th className="pb-2 text-right">Taxable</th>
                        <th className="pb-2 text-right">USC Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'First €12,012',            from: 0,     to: 12012,    rate: 0.005 },
                        { label: '€12,013 to €28,700',       from: 12012, to: 28700,    rate: 0.020 },
                        { label: '€28,701 to €70,044',       from: 28700, to: 70044,    rate: 0.030 },
                        { label: 'Above €70,044',             from: 70044, to: Infinity, rate: 0.080 },
                      ].map((b) => {
                        const taxable = Math.max(0, Math.min(result.grossIncome, b.to) - b.from);
                        if (!taxable && result.grossIncome <= b.from) return null;
                        const tax = taxable * b.rate;
                        return (
                          <tr key={b.label} className={`border-b ${taxable ? '' : 'opacity-40'}`}>
                            <td className="py-3">{b.label}</td>
                            <td className="py-3">{(b.rate * 100).toFixed(1)}%</td>
                            <td className="py-3 text-right">€{fmt(taxable)}</td>
                            <td className="py-3 text-right font-semibold">€{fmtDec(tax)}</td>
                          </tr>
                        );
                      })}
                      <tr className="font-bold">
                        <td colSpan={2} className="py-3">Total USC</td>
                        <td />
                        <td className="py-3 text-right text-orange-600">€{fmtDec(result.usc)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── Tab: Bands ── */}
            {activeTab === 'bands' && (
              <div>
                <h3 className="text-xl font-bold mb-2">Tax Band Visualiser</h3>
                <p className="text-sm text-gray-500 mb-6">
                  See exactly how your income falls across the 20% and 40% bands and the Standard Rate Cut-Off Point (SRCOP) for your situation.
                </p>
                <TaxBandVisualiser result={result} />
                <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-xs text-blue-500 uppercase tracking-wide mb-1">Standard Rate (20%)</p>
                    <p className="text-2xl font-bold text-blue-800">€{fmt(Math.min(result.taxableIncome, result.srcop))}</p>
                    <p className="text-xs text-blue-400 mt-1">Tax: €{fmt(Math.min(result.taxableIncome, result.srcop) * 0.20)}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl">
                    <p className="text-xs text-red-500 uppercase tracking-wide mb-1">Higher Rate (40%)</p>
                    <p className="text-2xl font-bold text-red-700">€{fmt(result.higherBandAmount)}</p>
                    <p className="text-xs text-red-400 mt-1">Tax: €{fmt(result.higherBandAmount * 0.40)}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">SRCOP for your status</p>
                    <p className="text-2xl font-bold text-gray-700">€{fmt(result.srcop)}</p>
                    <p className="text-xs text-gray-400 mt-1">{result.inHigherBand ? '⬆ You are above this' : '✓ You are within this'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab: Insights ── */}
            {activeTab === 'insights' && (
              <div>
                <h3 className="text-xl font-bold mb-4">Tax Planning Insights</h3>
                <div className="space-y-3">
                  {insights.length > 0
                    ? insights.map((ins, i) => <Insight key={i} icon={ins.icon} text={ins.text} color={ins.color} />)
                    : <p className="text-gray-500 text-sm">Enter your salary above to see personalised insights.</p>
                  }
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl text-sm text-blue-800">
                  <p className="font-semibold mb-2">2026 Key Changes</p>
                  <ul className="space-y-1 list-disc list-inside text-blue-700">
                    <li>USC 3% band raised from €25,760 to €28,700 (Budget 2026)</li>
                    <li>USC rate cut from 4% to 3% on €28,701–€70,044 (Budget 2026)</li>
                    <li>PRSI rises from 4.1% → 4.2% (Jan 2026) → 4.35% (Oct 2026)</li>
                    <li>Income tax bands and credits unchanged from 2025</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  ⚠️ Estimates only. Standard credits applied; individual reliefs not included.
                  Always verify with Revenue.ie or a qualified Irish tax adviser.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white rounded-2xl overflow-hidden">
          <div className="p-10 md:p-14 text-center">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
              FINMOUNT TAX ADVISORY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Could You Be Paying Less Tax?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Salary structure, pension contributions, tax credits and business planning can significantly
              impact your take-home pay. Speak with a Finmount advisor for tailored guidance.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-10 text-left">
              {[
                { title: 'Tax Planning',      body: 'Maximise available credits and reliefs.' },
                { title: 'Pension Advice',    body: 'Improve retirement savings tax-efficiently.' },
                { title: 'Payroll Support',   body: 'PAYE, USC and PRSI compliance support.' },
                { title: 'Business Owners',   body: 'Salary vs dividend optimisation strategies.' },
              ].map((c) => (
                <div key={c.title} className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-blue-100">{c.body}</p>
                </div>
              ))}
            </div>
            <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <span>✓ ACCA Qualified Advisors</span>
              <span>✓ Irish Tax Specialists</span>
              <span>✓ Revenue Compliance Experts</span>
              <span>✓ Free Initial Consultation</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/353874905010"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                WhatsApp an Advisor
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SalaryCalculatorPage;
