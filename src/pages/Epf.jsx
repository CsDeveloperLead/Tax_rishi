import { useState, useMemo } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SideComponent from "../components/SideComponent";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Epf() {
  const [monthlySalary, setMonthlySalary] = useState(10000);
  const [returnRate] = useState(8.1); // Annual return rate in percentage
  const [age, setAge] = useState(25);
  const [contribution, setContribution] = useState(15); // Employee's contribution to EPF in percentage
  const [annualIncrease, setAnnualIncrease] = useState(8); // Expected annual salary increase percentage

  const retirementAge = 58;

  const totalValue = useMemo(() => {
    const yearsToInvest = retirementAge - age;
    let totalEPFBalance = 0;
    let currentMonthlySalary = monthlySalary;

    // Monthly interest rate
    const monthlyInterestRate = returnRate / 100 / 12;

    for (let year = 0; year < yearsToInvest; year++) {
      for (let month = 0; month < 12; month++) {
        // Employee's monthly contribution
        const employeeContribution =
          (currentMonthlySalary * contribution) / 100;
        // Employer's monthly contribution (fixed 3.67% of basic salary)
        const employerContribution = (currentMonthlySalary * 3.67) / 100;
        // Total contribution for the month
        const monthlyContribution = employeeContribution + employerContribution;

        // Add monthly contribution to the EPF balance
        totalEPFBalance += monthlyContribution;
        // Apply monthly compounding interest to the EPF balance
        totalEPFBalance *= 1 + monthlyInterestRate;
      }

      // Increase salary annually based on the annualIncrease percentage
      currentMonthlySalary *= 1 + annualIncrease / 100;
    }

    return formatToIndianCurrency(Math.round(totalEPFBalance));
  }, [monthlySalary, returnRate, age, contribution, annualIncrease]);

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20 text-[#14598D]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[660px] flex bg-white p-6 gap-10 rounded-lg shadow-lg">
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">EPF Calculator</h2>
                <button className="bg-gray-200 rounded-full p-2 focus:outline-none">
                  <span className="text-main font-bold">EPF</span>
                </button>
              </div>

              {/* Monthly Salary Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Monthly Salary (Basic + DA)
                  </label>
                  <input
                    type="text"
                    value={monthlySalary}
                    min="1000"
                    max="500000"
                    step="1000"
                    onChange={(e) => setMonthlySalary(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="1000"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-4"
                />
              </div>

              {/* Age Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Your age</label>
                  <input
                    type="text"
                    value={age}
                    min="15"
                    max="58"
                    step="1"
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="15"
                  max="58"
                  step="1"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-4"
                />
              </div>

              {/* Contribution to EPF Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Your contribution to EPF
                  </label>
                  <input
                    type="text"
                    value={contribution}
                    min="12"
                    max="20"
                    step="1"
                    onChange={(e) => setContribution(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="12"
                  max="20"
                  step="1"
                  value={contribution}
                  onChange={(e) => setContribution(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-4"
                />
              </div>

              {/* Annual Increase in Salary Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Annual increase in salary
                  </label>
                  <input
                    type="text"
                    value={annualIncrease}
                    min="0"
                    max="15"
                    step="1"
                    onChange={(e) => setAnnualIncrease(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="1"
                  value={annualIncrease}
                  onChange={(e) => setAnnualIncrease(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mt-4"
                />
              </div>

              {/* Expected Return Rate Display (No slider here) */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label className="font-medium">
                    Expected return rate (p.a)
                  </label>
                  <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-1 md:px-4 py-1 font-bold text-right">
                    {returnRate} %
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="flex flex-col gap-2 p-4 rounded-3xl bg-[#cdd4f1] items-center justify-center">
                <span>You will have accumulated</span>
                <h1 className="text-3xl text-main font-bold">₹ {totalValue}</h1>
                <span>by the time you retire</span>
              </div>
            </div>
          </div>
          <div className="w-full mr-10">
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
            <p className="text-sm md:text-base text-justify mb-4">
              Most private sector employees are entitled to receive
              post-retirement benefits if they function in the organised sector.
              Note that government employees are additionally eligible for
              pensions unlike their private sector counterparts. Employee
              Provident Fund was set up after the EPF Act was passed in the
              Parliament. Under the law, the Employees Provident Fund
              Organisation of India (or EFPO) controls the funds deposited by
              both the employee and employer in a permanent account, affixed by
              an UAN or Unique Account Number. An EPF calculator can help you
              estimate your savings appropriately.
              <br />
              <br />
              The PF calculator uses proprietary technology to fetch the correct
              sum every time you input data. Provident Fund acts as a guarantee
              for future prosperity or loss of employment, and is of great use
              for future financial decision-making.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How can an EPF calculator help you?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Once you start using our PF calculator in India, you can easily
              track where your hard-earned money is being stored, and how much
              interest it has accumulated.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              Here are some interesting advantages of using an EPF calculator
              online.
            </p>

            <ul className="w-full list-disc list-inside">
              <li>
                You do not have to manually calculate your total contributions
                each time.
              </li>
              <li>
                We assure that our PF calculator online works correctly on every
                occasion.
              </li>
              <li>
                You do not have to worry if the interest rates or contribution
                ratios vary over a period. The EPF calculator will automatically
                take into account the alteration.
              </li>
              <li>
                Finally, whenever you use our EPFO calculator , you are
                automatically informed of any recent transactions, contributions
                and changes, if any. For example, the current rate of interest
                on EPF is 8.15%. If it changes during the financial year due to
                any new legislation, you will be notified once you log in.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              The formula to determine EPF amount
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              When you use Groww’s EPF calculator in India, you are assured of
              quality and reliability. This is the data you should keep in handy
              before you use the calculator.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <tbody>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Your basic monthly salary including Dearness Allowance
                      (DA)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300 ">
                      Your contribution to the EPF
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Your employer’s contribution
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Your retirement age (Including VRS, if you have such
                      plans.){" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Your current EPF balance
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2 border border-gray-300">
                      Current EPF interest rate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              How to use Groww’s EPF calculator?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              It is very easy to access and use our EPF calculator. Just input
              the values and the result will be generated within seconds.
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              <span className="text-sm md:text-base text-justify">
                Step 1:{" "}
              </span>{" "}
              Enter your basic salary and your age
            </p>
            <p className="text-sm md:text-base text-justify mb-4">
              <span className="text-sm md:text-base text-justify">
                Step 2:{" "}
              </span>{" "}
              As soon as you input the values, the employer’s contribution (
              EPS+EPF), total interest earned and total maturity amount will be
              reflected in the results.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              What are the advantages of Groww’s PF account calculator?
            </h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Groww offers you a number of choices with many different
              calculators, a list of which you can see below. All of our
              calculators are free to use. They are regularly updated to avoid
              any glitches.
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

export default Epf;
