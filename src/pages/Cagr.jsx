import { useState, useMemo } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Cagr() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalInvestment, setFinalInvestment] = useState(20000);
  const [timePeriod, setTimePeriod] = useState(5);

  // Calculate CAGR
  const cagr = useMemo(() => {
    if (initialInvestment <= 0 || finalInvestment <= 0 || timePeriod <= 0) {
      return 0;
    }
    return (
      ((finalInvestment / initialInvestment) ** (1 / timePeriod) - 1) * 100
    ).toFixed(2); // Multiplied by 100 to get a percentage
  }, [initialInvestment, finalInvestment, timePeriod]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">CAGR Calculator</h2>
            <button className="bg-gray-200 rounded-full p-3 focus:outline-none">
              <span className="text-main font-bold">CAGR</span>
            </button>
          </div>

          {/* Initial Investment Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Initial Investment
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(initialInvestment)}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000000"
              step="1000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Final Investment Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Final Investment
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(finalInvestment)}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000000"
              step="1000"
              value={finalInvestment}
              onChange={(e) => setFinalInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Time Period Slider */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Time period</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right">
                {timePeriod} Yr
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Summary */}
          <div className="flex w-full flex-col gap-2 bg-[#cdd4f1] p-6 rounded-3xl items-center justify-center">
            <h1 className="text-3xl font-bold">CAGR is <span className="text-main">{cagr} %</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cagr;
