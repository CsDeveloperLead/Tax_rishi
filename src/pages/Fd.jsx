import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Fd() {
  const [totalInvestment, setTotalInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(5);
  const [timeUnit, setTimeUnit] = useState("Years");

  // FD Calculation Formula with compounding frequency based on time unit
  const FundCalculator = () => {
    const i = returnRate / 100; // Interest rate in decimal
    const principal = totalInvestment;

    // Determine the number of compounding periods per year based on the time unit
    let n;
    switch (timeUnit) {
      case "Days":
        n = timePeriod / 365; // Convert days to years
        break;
      case "Months":
        n = timePeriod / 12; // Convert months to years
        break;
      default:
        n = timePeriod; // Time period in years
    }

    // Calculate future value using compounding formula
    const futureValue = principal * (1 + i) ** n;
    return Math.round(futureValue);
  };

  const totalInvested = Math.round(totalInvestment);
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

  // Function to display correct label based on unit
  const getTimePeriodLabel = () => {
    return `${timePeriod} ${timeUnit.slice(0, -1)}${timePeriod > 1 ? "s" : ""}`;
  };

  // Update max value of slider based on selected unit
  const getMaxValueForUnit = () => {
    switch (timeUnit) {
      case "Days":
        return 31;
      case "Months":
        return 11;
      default:
        return 25;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full md:w-[65%]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">FD Calculator</h2>
            <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
              <span className="text-main font-bold">FD</span>
            </button>
          </div>

          {/* Total Investment Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Total investment</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(totalInvestment)}
              </span>
            </div>
            <input
              type="range"
              min="5000"
              max="10000000"
              step="5000"
              value={totalInvestment}
              onChange={(e) => setTotalInvestment(Number(e.target.value))}
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
              max="15"
              step="1"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Time Period Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">Time period</label>
              <div className="flex items-center">
                {/* Dropdown for selecting time unit */}
                <select
                  value={timeUnit}
                  onChange={(e) => {
                    setTimeUnit(e.target.value);
                    setTimePeriod(1); // Reset time period to minimum when unit changes
                  }}
                  className="bg-transparent font-bold text-main mr-2 focus:outline-none"
                >
                  <option value="Years">Years</option>
                  <option value="Months">Months</option>
                  <option value="Days">Days</option>
                </select>
                <span className="text-main text-sm bg-[#CDD4F1] w-[120px] px-4 py-1 font-bold text-right">
                  {getTimePeriodLabel()}
                </span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max={getMaxValueForUnit()}
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

export default Fd;
