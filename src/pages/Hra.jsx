import { useState, useMemo } from "react";

function HraCalculator() {
  const [basicSalary, setBasicSalary] = useState(540000);
  const [dearnessAllowance, setDearnessAllowance] = useState(0);
  const [hraReceived, setHraReceived] = useState(77985);
  const [rentPaid, setRentPaid] = useState(300000);
  const [isMetro, setIsMetro] = useState(false);

  // Function to format number to Indian currency
  const formatToIndianCurrency = (number) => number.toLocaleString("en-IN");

  // HRA Exemption Calculation
  const hraExempted = useMemo(() => {
    const fiftyPercentOfBasic = (isMetro ? 0.5 : 0.4) * basicSalary;
    const rentMinusTenPercent = Math.max(rentPaid - 0.1 * (basicSalary + dearnessAllowance), 0);
    return Math.min(hraReceived, fiftyPercentOfBasic, rentMinusTenPercent);
  }, [basicSalary, dearnessAllowance, hraReceived, rentPaid, isMetro]);

  const hraTaxable = hraReceived - hraExempted;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10">
      <h2 className="text-2xl font-bold mb-4">HRA Calculator</h2>

      {/* Basic Salary Input */}
      <div className="my-4">
        <label className="font-medium">Basic Salary (p.a.)</label>
        <input
          type="number"
          value={basicSalary}
          onChange={(e) => setBasicSalary(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full px-4 py-2 mt-2 border rounded-lg "
          placeholder="Enter Basic Salary"
        />
      </div>

      {/* Dearness Allowance Input */}
      <div className="my-4">
        <label className="font-medium">Dearness Allowance (p.a.)</label>
        <input
          type="number"
          value={dearnessAllowance}
          onChange={(e) => setDearnessAllowance(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full px-4 py-2 mt-2 border rounded-lg "
          placeholder="Enter Dearness Allowance"
        />
      </div>

      {/* HRA Received Input */}
      <div className="my-4">
        <label className="font-medium">HRA Received (p.a.)</label>
        <input
          type="number"
          value={hraReceived}
          onChange={(e) => setHraReceived(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full px-4 py-2 mt-2 border rounded-lg "
          placeholder="Enter HRA Received"
        />
      </div>

      {/* Total Rent Paid Input */}
      <div className="my-4">
        <label className="font-medium">Total Rent Paid (p.a.)</label>
        <input
          type="number"
          value={rentPaid}
          onChange={(e) => setRentPaid(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full px-4 py-2 mt-2 border rounded-lg "
          placeholder="Enter Total Rent Paid"
        />
      </div>

      {/* Metro City Option */}
      <div className="my-4 flex items-center">
        <label className="font-medium mr-4">Are you working in a metro city?</label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            checked={isMetro}
            onChange={() => setIsMetro(true)}
            className="text-main"
          />
          <span>Yes</span>
        </label>
        <label className="flex items-center space-x-3 ml-4">
          <input
            type="radio"
            checked={!isMetro}
            onChange={() => setIsMetro(false)}
            className="text-main"
          />
          <span>No</span>
        </label>
      </div>

      {/* Exempted and Taxable HRA Results */}
      <div className="mt-6 px-20  py-14 bg-[#cdd4f1] rounded-lg text-center flex justify-between">
        <h3 className="text-xl font-semibold">Exempted HRA: ₹ <span className="text-main font-bold"> {formatToIndianCurrency(hraExempted)}</span></h3>
        <h3 className="text-xl font-semibold">Taxable HRA: ₹ <span className="text-main font-bold">{formatToIndianCurrency(hraTaxable)}</span> </h3>
      </div>
    </div>
  );
}

export default HraCalculator;
