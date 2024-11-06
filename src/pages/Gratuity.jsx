import { useState, useMemo } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Gratuity() {
  const [monthlySalary, setMonthlySalary] = useState(10000); // renamed for clarity
  const [yearsOfService, setYearsOfService] = useState(5);

  // Calculate Gratuity
  const gratuity = useMemo(() => {
    if (monthlySalary <= 0 || yearsOfService < 5) { // Minimum of 5 years required
      return 0;
    }
    return Math.round((monthlySalary * yearsOfService * 15) / 26);
  }, [monthlySalary, yearsOfService]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Gratuity Calculator</h2>
            <button className="bg-gray-200 rounded-full p-3 focus:outline-none">
              <span className="text-main font-bold">Gratuity</span>
            </button>
          </div>

          {/* Monthly Salary Slider */}
          <div className="my-8">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">
                Monthly Salary (Basic + DA)
              </label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right">
                ₹ {formatToIndianCurrency(monthlySalary)}
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="10000000"
              step="10000"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Years of Service Slider */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-gray-700 font-medium">Years of Service</label>
              <span className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right">
                {yearsOfService} Yr
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={yearsOfService}
              onChange={(e) => setYearsOfService(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-2 w-full p-4 rounded-3xl bg-[#cdd4f1] items-center justify-center">
            <span>Total Gratuity Payable</span>
            <h1 className="text-3xl font-bold">₹ {formatToIndianCurrency(gratuity)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gratuity;
