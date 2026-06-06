import React, { useState } from 'react';
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
      <div className="max-w-5xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-8">
          Irish Salary Calculator 2026
        </h1>

        <div className="bg-white p-8 rounded-xl shadow">

          <div className="mb-6">
            <label className="block mb-2">
              Annual Salary (€)
            </label>

            <input
              type="number"
              value={salary}
              onChange={(e) =>
                setSalary(Number(e.target.value))
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Annual Bonus (€)
            </label>

            <input
              type="number"
              value={bonus}
              onChange={(e) =>
                setBonus(Number(e.target.value))
              }
              className="w-full border p-3 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Pension Contribution (%)
            </label>

            <input
              type="number"
              value={pension}
              onChange={(e) =>
                setPension(Number(e.target.value))
              }
              className="w-full border p-3 rounded"
            />
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Gross Income
            </h3>

            <p className="text-3xl font-bold">
              €{result.grossIncome.toLocaleString()}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Total Deductions
            </h3>

            <p className="text-3xl font-bold text-red-600">
              €{result.totalDeductions.toLocaleString()}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Take Home Pay
            </h3>

            <p className="text-3xl font-bold text-green-600">
              €{result.takeHomePay.toLocaleString()}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SalaryCalculatorPage;
