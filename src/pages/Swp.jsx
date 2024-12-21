import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SideComponent from "../components/SideComponent";
import { Link } from "react-router-dom";

// Register the required elements for Chart.js
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(100000); // Initial investment
  const [withdrawal, setWithdrawal] = useState(10000); // Monthly withdrawal
  const [returnRate, setReturnRate] = useState(10); // Annual return rate
  const [timePeriod, setTimePeriod] = useState(10); // Time period in years

  // SWP Calculation Formula
  const calculateSWP = () => {
    const i = returnRate / 100 / 12; // Monthly interest rate
    const n = timePeriod * 12; // Total months

    // Future balance after SWP (accounting for monthly withdrawals)
    const futureBalance =
      totalInvestment * (1 + i) ** n - withdrawal * (((1 + i) ** n - 1) / i);
    return Math.round(futureBalance); // Rounded off to avoid decimals
  };

  const totalInvested = Math.round(totalInvestment);
  const totalWithdrawal = Math.round(withdrawal * 12 * timePeriod); // Total withdrawn amount over the period
  const estimatedReturns = Math.round(calculateSWP() - totalInvested); // Difference between final balance and initial investment
  const totalValue = Math.round(calculateSWP()); // Final balance after withdrawals and interest

  const data = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        data: [totalInvested, estimatedReturns],
        backgroundColor: ["#e0e7ff", "#0062f2"],
      },
    ],
  };

  return (
    <div className="mx-4 md:mx-10  my-10 md:my-20 text-[#14598D]">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full md:w-[75%] flex flex-col gap-10 ">
          <div className="border h-auto md:h-[620px] flex flex-col md:flex-row bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full md:w-[70%]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">SWP Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">SWP</span>
                </button>
              </div>

              {/* Total Investment Slider */}
              <div className="my-8">
                <div className="flex justify-between">
                  <label className="font-medium">
                    Total investment
                  </label>
                  <input
                    type="text"
                    min="10000"
                    max="5000000"
                    step="10000"
                    value={totalInvestment}
                    onChange={(e) => setTotalInvestment(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[120px] px-4 py-1 font-bold text-right "
                  />
                </div>
                <input
                  type="range"
                  min="10000"
                  max="5000000"
                  step="10000"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Withdrawal per month */}
              <div className="my-8">
                <div className="flex justify-between">
                  <label className="font-medium">
                    Withdrawal per month
                  </label>
                  <input
                    type="text"
                    min="500"
                    max="50000"
                    step="500"
                    value={withdrawal}
                    onChange={(e) => setWithdrawal(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[120px] px-4 py-1 font-bold text-right "
                  />
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={withdrawal}
                  onChange={(e) => setWithdrawal(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Expected Return Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label className="font-medium">
                    Expected return rate (p.a)
                  </label>
                  <input
                    type="text"
                    min="1"
                    max="30"
                    step="0.1"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right "
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label className="font-medium">
                    Time period
                  </label>
                  <input
                    type="text"
                    min="1"
                    max="30"
                    step="1"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right "
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Summary */}
              <div className="font-medium mt-6">
                <p className="py-2">
                  Invested amount:{" "}
                  <span className="font-semibold">
                    ₹{formatToIndianCurrency(totalInvested)}
                  </span>
                </p>
                <p className="py-2">
                  Total Withdrawal:{" "}
                  <span className="font-semibold">
                    ₹{formatToIndianCurrency(totalWithdrawal)}
                  </span>
                </p>
                <p className="py-2">
                  Total value:{" "}
                  <span className="font-bold text-main">
                    ₹{formatToIndianCurrency(totalValue)}
                  </span>
                </p>
              </div>
              <Link to="/contact">
              <button className="bg-main hover:bg-green-700 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
                INVEST NOW
              </button>
              </Link>
            </div>
            <div className="w-full md:w-[25%] h-[400px]">
              <Pie
                data={data}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="mr-10 w-full">
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
            <p className="text-sm md:text-base text-justify mb-4">
              SWP stands for systematic withdrawal plan. Under SWP, if you
              invest lump sum in a mutual fund, you can set an amount you’ll
              withdraw regularly and the frequency at which you’ll withdraw.
              <br />
              <br />
              For example, let’s say you invested in HDFC Top 200 Fund an amount
              of ₹1 lakh for a year. Let’s assume that you decided to withdraw
              an amount of ₹10000 per month. So every month, your investment in
              the fund will reduce by ₹10000. The amount left every month after
              withdrawal will continue to remain invested.
              <br />
              <br />
              Use the above SWP calculator to know how much you can withdraw
              from your lumpsum investments.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              How can a SWP calculator assist you?
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              As per the Systematic Withdrawal Plan, an individual needs to
              invest a particular amount and withdraw a certain amount of the
              corpus invested each month. After withdrawal, the amount will be
              deducted from the investment while it continues to accumulate
              interest.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              It is difficult to accurately calculate the monthly withdrawals
              and total matured sum. Groww can help you with this complex
              calculations with the its SWP calculator. This Systematic
              Withdrawal Plan calculator easily computes your matured sum as per
              your monthly withdrawals precisely. Calculators are simplifying
              the way people invest in mutual funds.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Example of Systematic Withdrawal Plan
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              As mentioned before, the SWP allows investors to generate both
              monthly revenue as well as an accumulated sum at the end of the
              maturity period. Refer to this investment and withdrawal schedule
              for an in-depth idea.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              Here, an individual has invested Rs. 50,000 for tenure of 1 year
              along with a systematic withdrawal of Rs. 1,000 per month.
              Interest rate stands at 10%.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              As such, total return of investments after the end of the tenor
              stands at Rs. 4,565.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-1 md:px-4 py-2 border border-gray-300 text-center md:w-32">
                      Month
                    </th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 text-center md:w-60">
                      Balance at Begin
                    </th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 text-center md:w-60">
                      Withdrawal
                    </th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 text-center md:w-60">
                      Interest Earned
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      1
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      2
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      3
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      4
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      5
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      6
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      7
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      8
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      9
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      10
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      11
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      12
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center ">
                      Rs. 10000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How to use SWP calculator?
            </h2>
            <p className=" text-sm md:text-base text-justify mb-4">
              The calculator is user-friendly and easy to use first time out.
              However, you need to ensure that all values are properly put in.
            </p>
            <ul className="w-full list-disc text-sm md:text-base text-justify list-inside">
              <li>
                You will find three columns namely tenure, expected return and
                amount invested. Fill in the values as per your investment plan.
              </li>
              <li>
                Enter values and calculate to find a similar SWP returns chart
                as mentioned above.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How can a SWP calculator benefit you?
            </h2>
            <p className=" text-sm md:text-base text-justify mb-4">
              Retirees and senior citizens are among the most common investors
              in this scheme. Such individuals obviously require a fixed monthly
              financial input. An SWP can provide the same over and above the
              pension or even as an alternativ. They can easily use Groww’s
              simple and intuitive systematic withdrawal plan calculator for
              numerous benefits.
            </p>
            <ul className="w-full list-disc text-sm md:text-base text-justify list-inside">
              <li>
                A Systematic Withdrawal Plan ensures monthly returns while
                generating RoI on the total investment. This calculator can help
                easily compute both accurately.
              </li>
              <li>
                It’s easy to set the amount which you wish to withdraw every
                month and calculate amount on maturity accordingly.
              </li>
              <li>It is easily accessible online.</li>
              <li>
                This SWP return calculator does not require any expertise to
                operate. Users need to just put variables in proper space and
                output is ready in no time.
              </li>
            </ul>

            <p className=" text-sm md:text-base text-justify my-4">
              “Looking to invest? Open an account with Groww and start investing
              in direct Mutual Funds for free”
            </p>
          </div>
        </div>

        <div className="w-full md:w-[25%]">
         <SideComponent/>
        </div>
      </div>
    </div>
  );
}

export default SWPCalculator;
