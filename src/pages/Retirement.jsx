import { useState, useMemo } from "react";
import SideComponent from "../components/SideComponent";


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
    <>
      <div className="mx-10 my-10 md:my-20">
        <div className="flex flex-col lg:flex-row">
          <div className="w-[75%] flex flex-col gap-10">
            <div className="border h-[620px] flex bg-white p-6 gap-10 rounded-lg shadow-lg">
              <div className="w-full">
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
            </div>
            <div className="mr-10">
              {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
              <p className="text-gray-700 mb-4">
                Retiring comfortably is not an impossibility if you know how to invest and save wisely. To know how much return of investments you will be able to gain, you need the services of a retirement calculator. Remember that planning for the future is a mixture of both fiscal and investment prudence.
              </p>
              <p className="text-gray-700 mb-4">
                Retirement planning is essential for every citizen and especially for salaried and self-employed. Groww has a benchmarked retirement planning calculator which is at par with the best in the business.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                How does Groww’s Retirement Calculator help you?
              </h2>
              <p className="text-gray-700 mb-4">
                A retirement calculator in India is beneficial for several reasons such as:
              </p>
              <ul className="w-full list-disc list-inside">
                <li className="mb-2">It helps you calculate how much you need to save each month to retire with a large sum at the end of one’s professional career.</li>
                <li className="mb-2">A retirement benefits calculator also helps you determine the precise investment opportunities which you must take advantage of.</li>
                <li className="mb-2">Compare the various retirement options and plans that most competent financial organisations provide. Nowadays, even listed entities have their own retirement planning sections.</li>
                <li className="mb-2">A retirement savings calculator helps you identify the various retirement planning strategies which exist and helps you review and compare them too.</li>
                <li className="mb-2">If you have any high-value plans post-retirement, our calculator will help you save accordingly for such exigencies and planned spending sessions.</li>
                <li className="mb-2">Lastly, an online retirement calculator is useful when you are short on time and you need to take decisions on such important aspects as future investment options</li>
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Calculating Retirement Benefits using Our Calculator
              </h2>
              <p className="text-gray-700 mb-4">
                The calculator uses rules of compound interest to determine the total corpus you will be able to accumulate as per the investments made post-maturity.
              </p>
              <p className="text-gray-700 mb-4">
                These values are given below alongside figures provided for illustrative purposes –
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full table-auto border-collapse">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 w-80">Total Monthly expenses (in Rs)</td>
                      <td className="px-4 py-2 border border-gray-300 w-10">Rs. 40,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 ">Your current Age (in Years)</td>
                      <td className="px-4 py-2 border border-gray-300 ">30</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Your current retirement age (in years)</td>
                      <td className="px-4 py-2 border border-gray-300 ">60</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Avearage life expectancy (in India)</td>
                      <td className="px-4 py-2 border border-gray-300 ">70</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Average inflation rate every annum</td>
                      <td className="px-4 py-2 border border-gray-300 ">3%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">Existing investments for retirement (including EPF contributions)</td>
                      <td className="px-4 py-2 border border-gray-300 ">Rs. 2,00,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">ROI</td>
                      <td className="px-4 py-2 border border-gray-300 ">7%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-4">
                The figures above are only for illustrative purposes.
              </p>
              <p className="text-gray-700 mb-4">
                According to our formula, the person still has 30 years more of gainful employment and savings plus 10 years more post-retirement. An outlook of requirements and savings post-retirement –
              </p>
              <ul className="w-full list-disc list-inside">
                <li className="text-gray-900 mb-2">You will need a total corpus of Rs. 58.18 Lakh for post-retirement.</li>
                <li className="text-gray-900 mb-2">You will have to invest around Rs. 3,878 each month to reach the post-retirement figure.</li>
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                How to use Groww’s Retirement Calculator?
              </h2>
              <p className="text-gray-700 mb-4">
                All you have to do is input values in the designated slots and the calculated value will be displayed instantly.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Advantages of Groww’s Retirement Calculator
              </h2>
              <p className="text-gray-700 mb-4">
                Like most reliable online retirement calculators, this Groww calculator is a specially designed financial tool to help you determine the precise sums you need to save each month. It will aid you in long-term investment planning too
              </p>
              <p className="text-gray-700 mb-4">
                Here are some other advantages –
              </p>
              <ul className="w-full list-decimal list-inside">
                <li className="text-gray-900 mb-2">Easy to use and reliable. Makes manual calculations unnecessary.</li>
                <li className="text-gray-900 mb-2">Standardised formula to determine corpus required for a peaceful retirement.</li>
                <li className="text-gray-900 mb-2">One-click solution.</li>
              </ul>
            </div>
          </div>
          <div className="w-[25%]">
           <SideComponent/>
          </div>
        </div>
      </div>
    </>

  );
}

export default RetirementCalculator;
