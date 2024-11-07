import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Ppf() {
  const [totalInvestment, setTotalInvestment] = useState(10000);
  const [returnRate] = useState(7.1);
  const [timePeriod, setTimePeriod] = useState(15);

  // SIP Calculation Formula
  const FundCalculator = () => {
    const i = returnRate / 100; // Annual interest rate
  const n = timePeriod; // Total years

  // Future value calculation
  const futureValue = totalInvestment * ((1 + i) ** n - 1) / i;
  return Math.round(futureValue);
  };

  const totalInvested = Math.round(totalInvestment * timePeriod);
  const estimatedReturns = Math.round(FundCalculator() - totalInvested);
  const totalValue = Math.round(FundCalculator());

  const data = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        data: [totalInvested, estimatedReturns],
        backgroundColor: ["#e0e7ff", "#0062f2"],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full md:w-[65%]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">PPF Calculator</h2>
            <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
              <span className="text-main font-bold">PPF</span>
            </button>
          </div>

          {/* Total Investment Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Yearly investment
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(totalInvestment)}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="150000"
              step="500"
              value={totalInvestment}
              onChange={(e) => setTotalInvestment(Number(e.target.value))}
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
              min="15"
              max="50"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

           {/* Expected Return Rate Slider */}
           <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Expected return rate (p.a)
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                {returnRate} %
              </span>
            </div>
            {/* <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            /> */}
          </div>

          {/* Summary */}
          <div className="text-gray-700 font-medium mt-6">
            <p className="py-2">
              Invested amount:{" "}
              <span className="font-semibold">
                ₹{formatToIndianCurrency(totalInvested)}
              </span>
            </p>
            <p className="py-2">
              Est. returns:{" "}
              <span className="font-semibold">
                ₹{formatToIndianCurrency(estimatedReturns)}
              </span>
            </p>
            <p className="py-2">
              Total value:{" "}
              <span className="font-bold text-main">
                ₹{formatToIndianCurrency(totalValue)}
              </span>
            </p>
          </div>

          <button className="bg-main hover:bg-blue-800 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
            INVEST NOW
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

export default Ppf;
