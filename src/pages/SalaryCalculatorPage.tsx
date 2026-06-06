import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateSalary } from '../utils/taxCalculator';

const SalaryCalculatorPage = () => {
  const [salary, setSalary] = useState(50000);
  const [bonus, setBonus] = useState(0);
  const [pension, setPension] = useState(5);

  const result = calculateSalary({
    salary,
    bonus,
    pensionPercent: pension,
    maritalStatus: 'single'
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
                Annual Salary (€)
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
                Pension Contribution (%)
              </label>

              <input
                type="number"
                value={pension}
                onChange={(e) => setPension(Number(e.target.value))}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

          </div>

          {/* Results Panel */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Your Results
            </h2>

            <div className="space-y-8">

              <div>
                <p className="text-gray-500 mb-2">
                  Gross Income
                </p>

                <h3 className="text-4xl font-bold text-gray-900">
                  €{result.grossIncome.toLocaleString()}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 mb-2">
                  Total Deductions
                </p>

                <h3 className="text-4xl font-bold text-red-600">
                  €{result.totalDeductions.toLocaleString()}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 mb-2">
                  Take Home Pay
                </p>

                <h3 className="text-4xl font-bold text-green-600">
                  €{result.takeHomePay.toLocaleString()}
                </h3>
              </div>

            </div>

          </div>

        </div>

        {/* Monthly / Weekly */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-3">
              Monthly Take Home
            </h3>

            <p className="text-3xl font-bold text-blue-900">
              €{(result.takeHomePay / 12).toFixed(0)}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-3">
              Weekly Take Home
            </h3>

            <p className="text-3xl font-bold text-green-700">
              €{(result.takeHomePay / 52).toFixed(0)}
            </p>
          </div>

        </div>

        {/* Tax Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Tax Breakdown
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>PAYE</span>
              <span>€{result.paye.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>USC</span>
              <span>€{result.usc.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>PRSI</span>
              <span>€{result.prsi.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Pension</span>
              <span>€{result.pension.toFixed(2)}</span>
            </div>

          </div>

        </div>

        {/* CTA */}
        <section className="bg-blue-900 text-white rounded-2xl p-10 mt-12 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Need help reducing your tax bill?
          </h2>

          <p className="text-blue-100 mb-6">
            Speak with a Finmount advisor and explore tax-efficient salary,
            pension and business structures.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Book Free Consultation
          </Link>

        </section>

      </div>

    </div>
  );
};

export default SalaryCalculatorPage;
