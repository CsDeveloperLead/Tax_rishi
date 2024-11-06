import { useState } from "react";

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function NpsCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [returnRate, setReturnRate] = useState(8);
  const [age, setAge] = useState(18);
  const retirementAge = 60;

  // Calculation for the NPS maturity amount based on inputs
  const calculateMaturityAmount = () => {
    const n = (retirementAge - age) * 12; // number of months
    const r = (returnRate / 100) / 12; // monthly interest rate
    const maturityAmount = monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return Math.round(maturityAmount);
  };

  const totalInvestment = monthlyInvestment * 12 * (retirementAge - age);
  const maturityAmount = calculateMaturityAmount();
  const interestEarned = maturityAmount - totalInvestment;
  const minAnnuityInvestment = Math.round(maturityAmount * 0.4); // Assuming 40% of maturity goes to annuity

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <h2 className="text-2xl font-bold mb-4">NPS Calculator</h2>
      
      {/* Monthly Investment Slider */}
      <div className="my-4">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 font-medium">Investment per month</label>
          <span className="text-main font-bold">₹ {formatToIndianCurrency(monthlyInvestment)}</span>
        </div>
        <input
          type="range"
          min="500"
          max="100000"
          step="500"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg"
        />
      </div>
      
      {/* Expected Return Rate Slider */}
      <div className="my-4">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 font-medium">Expected return (p.a)</label>
          <span className="text-main font-bold">{returnRate}%</span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          step="0.1"
          value={returnRate}
          onChange={(e) => setReturnRate(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg"
        />
      </div>
      
      {/* Age Slider */}
      <div className="my-4">
        <div className="flex justify-between mb-2">
          <label className="text-gray-700 font-medium">Your age</label>
          <span className="text-main font-bold">{age} Yr</span>
        </div>
        <input
          type="range"
          min="18"
          max="60"
          step="1"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg"
        />
      </div>
      
      {/* Summary */}
      <div className="mt-6 text-gray-700 font-medium">
        <div className="flex justify-between py-2">
          <span>Total investment</span>
          <span>₹ {formatToIndianCurrency(totalInvestment)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Interest earned</span>
          <span>₹ {formatToIndianCurrency(interestEarned)}</span>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <span>Maturity amount</span>
          <span>₹ {formatToIndianCurrency(maturityAmount)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Min. annuity investment</span>
          <span>₹ {formatToIndianCurrency(minAnnuityInvestment)}</span>
        </div>
      </div>
    </div>
  );
}

export default NpsCalculator;
