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

function IrrCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [returnAmount, setReturnAmount] = useState(10000);
  const [timePeriod, setTimePeriod] = useState(10);
  const [irrResult, setIrrResult] = useState(null);
  
  // Calculate IRR automatically whenever any input value changes
  useEffect(() => {
    const result = calculateIRR(initialInvestment, returnAmount, timePeriod);
    setIrrResult(result);
  }, [initialInvestment, returnAmount, timePeriod]); // Recalculate when these values change

  const calculateIRR = (initialInvestment, returnAmount, timePeriod) => {
    const cashFlows = [-initialInvestment];
    for (let i = 1; i <= timePeriod; i++) {
      cashFlows.push(returnAmount);
    }

    let irr = 0.1; // Start with a guess of 10%
    let tolerance = 0.0001; // The acceptable error range
    let maxIterations = 1000; // Avoid infinite loops

    for (let i = 0; i < maxIterations; i++) {
      let npv = 0;
      let derivative = 0;

      for (let t = 0; t < cashFlows.length; t++) {
        npv += cashFlows[t] / Math.pow(1 + irr, t);
        derivative -= t * cashFlows[t] / Math.pow(1 + irr, t + 1);
      }

      const newIrr = irr - npv / derivative;
      if (Math.abs(newIrr - irr) < tolerance) {
        return newIrr * 100; // Return IRR as percentage
      }
      irr = newIrr;
    }

    return "Not Converging"; // If no convergence happens
  };

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
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full md:w-[75%] flex flex-col gap-10 ">
          <div className="border h-auto md:h-[600px] flex flex-col md:flex-row bg-white p-6 gap-10 rounded-lg shadow-lg">
            <div className="w-full md:w-[70%] ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">IRR Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">IRR</span>
                </button>
              </div>

              {/* Monthly Investment Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Initial investment
                  </label>
                  <input
                    type="text"
                    value={initialInvestment}
                    min="10000"
                    max="100000000"
                    step="10000"
                    onChange={(e) =>
                      setInitialInvestment(Number(e.target.value))
                    }
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right "
                  />
                </div>
                <input
                  type="range"
                  min="10000"
                  max="100000000"
                  step="10000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Expected Return Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Expected return Amount (per year) : 
                  </label>
                  <input
                    type="text"
                    value={returnAmount}
                    min="1000"
                    max="100000000"
                    step="1000"
                    onChange={(e) => setReturnAmount(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000000"
                  step="1000"
                  value={returnAmount}
                  onChange={(e) => setReturnAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Time period
                  </label>
                  <input
                    type="text"
                    value={timePeriod}
                    min="1"
                    max="20"
                    step="1"
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
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
                Your Internal Rate of return (IRR) on the cash flow will be :{" "}
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

            {/* Right Sidebar - Pie Chart */}
            <div className="w-full md:w-[25%] h-[400px]">
              <Pie
                data={data}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="w-full mr-10">
           hello
          </div>
        </div>

        <div className="w-full md:w-[25%]">
          <SideComponent/>
        </div>
      </div>
    </div>
  );
}

export default IrrCalculator;
