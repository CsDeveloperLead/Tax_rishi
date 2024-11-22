import { useState } from "react";
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

function Ppf() {
  const [totalInvestment, setTotalInvestment] = useState(10000);
  const [returnRate] = useState(7.1);
  const [timePeriod, setTimePeriod] = useState(15);

  // SIP Calculation Formula
  const FundCalculator = () => {
    const i = returnRate / 100; // Annual interest rate
    const n = timePeriod; // Total years

    // Future value calculation
    const futureValue = totalInvestment * ((1 + i) ** n - 1) / i;
    return Math.round(futureValue);
  };

  const totalInvested = Math.round(totalInvestment * timePeriod);
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

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[620px] flex flex-col md:flex-row bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full md:w-[65%]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">PPF Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">PPF</span>
                </button>
              </div>

              {/* Total Investment Slider */}
              <div className="my-8">
                <div className="flex justify-between">
                  <label className="text-gray-700 font-medium">
                    Yearly investment
                  </label>
                  <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-1 md:px-4 py-1 font-bold text-right">
                    ₹ {formatToIndianCurrency(totalInvestment)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="150000"
                  step="500"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label className="text-gray-700 font-medium">Time period</label>
                  <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-1 md:px-4 py-1 font-bold text-right">
                    {timePeriod} Yr
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Expected Return Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label className="text-gray-700 font-medium">
                    Expected return rate (p.a)
                  </label>
                  <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-1 md:px-4 py-1 font-bold text-right">
                    {returnRate} %
                  </span>
                </div>
                {/* <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            /> */}
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
              <Link to="/contact">
              <button className="bg-main hover:bg-blue-800 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
                INVEST NOW
              </button>
              </Link>
            </div>

            {/* Right Sidebar - Pie Chart */}
            <div className="w-full lg:w-[30%] flex justify-center">
              <Pie
                data={data}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="w-full mr-10">
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              The first step towards wealth management is accumulating savings. You will find a lot of options for savings accounts; however, look for the ones that guarantee substantial returns risk-free. PPF accounts are one of the most common features which come into the picture. PPF account refers to Public Provident fund account and is meant to invest your valuable capital.
              <br />
              <br />
              If you are a new employee or a responsible parent who wishes to save for the future, then PPF is ideal for you. Calculating the interest rates and returns on your PPF account turns a bit difficult. To make these difficult calculations easy, PPF account calculator can be used.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How can a PPF calculator help you?
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              This financial tool allows one to resolve their queries related to Public Provident Fund account. There are certain specifications that are to be abided by while calculating maturity amount after a certain point of time. It keeps a track on the growth of your capital. Those who already have a PPF savings account know that interest rates change on monthly basis.
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              Nowadays, it is easier to keep a check on changing rates. However, with the discovery of public provident fund calculator, account holders find it easier to find out monthly changes made in interest. In the market, you may find lot of user-friendly PPF calculators and for choosing trustworthy ones, Groww is simply the option.
            </p>

            {/* <ul className="w-full text-sm md:text-abse text-justify list-disc list-inside">
              <li>It will provide you with the full estimate for 1 year, 3 year and 5 year investment periods.</li>
              <li>It enables you to do future financial planning based on the estimated returns.</li>
              <li>You don’t need to be a subject expert to be able to use this calculator. It’s simple to use, and even someone who hasn’t used it before will not find it challenging to navigate.</li>
            </ul> */}

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Formula used for calculating PPF
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              Groww uses a formula to compute the deposited amount, interest, etc. This formula has been given below –
            </p>
            <p className="text-black mb-4">
              {`F = P [ ( {(1 + i) ^ n}-1)/i]`}
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              This formula represents the following variables –
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-10">I</th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-80">Rate of interest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">F</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Maturity of PPF</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">N</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Total number of years</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">P</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Annual instalments</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              In order to clear your concept about PPF calculation, an example has been given. This calculation becomes easier once you buy PPF calculator.
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              Suppose, an individual pays an annual amount of Rs. 1,50,000 in their PPF investment for a period of 15 years at an interest rate of 7.1%, then his/her maturity sum at the closing year will be equal to Rs. 40,68,209.
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              A quick check on opening balance, closing balance, withdraw amount and also rate of interest will definitely help you out. Have a look at the given below table.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-20">Year</th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-60">Opening amount</th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-40">Deposit</th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-60">Rate of interest</th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-60">Closing amount</th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-40">Loan</th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-60">Amount withdrawn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">1</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">2</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">3</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">4</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">5</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">6</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">7</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">8</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">9</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">10</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">11</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">12</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">Rs. 189292</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to use PPF calculator?
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              To enjoy this computing tool to the maximum, you need to understand how it works. Its user-friendly and accurate information makes it a device worthy of purchase. The only job of the user is to put values within specific columns and you are good to go. Details that are to be provided to this PPF amount calculator include tenure, total amount invested, interest earned and also amount invested monthly or yearly.
            </p>
            <ul className="w-full text-sm md:text-abse text-justify list-disc list-inside">
              <li>Enter the values in the requisite fields and the total maturity amount will be reflected within seconds.</li>
              <li>If an individual deposits amount on 1st of April then interest will be calculated based on financial year. Inflation might affect this interest rate.</li>
            </ul>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of using PPF calculator
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              The list below demonstrates benefits of using online PPF calculator. Have a look at it.
            </p>
            <ul className="w-full text-sm md:text-abse text-justify list-disc list-inside">
              <li>This computing device allows users to make a clear idea about how much interest can be earned with the investment of a certain amount of money.</li>
              <li>With the assistance of this calculator, you can be saved from paying hefty tax.</li>
              <li>We often find it difficult to decide on maturity period of their investment and this problem is easily solved with the use of PPF calculator India .</li>
              <li>It also offers estimation on total investment in a financial year.</li>
              <li>To ensure that the user is able to get accurate result, it is essential to provide the computing device with deposited amount along with type of deposit i.e. fixed or variable.</li>
            </ul>
            <p className="text-sm md:text-base text-justify text-gray-700 my-4">“Looking to invest? Open an account with Groww and start investing in direct Mutual Funds for free”</p>

          </div>
        </div>
        <div className="w-full md:w-[25%]">
         <SideComponent/>
        </div>
      </div>

    </div>
  );
}

export default Ppf;
