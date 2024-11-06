import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Emi() {
  const [loanAmount, setLoanAmount] = useState(100000); // Initial loan amount
  const [interestRate, setInterestRate] = useState(10); // Annual interest rate
  const [loanTenure, setLoanTenure] = useState(1); // Loan tenure in years

  // EMI Calculation Formula
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100); // Convert annual rate to monthly rate
    const tenureInMonths = loanTenure * 12; // Convert tenure from years to months

    // EMI formula
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
      (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalAmount = monthlyEMI * loanTenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#e0e7ff", "#6366f1"],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full md:w-[65%]">
          <h2 className="text-xl font-bold mb-4">EMI Calculator</h2>

          {/* Loan Amount Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Loan Amount</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min="100000"
              max="100000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Interest Rate Slider */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Rate of Interest (p.a)</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {interestRate} %
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Loan Tenure Slider */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Loan Tenure (Years)</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {loanTenure} {loanTenure === 1 ? "Year" : "Years"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Summary */}
          <div className="text-gray-700 font-medium mt-6">
            <p className="py-2">
              Monthly EMI: <span className="font-semibold">₹{formatToIndianCurrency(monthlyEMI)}</span>
            </p>
            <p className="py-2">
              Principal amount: <span className="font-semibold">₹{formatToIndianCurrency(loanAmount)}</span>
            </p>
            <p className="py-2">
              Total interest: <span className="font-semibold">₹{formatToIndianCurrency(totalInterest)}</span>
            </p>
            <p className="py-2">
              Total amount: <span className="font-bold text-main">₹{formatToIndianCurrency(totalAmount)}</span>
            </p>
          </div>

          <button className="bg-main hover:bg-blue-800 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
            APPLY NOW
          </button>
        </div>

        {/* Right Sidebar - Pie Chart */}
        <div className="w-full lg:w-[30%] flex justify-center">
          <Pie
            data={data}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
}

export default Emi;
