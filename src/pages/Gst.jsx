import React, { useState } from "react";

function GSTCalculator() {
  const [amount, setAmount] = useState(25000);
  const [gstType, setGstType] = useState("excluding");
  const [taxRate, setTaxRate] = useState(12);

  const calculateGST = () => {
    const gstAmount =
      gstType === "excluding"
        ? (amount * taxRate) / 100
        : amount - (amount * 100) / (100 + taxRate);

    const postGstAmount =
      gstType === "excluding" ? amount + gstAmount : amount;

    return { gstAmount, postGstAmount };
  };

  const { gstAmount, postGstAmount } = calculateGST();

  const formatToIndianCurrency = (number) =>
    number.toLocaleString("en-IN");

  return (
    <div className=" max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-20">
      <h2 className="text-2xl font-bold mb-4">GST Calculator</h2>

      {/* GST Type Toggle */}
      <div className="my-4">
        <label className="font-medium">Calculate on:</label>
        <div className="flex items-center space-x-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="excluding"
              checked={gstType === "excluding"}
              onChange={() => setGstType("excluding")}
              className="mr-2"
            />
            Excluding GST
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="including"
              checked={gstType === "including"}
              onChange={() => setGstType("including")}
              className="mr-2"
            />
            Including GST
          </label>
        </div>
      </div>

      {/* Total Amount Slider */}
      <div className="my-4">
        <label className="font-medium">Total amount</label>
        <input
          type="range"
          min="5000"
          max="500000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full mt-2 accent-main"
        />
        <div className="text-main text-lg font-semibold text-right mt-2">
          ₹ {formatToIndianCurrency(amount)}
        </div>
      </div>

      {/* Tax Slab Dropdown */}
      <div className="my-4">
        <label className="font-medium">Tax slab</label>
        <select
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
        >
          <option value={0.25}>0.25%</option>
          <option value={3}>3%</option>
          <option value={5}>5%</option>
          <option value={12}>12%</option>
          <option value={18}>18%</option>
          <option value={28}>28%</option>
        </select>
      </div>

      {/* Results */}
      <div className="mt-6 p-10 bg-[#cdd4f1]  rounded-xl flex justify-between">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Total GST</h3>
          <p className="text-2xl font-bold text-main">
            ₹ {formatToIndianCurrency(Math.round(gstAmount))}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Post-GST amount</h3>
          <p className="text-2xl font-bold text-main">
            ₹ {formatToIndianCurrency(Math.round(postGstAmount))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GSTCalculator;
