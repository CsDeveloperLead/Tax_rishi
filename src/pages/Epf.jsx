import { useState, useMemo } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Epf() {
  const [monthlySalary, setMonthlySalary] = useState(10000);
  const [returnRate] = useState(8.1); // Annual return rate in percentage
  const [age, setAge] = useState(25);
  const [contribution, setContribution] = useState(15); // Employee's contribution to EPF in percentage
  const [annualIncrease, setAnnualIncrease] = useState(8); // Expected annual salary increase percentage

  const retirementAge = 58;

  const totalValue = useMemo(() => {
    const yearsToInvest = retirementAge - age;
    let totalEPFBalance = 0;
    let currentMonthlySalary = monthlySalary;

    // Monthly interest rate
    const monthlyInterestRate = (returnRate / 100) / 12;

    for (let year = 0; year < yearsToInvest; year++) {
      for (let month = 0; month < 12; month++) {
        // Employee's monthly contribution
        const employeeContribution = (currentMonthlySalary * contribution) / 100;
        // Employer's monthly contribution (fixed 3.67% of basic salary)
        const employerContribution = (currentMonthlySalary * 3.67) / 100;
        // Total contribution for the month
        const monthlyContribution = employeeContribution + employerContribution;

        // Add monthly contribution to the EPF balance
        totalEPFBalance += monthlyContribution;
        // Apply monthly compounding interest to the EPF balance
        totalEPFBalance *= (1 + monthlyInterestRate);
      }

      // Increase salary annually based on the annualIncrease percentage
      currentMonthlySalary *= 1 + (annualIncrease / 100);
    }

    return formatToIndianCurrency(Math.round(totalEPFBalance));
  }, [monthlySalary, returnRate, age, contribution, annualIncrease]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full ">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">EPF Calculator</h2>
            <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
              <span className="text-main font-bold">EPF</span>
            </button>
          </div>

          {/* Total Investment Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Monthly Salary (Basic + DA)
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(monthlySalary)}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Age Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Your age</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {age} years
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="58"
              step="1"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Contribution to EPF Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Your contribution to EPF
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {contribution} %
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="20"
              step="1"
              value={contribution}
              onChange={(e) => setContribution(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Annual Increase in Salary Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Annual increase in salary
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {annualIncrease} %
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="15"
              step="1"
              value={annualIncrease}
              onChange={(e) => setAnnualIncrease(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Expected Return Rate Display */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Expected return rate (p.a)
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {returnRate} %
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-2 p-4 rounded-3xl bg-[#cdd4f1] items-center justify-center">
            <span>You will have accumulated</span>
            <h1 className="text-3xl text-main font-bold">₹ {totalValue}</h1>
            <span>by the time you retire</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Epf;
