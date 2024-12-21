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

function Mutual() {
  const [totalInvestment, setTotalInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(10);

  // SIP Calculation Formula
  const FundCalculator = () => {
    const i = returnRate / 100;
    const n = timePeriod;
    const futureValue = totalInvestment * (1 + i) ** n;
    return Math.round(futureValue);
  };

  const totalInvested = Math.round(totalInvestment);
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
    <div className="mx-4 md:mx-10 my-10 md:my-20 text-[#14598D]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[620px] flex flex-col md:flex-row bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full md:w-[70%]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Mutual Funds Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">MF</span>
                </button>
              </div>

              {/* Total Investment Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Total investment
                  </label>
                  <input
                    type="text"
                    value={totalInvestment}
                    min="500"
                    max="10000000"
                    step="500"
                    onChange={(e) => setTotalInvestment(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000000"
                  step="500"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-4"
                />
              </div>

              {/* Expected Return Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Expected return rate (p.a)
                  </label>
                  <input
                    type="text"
                    value={returnRate}
                    min="1"
                    max="50"
                    step="1"
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
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-4"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Time period
                  </label>
                  <input
                    type="text"
                    value={timePeriod}
                    min="1"
                    max="40"
                    step="1"
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-4"
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
                <button className="bg-main hover:bg-green-700 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
                  INVEST NOW
                </button>
              </Link>
            </div>

            {/* Right Sidebar - Pie Chart */}
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
              Mutual funds are one of the most popular avenues of investment in
              the Indian context. As of June 2019, the average assets under
              management (AuM) of the entire MF industry stands at a staggering
              Rs. 24.25 trillion, an over four-fold increase from Rs. 5.83
              trillion in 2009.
              <br />
              <br />
              Though mutual fund investments are subject to market risks, the
              returns can be estimated reasonably accurately. You can use the
              free mutual fund return calculator from Groww to arrive at the
              amount of the expected returns.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How Can a Mutual Fund Return Calculator Online Help You?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              There are various types of mutual fund returns that an investor
              should be familiar with. They are absolute return, annualised
              return, total return, trailing return, point to point return, and
              rolling return.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              It can be somewhat confusing for a prospective investor to keep so
              many factors in mind, which is where the mutual fund return
              calculator online can be immensely helpful.
            </p>

            <ul className="w-full text-sm md:text-base text-justify list-disc list-inside">
              <li>
                It will provide you with the full estimate for 1 year, 3 year
                and 5 year investment periods.
              </li>
              <li>
                It enables you to do future financial planning based on the
                estimated returns.
              </li>
              <li>
                You don’t need to be a subject expert to be able to use this
                calculator. It’s simple to use, and even someone who hasn’t used
                it before will not find it challenging to navigate.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How does a Mutual Fund Total Return Calculator Work?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              A mutual fund calculator is a practical financial tool that
              enables an investor to calculate the returns yielded by investing
              in mutual funds. In broad terms, there are two ways in which one
              can invest in mutual funds – one time & monthly.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              SIP or Systematic Investment Plan is an avenue of investing in
              mutual funds. In a SIP, an individual invests a small amount every
              month on designated schemes. One thing to remember is that the NAV
              of such funds changes every month and the same amount of money can
              purchase a variable number of units in different months.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              Imagine that you invest via SIP of Rs. 1000 for 12 months. At the
              time of availing the SIP, the NAV of your chosen stock is Rs. 10.
              So, you can purchase 100 units of the stock in the first month. In
              the second month, the NAV increases to Rs. 20. Your 1000 rupees
              can now buy just 50 units of the same stock.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              An online SIP calculator predicts the returns on your SIP based on
              specific parameters. You simply need to input the SIP amount, the
              duration of investment and the expected rate of return, and the
              calculator will wield the results in seconds.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              An investment is when an individual invests a substantial amount
              at one go in a particular scheme. One of the primary advantages of
              opting for one-time investment is that the change in NAV value
              does not affect the number of units you can purchase.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              You need to input three essential data points; namely, your
              investment amount, estimated ROI and the duration of your
              investment.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              Estimated Returns on Key Schemes
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              There are mainly three types of stocks that you can invest in –
              equity, debt, and hybrid. Here are some of the most high-yielding
              stocks in India in each category and their estimated returns.
            </p>
            <h4 className="text-lg font-semibold mt-8 mb-4">
              Equity Funds
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-82">
                      Name of the stock
                    </th>
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-40">
                      Risk
                    </th>
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-40">
                      1-Year Return
                    </th>
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-40">
                      3-Year Return
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">
                      Aditya Birla Sunlife Frontline Equity Fund
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      Moderate
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      HDFC Mid-cap Opportunities Fund
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      High
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">
                      ICICI Pru Focused Bluechip Equity Fund
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      Moderate
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-lg font-semibold mt-8 mb-4">
              Dept Funds
            </h4>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-82">
                      Name of the stock
                    </th>
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-40">
                      Risk
                    </th>
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-40">
                      1-Year Return
                    </th>
                    <th className="px-1  md:px-4 py-2 border border-gray-300 md:w-40">
                      3-Year Return
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">
                      Aditya Birla Sun Life Active Debt Multi-manager FoF Scheme
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      Low
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      Axis Short Term –Direct Plan
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      Moderate
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">
                      Canara Robeco Income- Reg
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      High
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-lg font-semibold mt-8 mb-4">
              Hybird Funds
            </h4>
            <div className="overflow-x-auto ">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-82">
                      Name of the stock
                    </th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-40">
                      Risk
                    </th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-40">
                      1-Year Return
                    </th>
                    <th className="px-1 md:px-4 py-2 border border-gray-300 md:w-40">
                      3-Year Return
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">
                      Indiabulls Savings Income Direct-G
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      Low
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      Mirae Asset Hybrid Equity Direct- G
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      High
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 md:px-4 py-2 border border-gray-300">
                      ICICI Pru Equity & Debt Direct-G
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      High
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                    <td className="px-1 md:px-4 py-2 border border-gray-300 ">
                      10 %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-justify my-4">
              When you use a mutual fund returns calculator India, you will have
              to insert the variables as mentioned in these tables along with
              the duration of your investment.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How to use Groww’s calculator?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Online financial solution providers, Groww, offers mutual funds
              returns calculator in India, which is exceptionally easy to use.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              Enter the amount you have invested, the expected rate of return
              and the number of years for which you have made the investment.
              The appreciated amount of your investment at the end of the
              specified tenure will be reflected within seconds.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              Advantages of using Groww online mutual funds calculator
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              There are several advantages of using these calculators which make
              the life of investors easier.
            </p>
            <ul className="w-full text-sm md:text-base text-justify list-disc list-inside">
              <li>
                It provides you with a fairly accurate estimate of the returns
                on your mutual fund investments.
              </li>
              <li>
                It saves you valuable time by eliminating the need to do the
                calculations manually.
              </li>
              <li>
                Since it’s an online tool, you can access it anywhere, making it
                incredibly convenient to perform financial planning on the go.
              </li>
            </ul>
            <p className="text-sm md:text-base text-justify mb-4">
              Mutual funds, as an investment instrument, are growing at a steady
              pace in India. Although there is some inherent risk in these
              investments, the returns are proportionately higher.
            </p>
            <p className="text-sm md:text-base text-justify my-4">
              “Looking to invest? Open an account with Groww and start investing
              in direct Mutual Funds for free”
            </p>
          </div>
        </div>

        <div className="w-full md:w-[25%]">
          <SideComponent />
        </div>
      </div>
    </div>
  );
}

export default Mutual;
