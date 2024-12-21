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

function Fd() {
  const [totalInvestment, setTotalInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(5);
  const [timeUnit, setTimeUnit] = useState("Years");

  // FD Calculation Formula with compounding frequency based on time unit
  const FundCalculator = () => {
    const i = returnRate / 100; // Interest rate in decimal
    const principal = totalInvestment;

    // Determine the number of compounding periods per year based on the time unit
    let n;
    switch (timeUnit) {
      case "Days":
        n = timePeriod / 365; // Convert days to years
        break;
      case "Months":
        n = timePeriod / 12; // Convert months to years
        break;
      default:
        n = timePeriod; // Time period in years
    }

    // Calculate future value using compounding formula
    const futureValue = principal * (1 + i) ** n;
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
        backgroundColor: ["#e0e7ff", "#398730"],
      },
    ],
  };

  // Function to display correct label based on unit
  const getTimePeriodLabel = () => {
    return `${timePeriod} ${timeUnit.slice(0, -1)}${timePeriod > 1 ? "s" : ""}`;
  };

  // Update max value of slider based on selected unit
  const getMaxValueForUnit = () => {
    switch (timeUnit) {
      case "Days":
        return 31;
      case "Months":
        return 11;
      default:
        return 25;
    }
  };

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20 text-[#14598D]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[620px] flex flex-col md:flex-row bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full md:w-[65%]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">FD Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">FD</span>
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
                    min="5000"
                    max="10000000"
                    step="5000"
                    onChange={(e) => setTotalInvestment(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-2 md:px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="5000"
                  max="10000000"
                  step="5000"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
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
                    max="15"
                    step="1"
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-2 md:px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Time period
                  </label>
                  <div className="flex items-center">
                    <select
                      value={timeUnit}
                      onChange={(e) => {
                        setTimeUnit(e.target.value);
                        setTimePeriod(1); // Reset time period to minimum when unit changes
                      }}
                      className="bg-transparent font-bold text-main mr-2 focus:outline-none"
                    >
                      <option value="Years">Years</option>
                      <option value="Months">Months</option>
                      <option value="Days">Days</option>
                    </select>
                    <input
                      type="text"
                      value={timePeriod}
                      min="1"
                      max={getMaxValueForUnit()}
                      step="1"
                      onChange={(e) => setTimePeriod(Number(e.target.value))}
                      className="text-main text-sm bg-[#CDD4F1] w-[120px] px-2 md:px-4 py-1 font-bold text-right"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max={getMaxValueForUnit()}
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
            <p className="text-sm md:text-base text-justify mb-4">
              A fixed deposit is a type of term investment offered by several
              banks and NBFCs. These deposits typically offer a higher rate of
              interest, subject to certain terms and conditions. The amount you
              deposit in these deposits is locked for a predetermined period
              which can vary between 7 days and 10 years.
              <br />
              <br />
              An FD calculator can be used to determine the interest and the
              amount that it will accrue at the time of maturity. It is a
              simple-to-use tool available on the Groww website.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How can an FD calculator help you?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Calculating the maturity amount of an FD can be a complicated and
              time-consuming process. An online FD calculator enables one to
              figure it without breaking a sweat
            </p>
            <ul className="w-full text-sm md:text-base text-justify list-disc list-inside">
              <li>
                FD maturity calculations are complex involving multiple
                variables. A Fixed deposit calculator does all the hard work and
                gives you accurate figures just at the click of a button
              </li>
              <li>
                It helps you save a lot of time on these complex calculations.
              </li>
              <li>
                A fixed deposit return calculator enables you to compare the
                maturity amount and interest rates of FDs offered by different
                financial institutions. You can make an informed decision when
                you have all the figures at your disposal.
              </li>
            </ul>

            {/* <ul className="w-full text-sm md:text-base text-justify list-disc list-inside">
              <li>It will provide you with the full estimate for 1 year, 3 year and 5 year investment periods.</li>
              <li>It enables you to do future financial planning based on the estimated returns.</li>
              <li>You don’t need to be a subject expert to be able to use this calculator. It’s simple to use, and even someone who hasn’t used it before will not find it challenging to navigate.</li>
            </ul> */}

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              The formula to determine FD maturity amount
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              There are two types of FD that you may avail of – simple interest
              FD and compound interest FD. Groww has calculators for both types
              of FD
            </p>
            <p className="text-sm md:text-base text-justimb-4">
              The fixed deposit calculator for simple interest FD uses the
              following formula –
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              {"M = P + (P x r x t/100)"}, where –
            </p>
            <ul className="w-full text-sm md:text-base text-justify list-disc list-inside">
              <li>P is the principal amount that you deposit.</li>
              <li>r is the rate of interest per annum</li>
              <li>t is the tenure in years</li>
            </ul>
            <p className="text-sm md:text-base text-justify mb-4">
              For example, if you deposit a sum of Rs. 1,00,000 for 5 years at
              10% interest, the equation reads –
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              M= Rs. 1,00,000 + (1,00,000 x 10 x 5/100)
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              = Rs. 1,50,000
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              For compound interest FD, the FD return calculator uses the
              following formula –
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              {"M= P + P {(1 + i / 100) t – 1}"}, where –
            </p>
            <ul className="w-full text-sm md:text-base text-justify list-disc list-inside">
              <li>P is the principal amount</li>
              <li>i is the rate of interest per period</li>
              <li>t is the tenure</li>
            </ul>
            <p className="text-sm md:text-base text-justify mb-4">
              For example, if you take the same variables, the compound interest
              FD will accrue,
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              M= Rs. 1,00,000 {" {(1 + 10/100) 5-1} "}
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              Or, Rs. 1,61,051
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How to use Groww’s FD calculator?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Know the exact amount you will receive at the time of FD maturity
              using the FD amount calculator.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              There are several other advantages of using these calculators –
            </p>
            <ul className="w-full text-sm md:text-base text-justify list-disc list-inside">
              <li>
                Get the exact amount you are eligible for at the end of your
                maturity period and plan your future accordingly.
              </li>
              <li>
                Both of these calculators are free for unlimited use by
                registered users.
              </li>
              <li>
                Compare the maturity amount of different financial institutions
                easily.
              </li>
            </ul>
            <p className="text-sm md:text-base text-justify mb-4">
              Besides the Fixed deposit calculator, you can easily plan your
              finances using the following calculators. All of our offerings are
              free to use and you can use them as frequently as you want.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse text-main">
                <thead>
                  <tr className="">
                    <th
                      className="px-2 md:px-4 py-2 border border-gray-300 md:w-10"
                      colSpan={2}
                    >
                      Fixed Deposit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Types of Fixed Deposit
                    </td>
                    <td className="px-2 md:px-4 py-2 border border-gray-300 ">
                      Overdraft Against FD
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300 ">
                      Monthly Interest on 1 Lakh Fixed Deposit
                    </td>
                    <td className="px-2 md:px-4 py-2 border border-gray-300 ">
                      Non Callable Fixed Deposits
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Fixed Deposit(FD) Sweep-in
                    </td>
                    <td className="px-2 md:px-4 py-2 border border-gray-300 ">
                      Auto Renewal of Fixed Deposit
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Flexi Fixed Deposit
                    </td>
                    <td className="px-2 md:px-4 py-2 border border-gray-300 ">
                      Senior Citizen FD Interest Rates
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Fixed Deposit Double Scheme
                    </td>
                    <td className="px-2 md:px-4 py-2 border border-gray-300 ">
                      Monthly Interest Payout Fixed Deposit(FD)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[25%]">
          <SideComponent />
        </div>
      </div>
    </div>
  );
}

export default Fd;
