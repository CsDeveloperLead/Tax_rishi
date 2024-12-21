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

function Simple() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(10);

  // Simple Interest Calculation Formula
  const calculateSimpleInterest = () => {
    const totalInvested = monthlyInvestment;
    const interest = (totalInvested * returnRate * timePeriod) / 100;
    return Math.round(totalInvested + interest);
  };

  const totalInvested = Math.round(monthlyInvestment);
  const estimatedReturns = Math.round(
    (totalInvested * returnRate * timePeriod) / 100
  );
  const totalValue = calculateSimpleInterest();

  const data = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        data: [totalInvested, estimatedReturns],
        backgroundColor: ["#e0e7ff", "#398730"],
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
                <h2 className="text-xl font-bold">
                  Simple Interest Calculator
                </h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">SIC</span>
                </button>
              </div>

              {/* Principal Amount Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium">
                    Principal Amount
                  </label>
                  <input
                    type="text"
                    value={monthlyInvestment}
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Expected Return Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium">
                    Rate of Interest (p.a)
                  </label>
                  <input
                    type="text"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium">
                    Time Period
                  </label>
                  <input
                    type="text"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
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
              <div className="text-gray-700 font-medium mt-6">
                <p className="py-2">
                  Principal amount :{" "}
                  <span className="font-semibold">
                    ₹{formatToIndianCurrency(totalInvested)}
                  </span>
                </p>
                <p className="py-2">
                  Total Interest :{" "}
                  <span className="font-semibold">
                    ₹{formatToIndianCurrency(estimatedReturns)}
                  </span>
                </p>
                <p className="py-2">
                  Total Amount :{" "}
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
            <p className="text-gray-700 mb-4">
              Investments earned on a scheme are calculated as gains accumulated
              against the interest accumulated. Such gains are compiled in
              either compound or simple interest. Interest is calculated on the
              principal amount.
              <br />
              <br />
              Calculating the amount that you will gain after a certain period
              based on the interest is vital. If your investment accumulates
              funds based on the simple interest you can use a simple interest
              calculator. These calculators help you easily compute the total
              amount of funds you will be able to generate on maturity.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Simple Interest Formula
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              To calculate Total Maturity Amount Value:
            </h3>
            <p className="text-gray-700 mb-4">
              The simple interest formula for the calculator which is utilized
              to compute the overall gains accumulated is represented as:
            </p>
            <p className="text-gray-700 mb-4">{"A = P(1 + rt)"}</p>
            <p className="text-gray-700 mb-4">here:</p>
            <p className="text-gray-700 mb-1">
              A represents the Total accumulated Amount (principal + interest)
            </p>
            <p className="text-gray-700 mb-1">
              P represents the Principal Amount
            </p>
            <p className="text-gray-700 mb-1">
              r represents the Rate of Interest per year in decimal; r = R/100
            </p>
            <p className="text-gray-700 mb-1">
              t represents the Time Period (months or years)
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              To calculate the Interest on the Investments and loans
            </h3>
            <p className="text-gray-700 mb-4">SI= P X RX T/100</p>
            <p className="text-gray-700 mb-4">
              In it, the variables represent the following –
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 w-20">
                      SI
                    </td>
                    <td className="px-4 py-2 border border-gray-300 w-80">
                      Simple Interest
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">R</td>
                    <td className="px-4 py-2 border border-gray-300 ">
                      Rate of interest
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">T</td>
                    <td className="px-4 py-2 border border-gray-300 ">Time</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">P</td>
                    <td className="px-4 py-2 border border-gray-300 ">
                      Principle
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              Groww SI calculator uses this formula to help easily determine
              interest rates and gauge the increase in the value of the initial
              investment. Let’s understand it with the help of an instance.
            </p>
            <p className="text-gray-700 mb-4">
              Mr. A has invested an amount of Rs. 15000 at an interest rate of
              5% for almost 2 years. So his SI will be calculated as Rs. (15000
              X 5 X 2/100) which is equal to Rs.16500.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What is the Simple Interest Formula and when is it Used?
            </h2>
            <p className="text-gray-700 mb-4">
              The amount one needs to pay or receive after a certain tenure base
              based on the interest can be calculated using the Simple Interest
              Formula. It is the best and simple method of calculating interest
              on the principal amount and should be used:
            </p>
            <ul className="w-full list-disc list-inside">
              <li className="text-gray-900 mb-2">
                <span className="text-black font-semibold">
                  When one has borrowed money :
                </span>{" "}
                To repay extra payment of interest along with the borrowed
                amount. The formula for simple interest can help to calculate
                the borrowing cost as interest
              </li>
              <li className="text-gray-900 mb-2">
                <span className="text-black font-semibold">
                  When someone lends money :
                </span>{" "}
                If someone has given money to someone to earn interest income in
                exchange. By using simple interest formula, one can easily get
                extra income figure as the interest
              </li>
              <li className="text-gray-900 mb-2">
                <span className="text-black font-semibold">
                  When someone has invested money :
                </span>{" "}
                if someone has invested their surplus money in deposits such as
                FD, RD or savings schemes like SSY, PPF or others can also
                calculate the interest Income with a simple Interest Calculator.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Calculate Simple Interest using Calculator?
            </h2>
            <ul className="w-full list-disc list-inside">
              <li>
                This simple interest calculator offers you output by calculating
                both principals as well as interest.
              </li>
              <li>
                Although it is easy to calculate simple interest for shorter
                tenors but for long consecutive years, a manual mechanism
                increases the chances of mistakes. So, use an online simple
                interest calculator for accurate calculation.
              </li>
              <li>
                Quick and easy way to gain insight into interest as well as the
                increase in the invested capital.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of using Simple Interest Calculators
            </h2>
            <p className="text-gray-700 mb-4">
              There are times when borrowers, depending on the manual method,
              people pay unpaid interest before principal. This situation leads
              to issues during computing simple interest on an amount. Following
              are some of the advantages of switching to an online calculator
              from the manual method.
            </p>
            <ul className="w-full list-disc list-inside">
              <li>
                SI is computed irrespective of any unit. Be it dollar, euro or
                any other currency, it calculates effectively.
              </li>
              <li>
                Users who intend to save time on calculating interest rates with
                changing years can save their time with its judicious use.
              </li>
              <li>
                Numerous variables are available to help you gauge your total
                investment. So, knowing about the total return and maturity time
                helps you to take viable decisions.
              </li>
              <li>
                A simple interest loan calculator helps in determining the
                current value of money.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[25%]">
          <SideComponent />
        </div>
      </div>
    </div>
  );
}

export default Simple;
