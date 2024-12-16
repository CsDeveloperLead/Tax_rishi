import { useState, useMemo } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SideComponent from "../components/SideComponent";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Gratuity() {
  const [monthlySalary, setMonthlySalary] = useState(10000); // renamed for clarity
  const [yearsOfService, setYearsOfService] = useState(5);

  // Calculate Gratuity
  const gratuity = useMemo(() => {
    if (monthlySalary <= 0 || yearsOfService < 5) {
      // Minimum of 5 years required
      return 0;
    }
    return Math.round((monthlySalary * yearsOfService * 15) / 26);
  }, [monthlySalary, yearsOfService]);

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[500px] flex flex-col md:flex-row bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Gratuity Calculator</h2>
                <button className="bg-gray-200 rounded-full p-3 focus:outline-none">
                  <span className="text-main font-bold">Gratuity</span>
                </button>
              </div>

              {/* Monthly Salary Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Monthly Salary (Basic + DA)
                  </label>
                  <input
                    type="text"
                    value={monthlySalary}
                    min="10000"
                    max="10000000"
                    step="10000"
                    onChange={(e) => setMonthlySalary(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Years of Service Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Years of Service
                  </label>
                  <input
                    type="text"
                    value={yearsOfService}
                    min="5"
                    max="50"
                    step="1"
                    onChange={(e) => setYearsOfService(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={yearsOfService}
                  onChange={(e) => setYearsOfService(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Summary */}
              <div className="flex flex-col gap-2 w-full py-10 mt-10 rounded-3xl bg-[#cdd4f1] items-center justify-center">
                <span>Total Gratuity Payable</span>
                <h1 className="text-3xl font-bold">
                  ₹ {formatToIndianCurrency(gratuity)}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full mr-10">
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
            <p className="text-gray-700 mb-4">
              Any employee of a private company that provides EPF facilities is
              eligible to receive an amount as gratuity after completing 5 years
              of service. However, an employee is also eligible to get the
              gratuity before five years if he/she gets injured and disabled in
              an accident or due to a disease. Groww provides you with a free
              gratuity calculator which you can use and calculate how much your
              organization owes you. All gratuity payments are controlled by the
              laws laid down under the Payment of Gratuity Act 1972. The amount
              depends on the last drawn salary and the years of service served
              to the company.
              <br />
              <br />
              If you are eligible for payment of gratuity, you must first check
              how much you are eligible for. Our online gratuity calculator will
              help you in that aspect too.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Gratuity Calculation Formula
            </h2>
            <p className="text-gray-700 mb-4">
              Groww uses a proprietary formula that is benchmarked with other
              similar offerings. The formula used by our online gratuity
              calculator is:
            </p>
            <p className="text-gray-700 mb-4">G = n*b*15/26</p>
            <p className="text-gray-700 mb-4">
              In the formula, the values are the following.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <tbody>
                  <tr className="">
                    <td className="px-4 py-2 border border-gray-300">N/n</td>
                    <td className="px-4 py-2 border border-gray-300">
                      The number of years you have worked in the concerned
                      organisation
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">B/b</td>
                    <td className="px-4 py-2 border border-gray-300 ">
                      Last drawn basic salary plus Dearness Allowance (DA)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">G</td>
                    <td className="px-4 py-2 border border-gray-300 ">
                      Gratuity amount you are eligible for
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              For example, if individual A has worked with an organisation for 5
              years, and your basic salary plus DA amounted to Rs. 30,000 every
              month, you are eligible to receive 5*30000*15/26 = Rs. 86,538.46
              as gratuity.
            </p>
            <p className="text-gray-700 mb-4">
              Note that under the existing laws –
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">
                Your gratuity cannot exceed Rs. 10 Lakh in its entirety. Any
                amount beyond this upper limit is called ex gratia payment.
              </li>
              <li className="mb-4">
                Also, if you have worked for, say 17 years and 6 months, the
                figure will be rounded off to the nearest single digit or 18
                years.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How can a Gratuity Calculator Help You?
            </h2>
            <p className="text-gray-700 mb-4">
              Under the Payment of Gratuity Act of 1972, you are eligible to
              receive the gratuity amount provided –
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">You are near the age of superannuation</li>
              <li className="mb-4">
                You have completed 5 years of work in the same organisation
                continuously.
              </li>
              <li className="mb-4">
                You do not have any other full-time employer.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              In such cases, a gratuity calculator online in India is useful
              because –
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">
                It helps you ascertain the precise amount due to you.
              </li>
              <li className="mb-4">
                It saves you valuable time and other resources.
              </li>
              <li className="mb-4">
                You can use it from the comfort of your home.
              </li>
              <li className="mb-4">
                It helps you in long-term financial planning.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Use Groww’s Gratuity Calculator?
            </h2>
            <p className="text-gray-700 mb-4">
              Follow these simple steps to use the gratuity calculator.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 1 :</span> Keep all essential
              details about your employment history handy.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 2 :</span> Enter the basic pay +
              dearness allowance value and the gratuity value will be reflected
              within seconds.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of Using Groww’s Gratuity Calculator
            </h2>
            <p className="text-gray-700 mb-4">
              As a market leader in financial affairs, Groww provides you with
              the most sophisticated tools in the market. Here are the reasons
              why our Gratuity Calculator is helpful for you.
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">
                Data security is of paramount importance. Our servers are secure
                and safe for use.
              </li>
              <li className="mb-4">
                Our calculator is easy to use and you do not need any technical
                expertise.
              </li>
              <li className="mb-4">
                Groww’s gratuity calculator is never wrong. You can trust our
                product.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Taxation Rules for Gratuity
            </h2>
            <p className="text-gray-700 mb-4">
              The taxes applicable to the gratuity amount depends on the type of
              employee:
            </p>
            <p className="text-gray-700 mb-4">
              The gratuity amount received by any government employee is exempt
              from the income tax. For private-sector employees, the least of
              the following three amounts will be exempt from income tax
              provided that the employer is covered under the Payment of
              Gratuity Act,
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">Rs 20 Lakh</li>
              <li className="mb-4">The actual gratuity amount received</li>
              <li className="mb-4">The eligible gratuity</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The maximum tax-exempt gratuity amount an employee can claim in
              his/her entire professional life cannot go beyond Rs 20 lakh.
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

export default Gratuity;
