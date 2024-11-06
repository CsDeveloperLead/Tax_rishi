import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements for Chart.js
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(100000); // Initial investment
  const [withdrawal, setWithdrawal] = useState(10000); // Monthly withdrawal
  const [returnRate, setReturnRate] = useState(10); // Annual return rate
  const [timePeriod, setTimePeriod] = useState(10); // Time period in years

  // SWP Calculation Formula
  const calculateSWP = () => {
    const i = returnRate / 100 / 12; // Monthly interest rate
    const n = timePeriod * 12; // Total months

    // Future balance after SWP (accounting for monthly withdrawals)
    const futureBalance = totalInvestment * (1 + i) ** n - withdrawal * (((1 + i) ** n - 1) / i);
    return Math.round(futureBalance); // Rounded off to avoid decimals
  };

  const totalInvested = Math.round(totalInvestment);
  const totalWithdrawal = Math.round(withdrawal * 12 * timePeriod); // Total withdrawn amount over the period
  const estimatedReturns = Math.round(calculateSWP() - totalInvested); // Difference between final balance and initial investment
  const totalValue = Math.round(calculateSWP()); // Final balance after withdrawals and interest

  const data = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        data: [totalInvested, estimatedReturns],
        backgroundColor: ["#e0e7ff", "#6366f1"],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full md:w-[65%]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">SWP Calculator</h2>
            <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
              <span className="text-main font-bold">SWP</span>
            </button>
          </div>

          {/* Total Investment Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Total investment</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[120px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(totalInvestment)}
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="5000000"
              step="10000"
              value={totalInvestment}
              onChange={(e) => setTotalInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Withdrawal per month */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Withdrawal per month</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[120px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(withdrawal)}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={withdrawal}
              onChange={(e) => setWithdrawal(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Expected Return Rate Slider */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Expected return rate (p.a)</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {returnRate} %
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="0.1"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Time Period Slider */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Time period</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {timePeriod} Yr
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Summary */}
          <div className="text-gray-700 font-medium mt-6">
            <p className="py-2">
              Invested amount:{" "}
              <span className="font-semibold">₹{formatToIndianCurrency(totalInvested)}</span>
            </p>
            <p className="py-2">
              Total Withdrawal:{" "}
              <span className="font-semibold">₹{formatToIndianCurrency(totalWithdrawal)}</span>
            </p>
            <p className="py-2">
              Total value:{" "}
              <span className="font-bold text-main">₹{formatToIndianCurrency(totalValue)}</span>
            </p>
          </div>

          <button className="bg-main hover:bg-blue-800 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
            INVEST NOW
          </button>
        </div>

        {/* Right Sidebar - Pie Chart */}
        <div className="w-full lg:w-[30%] flex justify-center">
          <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}

export default SWPCalculator;
