import { useState, useMemo } from "react";

function RetirementCalculator() {
  const [age, setAge] = useState(25);
  const [monthlyExpenses, setMonthlyExpenses] = useState(25000);
  const [lifestyle, setLifestyle] = useState("king");
  const [investmentStrategy, setInvestmentStrategy] = useState("safe");

  // Constants for retirement calculation
  const retirementAge = 60;
  const yearsToRetirement = retirementAge - age;
  const lifeExpectancyAfterRetirement = 20; // Assuming 20 years post-retirement

  // Adjustments based on lifestyle choices
  const lifestyleMultiplier = {
    king: 1.5,
    happy: 1,
    monk: 0.7,
  };

  // Expected return rates based on investment strategy
  const investmentReturnRate = {
    safe: 0.06,  // 6% for safe investments
    aggressive: 0.12,  // 12% for aggressive investments
  };

  // Calculations
  const annualExpenses = monthlyExpenses * 12 * lifestyleMultiplier[lifestyle];
  const totalRequired = useMemo(() => {
    const futureExpenses = annualExpenses * lifeExpectancyAfterRetirement;
    const rate = investmentReturnRate[investmentStrategy];
    return futureExpenses / (1 - Math.pow(1 + rate, -lifeExpectancyAfterRetirement));
  }, [annualExpenses, investmentStrategy]);

  const monthlySavingsRequired = useMemo(() => {
    const rate = investmentReturnRate[investmentStrategy];
    return totalRequired * rate / ((Math.pow(1 + rate, yearsToRetirement) - 1) / rate);
  }, [totalRequired, investmentStrategy, yearsToRetirement]);

  const formatToIndianCurrency = (number) => number.toLocaleString("en-IN");

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg my-10 md:my-14">
      <h2 className="text-2xl font-bold mb-4">Retirement Calculator</h2>

      {/* Age Input */}
      <div className="my-4">
        <label className="font-medium">How old are you?</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full px-4 py-2 mt-2 border rounded-lg"
          placeholder="Enter your age"
        />
      </div>

      {/* Monthly Expenses Input */}
      <div className="my-4">
        <label className="font-medium">How much do you spend per month?</label>
        <input
          type="number"
          value={monthlyExpenses}
          onChange={(e) => setMonthlyExpenses(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full px-4 py-2 mt-2 border rounded-lg"
          placeholder="Enter your monthly expenses"
        />
      </div>

      {/* Lifestyle Choice */}
      <div className="my-4">
        <label className="font-medium">What kind of retirement do you want?</label>
        <div className="flex flex-col mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="king"
              checked={lifestyle === "king"}
              onChange={() => setLifestyle("king")}
              className="mr-2"
            />
            Like a King
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="happy"
              checked={lifestyle === "happy"}
              onChange={() => setLifestyle("happy")}
              className="mr-2"
            />
            I am happy the way I am
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="monk"
              checked={lifestyle === "monk"}
              onChange={() => setLifestyle("monk")}
              className="mr-2"
            />
            Like a Monk
          </label>
        </div>
      </div>

      {/* Investment Strategy */}
      <div className="my-4">
        <label className="font-medium">Where are you saving for your retirement?</label>
        <div className="flex flex-col mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="safe"
              checked={investmentStrategy === "safe"}
              onChange={() => setInvestmentStrategy("safe")}
              className="mr-2"
            />
            Safe (PF, FD, etc.)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="aggressive"
              checked={investmentStrategy === "aggressive"}
              onChange={() => setInvestmentStrategy("aggressive")}
              className="mr-2"
            />
            Aggressive (Mutual Funds, Equity, etc.)
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 p-6 bg-[#cdd4f1] rounded-lg text-center flex flex-col">
        <h3 className="text-xl font-semibold">
          Amount required for retirement: <span className="font-bold text-main">  ₹ {formatToIndianCurrency(Math.round(totalRequired))}</span>
        </h3>
        <h3 className="text-xl font-semibold mt-4">
          How much do you need to save per month to retire? ₹ <span className="font-bold text-main">  ₹ {formatToIndianCurrency(Math.round(monthlySavingsRequired))}</span>
        </h3>
      </div>
    </div>
  );
}

export default RetirementCalculator;
