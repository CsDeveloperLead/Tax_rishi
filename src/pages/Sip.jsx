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

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(10);

  // SIP Calculation Formula
  const calculateSIP = () => {
    const n = timePeriod * 12;
    const i = returnRate / 100 / 12;

    const futureValue = (monthlyInvestment * (1 + i) * ((1 + i) ** n - 1)) / i;
    return Math.round(futureValue);
  };

  const totalInvested = Math.round(monthlyInvestment * 12 * timePeriod);
  const estimatedReturns = Math.round(calculateSIP() - totalInvested);
  const totalValue = Math.round(calculateSIP());

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
    <div className="mx-4 md:mx-10  my-10 md:my-20">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-[75%] flex flex-col gap-10 ">
          <div className="border h-auto md:h-[600px] flex flex-col md:flex-row bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full md:w-[70%] ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">SIP Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">SIP</span>
                </button>
              </div>

              {/* Monthly Investment Slider */}
              <div className="my-8">
                <div className="flex  justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Monthly investment
                  </label>
                  <input
                    type="text"
                    value={monthlyInvestment}
                    min="500"
                    max="100000"
                    step="500"
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right "
                  />
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Expected Return Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Expected return rate (p.a)
                  </label>
                  <input
                    type="text"
                    value={returnRate}
                    min="1"
                    max="30"
                    step="0.1"
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  onBlur={() => {
                    // Clamp the value to be within min and max on blur
                    if (returnRate < 1) setReturnRate(1);
                    if (returnRate > 30) setReturnRate(30);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Time period
                  </label>
                  <input
                    type="text"
                    value={timePeriod}
                    min="1"
                    max="40"
                    step="1"
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    onBlur={() => {
                      // Clamp the value to be within min and max on blur
                      if (timePeriod < 1) setTimePeriod(1);
                      if (timePeriod > 40) setTimePeriod(40);
                    }}
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
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              Prospective investors can think that SIPs and mutual funds are the
              same. However, SIPs are merely a method of investing in mutual
              funds, the other method being a lump sum. A SIP calculator is a
              tool that helps you determine the returns you can avail when
              parking your funds in such investment tools. Systematic Investment
              Plan or SIP is a process of investing a fixed sum of money in
              mutual funds at regular intervals. SIPs usually allow you to
              invest weekly, quarterly, or monthly.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What is a SIP Calculator?
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              A SIP calculator is a simple tool that allows individuals to get
              an idea of the returns on their mutual fund investments made
              through SIP. SIP investments in mutual funds have become one of
              the most popular investment options for millennials lately.
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              These mutual fund SIP calculators are designed to give potential
              investors an estimate on their mutual fund investments. However,
              the actual returns offered by a mutual fund scheme vary depending
              on various factors. The SIP calculator does not provide
              clarification for the exit load and expense ratio (if any).
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How can a SIP return calculator help you?
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              SIPs are a more lucrative mode of investing funds compared to a
              lump sum amount according to several mutual fund experts. It helps
              you become financially disciplined and create a habit of savings
              that can benefit you in the future.
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              A SIP calculator online is a beneficial tool, which shows the
              estimated returns you will earn after the investment tenure.
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-justify text-gray-700 mb-4">
              <li>
                Assists you to determine the amount you want to invest in.
              </li>
              <li>Tells you the total amount you have invested.</li>
              <li>Gives an estimated value of the returns.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How do SIP calculators work?
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              A SIP plan calculator works on the following formula:
            </p>
            <p className="text-gray-800 bg-gray-200 p-4 rounded-md font-mono mb-4">
              M = P × ((1 + i)^n – 1) / i × (1 + i)
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              Where:
              <br />
              M is the amount you receive upon maturity.
              <br />
              P is the amount you invest at regular intervals.
              <br />
              n is the number of payments you have made.
              <br />i is the periodic rate of interest.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Example Calculation:
            </h2>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              For example, if you want to invest ₹1,000 per month for 12 months
              at an interest rate of 12%, the maturity amount can be calculated
              as follows:
            </p>
            <p className="text-gray-800 bg-gray-200 p-4 rounded-md font-mono mb-4">
              M = 1,000 × ((1 + 0.01)^12 – 1) / 0.01 × (1 + 0.01) ≈ ₹12,809
            </p>
            <p className="text-sm md:text-base text-justify text-gray-700 mb-4">
              The rate of interest on a SIP will vary according to market
              conditions, so the actual returns may differ.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of using Our SIP Calculator
            </h2>
            <ul className="list-disc list-inside text-sm md:text-base text-justify text-gray-700 mb-4">
              <li>Plan your investment based on the amount and tenure.</li>
              <li>
                Compute an estimation of the total value of investments at the
                end of your SIP tenure.
              </li>
              <li>Save time with accurate results over manual calculations.</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[25%]">
          <SideComponent/>
        </div>
      </div>
    </div>
  );
}

export default SIPCalculator;
