import { useState } from "react";
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
    const newRate =
      resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    if (
      Math.abs(newRate - resultRate) < epsMax &&
      Math.abs(resultValue) < epsMax
    ) {
      return (newRate * 100).toFixed(2); // Return as percentage
    }
    resultRate = newRate;
    iteration++;
  }

  return "Not Converging";
};

function IrrCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [cashFlows, setCashFlows] = useState([0]);
  const [guess, setGuess] = useState(0.1);
  const [irrResult, setIrrResult] = useState(null);

  const handleAddYear = () => {
    setCashFlows([...cashFlows, 0]);
  };

  const handleRemoveYear = (index) => {
    const updatedCashFlows = cashFlows.filter((_, i) => i !== index);
    setCashFlows(updatedCashFlows);
  };

  
  const handleCashFlowChange = (index, value) => {
    const updatedCashFlows = [...cashFlows];
    updatedCashFlows[index] = value === "" ? 0 : Number(value);
    setCashFlows(updatedCashFlows);
  };

  const calculateIRR = () => {
    const values = [-initialInvestment, ...cashFlows];
    setIrrResult(IRR(values, guess));
  };
  const handleInitialInvestmentChange = (value) => {
    setInitialInvestment(value === "" ? 0 : Number(value));
  };

  const data = {
    labels: ["Initial Investment", "Cash Flows"],
    datasets: [
      {
        data: [
          initialInvestment,
          cashFlows.reduce((acc, flow) => acc + flow, 0),
        ],
        backgroundColor: ["#e0e7ff", "#398730"],
      },
    ],
  };

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20 text-[#14598D]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] h-auto flex  gap-10">
          <div className="w-full md:[75%] flex border  h-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full ">
            <h2 className="text-xl font-bold mb-6">
              Internal Rate of Return (IRR) Calculator
            </h2>

            {/* Initial Investment */}
            <div className="mb-6">
              <label className="text-gray-700 font-medium">
                Initial Investment
              </label>
              <input
                type="number"
                value={initialInvestment === 0 ? "" : initialInvestment}
                onChange={(e) => handleInitialInvestmentChange(e.target.value)}
                placeholder="Enter the initial investment"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2"
              />
            </div>

            {/* Cash Flows */}
            <div className="mb-6">
              <label className="text-gray-700 font-medium">Cash Flow</label>
              {cashFlows.map((flow, index) => (
                <div key={index} className="flex items-center gap-4 mt-2">
                  <input
                    type="number"
                    value={flow === 0 ? "" : flow}
                    onChange={(e) => handleCashFlowChange(index, e.target.value)}
                    className="flex-1 bg-gray-100 px-4 py-2 rounded-lg"
                    placeholder={`0`}
                  />
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleRemoveYear(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
                onClick={handleAddYear}
              >
                Add Year
              </button>
            </div>

            {/* Guess */}
            <div className="mb-6">
              <label className="text-gray-700 font-medium">
                Guess (Optional)
              </label>
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(Number(e.target.value))}
                className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2"
              />
            </div>

            {/* Results */}
            <button
              className="bg-main hover:bg-green-700 text-white font-semibold mt-4 px-6 py-2 rounded-lg"
              onClick={calculateIRR}
            >
              Calculate
            </button>

            <div className="text-gray-700 font-medium mt-6">
              <p>
                Invested Amount: ₹{formatToIndianCurrency(initialInvestment)}
              </p>
              <p>
                Estimated Cash Flows: ₹
                {formatToIndianCurrency(
                  cashFlows.reduce((acc, flow) => acc + flow, 0)
                )}
              </p>
              <p>
                Your IRR:{" "}
                <span className="font-bold text-main">
                  {irrResult ? `${irrResult}%` : "Not Converging"}
                </span>
              </p>
            </div>
            </div>
            {/* <div className="w-full md:w-[30%]">
              <Pie
                data={data}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div> */}
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
