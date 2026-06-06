import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateSalary } from '../utils/taxCalculator';

const SalaryCalculatorPage = () => {
  const [salary, setSalary] = useState(50000);
  const [bonus, setBonus] = useState(0);
  const [pension, setPension] = useState(5);
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [payFrequency, setPayFrequency] = useState('annual');

  const result = calculateSalary({
    salary,
    bonus,
    pensionPercent: pension,
    maritalStatus,
    payFrequency,
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16 mb-12 rounded-2xl">
          <div className="max-w-5xl mx-auto text-center px-6">

            <h1 className="text-5xl font-bold mb-6">
              Irish Salary Calculator 2026
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              Calculate PAYE, USC, PRSI, pension deductions and take-home pay using current Irish tax rules.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <span>✓ PAYE</span>
              <span>✓ USC</span>
              <span>✓ PRSI</span>
              <span>✓ Pension</span>
              <span>✓ Bonus Income</span>
              <span>✓ Married & Single</span>
            </div>

          </div>
        </section>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Input Panel */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Salary Details
            </h2>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                {payFrequency === 'annual'
                  ? 'Annual Salary (€)'
                  : payFrequency === 'monthly'
                  ? 'Monthly Salary (€)'
                  : payFrequency === 'fortnightly'
                  ? 'Fortnightly Salary (€)'
                  : 'Weekly Salary (€)'}
              </label>

              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Annual Bonus (€)
              </label>

              <input
                type="number"
                value={bonus}
                onChange={(e) => setBonus(Number(e.target.value))}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Marital Status
              </label>

              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg"
              >
                <option value="single">Single</option>
                <option value="married-one-income">
                  Married (One Income)
                </option>
                <option value="married-two-income">
                  Married (Two Incomes)
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Pay Frequency
              </label>

              <select
                value={payFrequency}
                onChange={(e) => setPayFrequency(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg"
              >
                <option value="annual">Annual</option>
                <option value="monthly">Monthly</option>
                <option value="fortnightly">Fortnightly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Pension Contribution (%)
              </label>

              <input
                type="range"
                min="0"
                max="40"
                value={pension}
                onChange={(e) => setPension(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-600 mt-2">
                {pension}% pension contribution
              </p>
            </div>

          </div>

          {/* Results Panel */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Your Results
            </h2>

            {(() => {
              const divisors = { annual: 1, monthly: 12, fortnightly: 26, weekly: 52 };
              const labels   = { annual: 'Annual', monthly: 'Monthly', fortnightly: 'Fortnightly', weekly: 'Weekly' };
              const d = divisors[payFrequency] ?? 1;
              const periodLabel = labels[payFrequency] ?? 'Annual';
              const fmt = (n) => (n / d).toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

              return (
                <div className="space-y-8">

                  <div>
                    <p className="text-gray-500 mb-2">
                      {periodLabel} Gross Income
                    </p>

                    <h3 className="text-4xl font-bold text-gray-900">
                      €{fmt(result.grossIncome)}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-500 mb-2">
                      {periodLabel} Deductions
                    </p>

                    <h3 className="text-4xl font-bold text-red-600">
                      €{fmt(result.totalDeductions)}
                    </h3>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                    <p className="text-gray-500 mb-2">
                      {periodLabel} Take Home Pay
                    </p>

                    <h3 className="text-4xl font-bold text-green-600">
                      €{fmt(result.takeHomePay)}
                    </h3>
                  </div>

                </div>
              );
            })()}

          </div>

        </div>

      {/* Monthly / Weekly / Fortnightly */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
      
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">
            Monthly Take Home
          </h3>
      
          <p className="text-3xl font-bold text-blue-900">
            €{result.monthlyTakeHome.toFixed(0)}
          </p>
        </div>
      
        <div className="bg-purple-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">
            Fortnightly Take Home
          </h3>
      
          <p className="text-3xl font-bold text-purple-700">
            €{result.fortnightlyTakeHome.toFixed(0)}
          </p>
        </div>
      
        <div className="bg-green-50 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">
            Weekly Take Home
          </h3>
      
          <p className="text-3xl font-bold text-green-700">
            €{result.weeklyTakeHome.toFixed(0)}
          </p>
        </div>
      
      </div>

        {/* Tax Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">
        <div className="mb-8">
        
          <div className="flex justify-between mb-2">
            <span>Total Deductions</span>
        
            <span>
              {result.deductionPercentage.toFixed(1)}%
            </span>
          </div>
        
          <div className="w-full bg-gray-200 rounded-full h-4">
        
            <div
              className="bg-red-500 h-4 rounded-full"
              style={{
                width: `${result.deductionPercentage}%`
              }}
            />
        
          </div>
        
        </div>

          {(() => {
            const divisors = { annual: 1, monthly: 12, fortnightly: 26, weekly: 52 };
            const labels   = { annual: 'Annual', monthly: 'Monthly', fortnightly: 'Fortnightly', weekly: 'Weekly' };
            const d = divisors[payFrequency] ?? 1;
            const periodLabel = labels[payFrequency] ?? 'Annual';
            const fmt = (n) => (n / d).toFixed(2);

            return (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Tax Breakdown ({periodLabel})
                </h2>

                <div className="space-y-4">

                  <div className="flex justify-between border-b pb-3">
                    <span>PAYE</span>
                    <span>€{fmt(result.paye)}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span>USC</span>
                    <span>€{fmt(result.usc)}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span>PRSI</span>
                    <span>€{fmt(result.prsi)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Pension</span>
                    <span>€{fmt(result.pension)}</span>
                  </div>

                </div>
              </>
            );
          })()}

        </div>

        {/* Consultation CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white rounded-2xl overflow-hidden">
        
          <div className="p-10 md:p-14 text-center">
        
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
              FINMOUNT TAX ADVISORY
            </div>
        
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Could You Be Paying Less Tax?
            </h2>
        
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Salary structure, pension contributions, tax credits and business
              planning can significantly impact your take-home pay.
              Speak with a Finmount advisor for tailored guidance.
            </p>
        
            <div className="grid md:grid-cols-4 gap-4 mb-10 text-left">
        
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Tax Planning
                </h3>
                <p className="text-sm text-blue-100">
                  Maximise available credits and reliefs.
                </p>
              </div>
        
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Pension Advice
                </h3>
                <p className="text-sm text-blue-100">
                  Improve retirement savings tax-efficiently.
                </p>
              </div>
        
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Payroll Support
                </h3>
                <p className="text-sm text-blue-100">
                  PAYE, USC and PRSI compliance support.
                </p>
              </div>
        
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Business Owners
                </h3>
                <p className="text-sm text-blue-100">
                  Salary vs dividend optimisation strategies.
                </p>
              </div>
        
            </div>
        
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
                <span>✓ ACCA Qualified Advisors</span>
                <span>✓ Irish Tax Specialists</span>
                <span>✓ Revenue Compliance Experts</span>
                <span>✓ Free Initial Consultation</span>
              </div>
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
