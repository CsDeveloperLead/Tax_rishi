import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Compound() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6);
  const [time, setTime] = useState(5);
  const [frequency, setFrequency] = useState("Yearly");

  const getCompoundingFrequency = () => {
    switch (frequency) {
      case "Yearly":
        return 1; // Compounded annually
      case "Half-Yearly":
        return 2; // Compounded twice a year
      case "Quarterly":
        return 4; // Compounded four times a year
      default:
        return 1; // Default to annual
    }
  };

  const calculateCompoundInterest = () => {
    const n = getCompoundingFrequency();
    const r = rate / 100;
    const amount = principal * Math.pow((1 + r / n), n * time);
    const totalInterest = amount - principal;
    return {
      totalAmount: Math.round(amount),
      totalInterest: Math.round(totalInterest),
    };
  };

  const { totalAmount, totalInterest } = calculateCompoundInterest();

  const data = {
    labels: ["Principal amount", "Total interest"],
    datasets: [
      {
        data: [principal, totalInterest],
        backgroundColor: ["#E0E7FF", "#6366F1"],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full md:w-[65%]">
        <div className="mb-6">
  <label className="text-gray-700 font-medium">Principal amount</label>
  <input
    type="number"
    value={principal}
    onChange={(e) => setPrincipal(e.target.value === '' ? '' : Number(e.target.value))}
    className="w-full px-4 py-2 mt-1 border rounded-lg"
  />
</div>

<div className="mb-6">
  <label className="text-gray-700 font-medium">Rate of interest (p.a)</label>
  <input
    type="number"
    value={rate}
    onChange={(e) => setRate(e.target.value === '' ? '' : Number(e.target.value))}
    className="w-full px-4 py-2 mt-1 border rounded-lg"
  />
</div>

<div className="mb-6">
  <label className="text-gray-700 font-medium">Time period (years)</label>
  <input
    type="number"
    value={time}
    onChange={(e) => setTime(e.target.value === '' ? '' : Number(e.target.value))}
    className="w-full px-4 py-2 mt-1 border rounded-lg"
  />
</div>


          <div className="mb-6">
            <label className="text-gray-700 font-medium">Compounding frequency</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg"
            >
              <option value="Yearly">Yearly</option>
              <option value="Half-Yearly">Half-Yearly</option>
              <option value="Quarterly">Quarterly</option>
            </select>
          </div>

          <div className="text-gray-700 space-y-2 font-medium mt-8">
            <p>Principal amount: <span className="font-semibold">₹{formatToIndianCurrency(principal)}</span></p>
            <p>Total Interest: <span className="font-semibold">₹{formatToIndianCurrency(totalInterest)}</span></p>
            <p>Total Amount: <span className="font-bold text-main">₹{formatToIndianCurrency(totalAmount)}</span></p>
          </div>
        </div>

        <div className="mt-6 w-[30%] flex justify-center">
          <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}

export default Compound;
