import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SideComponent from "../components/SideComponent";
import { Link } from "react-router-dom";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

// IRR calculation based on the provided algorithm
const IRR = (values, guess = 0.1) => {
  const irrResult = (values, dates, rate) => {
    const r = rate + 1;
    return values.reduce((acc, value, i) => {
      return acc + value / Math.pow(r, (dates[i] - dates[0]) / 365);
    }, 0);
  };

  const irrResultDeriv = (values, dates, rate) => {
    const r = rate + 1;
    return values.reduce((acc, value, i) => {
      if (i === 0) return acc; // Skip the initial investment
      const frac = (dates[i] - dates[0]) / 365;
      return acc - (frac * value) / Math.pow(r, frac + 1);
    }, 0);
  };

  const dates = values.map((_, i) => i * 365); // Assume yearly intervals
  const positive = values.some((v) => v > 0);
  const negative = values.some((v) => v < 0);

  if (!positive || !negative) return "Not Converging";

  const epsMax = 1e-10;
  const iterMax = 50;
  let resultRate = guess;
  let iteration = 0;

  while (iteration < iterMax) {
    const resultValue = irrResult(values, dates, resultRate);
    const newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    if (Math.abs(newRate - resultRate) < epsMax && Math.abs(resultValue) < epsMax) {
      return (newRate * 100).toFixed(2); // Return as percentage
    }
    resultRate = newRate;
    iteration++;
  }

  return "Not Converging";
};

function IrrCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [returnAmount, setReturnAmount] = useState(10000);
  const [timePeriod, setTimePeriod] = useState(10);
  const [irrResult, setIrrResult] = useState(null);

  useEffect(() => {
    const cashFlows = [-initialInvestment];
    for (let i = 1; i <= timePeriod; i++) {
      cashFlows.push(returnAmount);
    }
    setIrrResult(IRR(cashFlows));
  }, [initialInvestment, returnAmount, timePeriod]);

  const totalInvested = Math.round(initialInvestment);
  const estimatedReturns = Math.round(returnAmount);

  const data = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        data: [totalInvested, estimatedReturns],
        backgroundColor: ["#e0e7ff", "#398730"],
      },
    ],
  };

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20 text-[#14598D]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[600px] flex flex-col md:flex-row bg-white p-6 gap-10 rounded-lg shadow-lg">
            <div className="w-full md:w-[70%]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">IRR Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">IRR</span>
                </button>
              </div>

              {/* Inputs */}
              {/* Initial Investment */}
              <div className="my-8">
                <label className="text-gray-700 font-medium">Initial Investment</label>
                <input
                  type="range"
                  min="10000"
                  max="100000000"
                  step="10000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                />
              </div>

              {/* Expected Returns */}
              <div className="mb-6">
                <label className="text-gray-700 font-medium">Expected Return Amount</label>
                <input
                  type="range"
                  min="1000"
                  max="100000000"
                  step="1000"
                  value={returnAmount}
                  onChange={(e) => setReturnAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={returnAmount}
                  onChange={(e) => setReturnAmount(Number(e.target.value))}
                  className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                />
              </div>

              {/* Time Period */}
              <div className="mb-6">
                <label className="text-gray-700 font-medium">Time Period (Years)</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                />
              </div>

              {/* Summary */}
              <div className="text-gray-700 font-medium mt-6">
                <p>Invested Amount: ₹{formatToIndianCurrency(totalInvested)}</p>
                <p>Estimated Returns: ₹{formatToIndianCurrency(estimatedReturns)}</p>
                <p>
                  Your IRR:{" "}
                  <span className="font-bold text-main">
                    {irrResult ? `${irrResult}%` : "Not Converging"}
                  </span>
                </p>
              </div>
              <Link to="/contact">
                <button className="bg-main hover:bg-green-700 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
                  INVEST NOW
                </button>
              </Link>
            </div>

            {/* Pie Chart */}
            <div className="w-full md:w-[25%] h-[400px]">
              <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[25%]">
          <SideComponent />
        </div>
      </div>
    </div>
  );
}

export default IrrCalculator;
