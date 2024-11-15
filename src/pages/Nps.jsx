import { useState } from "react";
import SideComponent from "../components/SideComponent";

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function NpsCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [returnRate, setReturnRate] = useState(8);
  const [age, setAge] = useState(18);
  const retirementAge = 60;

  // Calculation for the NPS maturity amount based on inputs
  const calculateMaturityAmount = () => {
    const n = (retirementAge - age) * 12; // number of months
    const r = (returnRate / 100) / 12; // monthly interest rate
    const maturityAmount = monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return Math.round(maturityAmount);
  };

  const totalInvestment = monthlyInvestment * 12 * (retirementAge - age);
  const maturityAmount = calculateMaturityAmount();
  const interestEarned = maturityAmount - totalInvestment;
  const minAnnuityInvestment = Math.round(maturityAmount * 0.4); // Assuming 40% of maturity goes to annuity

  return (
    <div className="mx-10 my-10 md:my-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-[75%] flex flex-col gap-10">
          <div className="border h-[520px] flex bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4">NPS Calculator</h2>

              {/* Monthly Investment Slider */}
              <div className="my-4">
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-medium">Investment per month</label>
                  <span className="text-main font-bold">₹ {formatToIndianCurrency(monthlyInvestment)}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg"
                />
              </div>

              {/* Expected Return Rate Slider */}
              <div className="my-4">
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-medium">Expected return (p.a)</label>
                  <span className="text-main font-bold">{returnRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg"
                />
              </div>

              {/* Age Slider */}
              <div className="my-4">
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-medium">Your age</label>
                  <span className="text-main font-bold">{age} Yr</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="60"
                  step="1"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg"
                />
              </div>

              {/* Summary */}
              <div className="mt-6 text-gray-700 font-medium">
                <div className="flex justify-between py-2">
                  <span>Total investment</span>
                  <span>₹ {formatToIndianCurrency(totalInvestment)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Interest earned</span>
                  <span>₹ {formatToIndianCurrency(interestEarned)}</span>
                </div>
                <div className="flex justify-between py-2 font-semibold">
                  <span>Maturity amount</span>
                  <span>₹ {formatToIndianCurrency(maturityAmount)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Min. annuity investment</span>
                  <span>₹ {formatToIndianCurrency(minAnnuityInvestment)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-10">
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
            <p className="text-gray-700 mb-4">
              The National Pension System or NPS is a measure to introduce a degree of financial stability for Indian citizens after they have retired. It was previously known as the National Pension Scheme. Anyone over the age of 60 is eligible to use the amount gathered in the pension corpus. You will need an NPS calculator to determine how much the total accumulation amounts to.
            </p>
            <p className="text-gray-700 mb-4">
              Any resident of the country who is between 18 and 60 years of age is eligible to build up a pension corpus. It is an investment and an asset after retirement. Since most people in India have private jobs with little security, they need a National Pension Scheme calculator. Pension schemes in the country are not market-linked instruments and earn sound returns.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How can an NPS calculator help you?
            </h2>
            <p className="text-gray-700 mb-4">
              Here are the ways the NPS pension calculator will assist you.
            </p>
            <ol className="w-full list-decimal list-inside mb-4">
              <li className="mb-4">It provides you with the amount of money which you are entitled to in the future. The pension amount is an investment and not a liability. Using an NPS calculator online is essential to determine the total corpus.</li>
              <li className="mb-4">Under the existing legislature, no individual can withdraw the entire amount of post-retirement. Besides, 40% worth of the total sum must be invested in annuities. Furthermore, the remaining 60% is subjected to taxation too. All these figures will be disclosed in detail once you start using our NPS scheme calculator .</li>
              <li className="mb-4">The calculator never errs. If you have ever tried to manually calculate the pension amounts, you will understand how tough it is. Thankfully, our NPS calculator in India will automate the entire process.</li>
              <li className="mb-4">Lastly, you can now determine the taxation regime on pension funds, the total amount you will have every month-end and several other details- all via the calculator.</li>
            </ol>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Formula for calculating Pension amounts
            </h2>
            <p className="text-gray-700 mb-4">
              NPS, like all pension schemes around the world, uses compounding interest to calculate returns.
            </p>
            <p className="text-gray-700 mb-4">
              The formula that the National Pension Scheme calculator India uses is:
            </p>
            <p className="text-gray-700 mb-4">
              {'A = P (1 + r/n) ^ nt'}
            </p>
            <p className="text-gray-700 mb-4">
              In the equation, the amount is A. The other variables are the following.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <tbody>
                  <tr className="">
                    <td className="px-4 py-2 border border-gray-300 w-10">P</td>
                    <td className="px-4 py-2 border border-gray-300 w-80">Principle sum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">R/r</td>
                    <td className="px-4 py-2 border border-gray-300 ">Rate of interest per annum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">N/n</td>
                    <td className="px-4 py-2 border border-gray-300 ">Number of times interest compounds</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">T/t</td>
                    <td className="px-4 py-2 border border-gray-300 ">Total tenure</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              An example of how pension aggregates is essential here.
            </p>
            <p className="text-gray-700 mb-4">
              If you are 34 years old and your monthly contribution is Rs 3000, you will need to add to the pension account for 26 more years. Assuming that the rate of interest or ROI is expected at 10% every year, the following are the details the National Pension Plan calculator offers.
            </p>
            <p className="text-gray-700 mb-4">
              Total Principal invested= Rs 9.36 Lakh
            </p>
            <p className="text-gray-700 mb-4">
              Sum expected on Maturity = 44.35 Lakh
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to use the NPS calculator?
            </h2>
            <p className="text-gray-700 mb-4">
              Follow the simple steps mentioned below to use the NPS calculator
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 1 :</span>  Enter the amount you want to invest every month towards your retirement corpus in the pension scheme
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 2 :</span> Enter your present age
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 3 :</span> Use the slider to select the expected rate of return
            </p>
            <p className="text-gray-700 mb-4">
              The results will be displayed within seconds
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of using the National Pension Scheme calculator
            </h3>
            <p className="text-gray-700 mb-4">
              These are the following:
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">No more manual calculations. The right results every time.</li>
              <li className="mb-4">You will now know how much your pension amount will be. That will aid you in future planning. </li>
              <li className="mb-4">One-stop online calculation.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Likewise, Groww provides you with a wide range of other financial tools besides the NPS calculator. You will find them at the bottom of the page.
            </p>
            <p className="text-gray-700 mb-4">
              “Looking to invest? Open an account with Groww and start investing in direct Mutual Funds for free”
            </p>

          </div>
        </div>
        <div className="w-[25%]">
         <SideComponent/>
        </div>
      </div>
    </div>

  );
}

export default NpsCalculator;
