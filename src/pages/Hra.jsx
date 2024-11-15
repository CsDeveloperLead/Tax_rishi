import { useState, useMemo } from "react";
import SideComponent from "../components/SideComponent";

function HraCalculator() {
  const [basicSalary, setBasicSalary] = useState(540000);
  const [dearnessAllowance, setDearnessAllowance] = useState(0);
  const [hraReceived, setHraReceived] = useState(77985);
  const [rentPaid, setRentPaid] = useState(300000);
  const [isMetro, setIsMetro] = useState(false);

  // Function to format number to Indian currency
  const formatToIndianCurrency = (number) => number.toLocaleString("en-IN");

  // HRA Exemption Calculation
  const hraExempted = useMemo(() => {
    const fiftyPercentOfBasic = (isMetro ? 0.5 : 0.4) * basicSalary;
    const rentMinusTenPercent = Math.max(rentPaid - 0.1 * (basicSalary + dearnessAllowance), 0);
    return Math.min(hraReceived, fiftyPercentOfBasic, rentMinusTenPercent);
  }, [basicSalary, dearnessAllowance, hraReceived, rentPaid, isMetro]);

  const hraTaxable = hraReceived - hraExempted;

  return (
    <div className="mx-10 my-10 md:my-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-[75%] flex flex-col gap-10">
          <div className="border h-[640px] flex bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4">HRA Calculator</h2>

              {/* Basic Salary Input */}
              <div className="my-4">
                <label className="font-medium">Basic Salary (p.a.)</label>
                <input
                  type="number"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-4 py-2 mt-2 border rounded-lg "
                  placeholder="Enter Basic Salary"
                />
              </div>

              {/* Dearness Allowance Input */}
              <div className="my-4">
                <label className="font-medium">Dearness Allowance (p.a.)</label>
                <input
                  type="number"
                  value={dearnessAllowance}
                  onChange={(e) => setDearnessAllowance(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-4 py-2 mt-2 border rounded-lg "
                  placeholder="Enter Dearness Allowance"
                />
              </div>

              {/* HRA Received Input */}
              <div className="my-4">
                <label className="font-medium">HRA Received (p.a.)</label>
                <input
                  type="number"
                  value={hraReceived}
                  onChange={(e) => setHraReceived(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-4 py-2 mt-2 border rounded-lg "
                  placeholder="Enter HRA Received"
                />
              </div>

              {/* Total Rent Paid Input */}
              <div className="my-4">
                <label className="font-medium">Total Rent Paid (p.a.)</label>
                <input
                  type="number"
                  value={rentPaid}
                  onChange={(e) => setRentPaid(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-4 py-2 mt-2 border rounded-lg "
                  placeholder="Enter Total Rent Paid"
                />
              </div>

              {/* Metro City Option */}
              <div className="my-4 flex items-center">
                <label className="font-medium mr-4">Are you working in a metro city?</label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    checked={isMetro}
                    onChange={() => setIsMetro(true)}
                    className="text-main"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-3 ml-4">
                  <input
                    type="radio"
                    checked={!isMetro}
                    onChange={() => setIsMetro(false)}
                    className="text-main"
                  />
                  <span>No</span>
                </label>
              </div>

              {/* Exempted and Taxable HRA Results */}
              <div className="mt-6 px-20  py-14 bg-[#cdd4f1] rounded-lg text-center flex justify-between">
                <h3 className="text-xl font-semibold">Exempted HRA: ₹ <span className="text-main font-bold"> {formatToIndianCurrency(hraExempted)}</span></h3>
                <h3 className="text-xl font-semibold">Taxable HRA: ₹ <span className="text-main font-bold">{formatToIndianCurrency(hraTaxable)}</span> </h3>
              </div>
            </div>
          </div>
          <div className="mr-10">
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
            <p className="text-gray-700 mb-4">
              House rent allowance (HRA) is one of the important components of your salary. All employers have to provide HRA as compensation for house rental expenses. However, most of us are not aware of the fact that we can also save tax on it. The HRA amount is decided based on factors like the employee’s salary structure, actual salary and the city in which he/she is residing. If you are a salaried employee living in a rented place, then you can calculate your tax liability using our HRA calculator.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What is an HRA Calculator?
            </h2>
            <p className="text-gray-700 mb-4">
              In most Indian cities, the cost of living has risen considerably over the last decade or so. This is partly due to an increase in disposable income besides inflation. To ensure the welfare of their employees, many organizations provide a House Rent Allowance or HRA to the ones living in a rented home. This HRA calculator will help you determine the amount you receive as an allowance
            </p>
            <p className="text-gray-700 mb-4">
              After the recommendation of the 7th Pay Commission, the HRA slabs across India have been changed to a great extent. Cities have now been categorized into 3 distinct slabs. Slab X has the most urban cities where you clearly need an HRA exemption calculator. Slab Y covers marginally low-cost cities.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How can an HRA Calculator Help You?
            </h2>
            <p className="text-gray-700 mb-4">
              Using an HRA calculator online is of great benefit to those who receive a housing rental allowance from their employer.
            </p>
            <p className="text-gray-700 mb-4">
              There are 3 conditions on which you can claim an exemption under HRA.
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">You have to be salaried and the HRA must be a part of the salary. You cannot use this calculator if you are a self-employed individual.</li>
              <li className="mb-4">Second, you must reside in rented premises.</li>
              <li className="mb-4">Lastly, the HRA has to exceed 10 per cent of your salary.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You can use the HRA calculator that we provide to evaluate how much tax you have to pay on your HRA. Here are several other advantages:
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">Depending on the city you live in, you can claim HRA based on the calculated amounts. Slab X cities are more expensive to reside in while the costs go down with Slab Y and Z.</li>
              <li className="mb-4">The house rent allowance exemption calculator will help determine how much tax you need to pay in a financial year.</li>
              <li className="mb-4">HRA slabs also depend on the city you stay in. For example, if you stay in Calcutta, Ahmedabad, Mumbai, New Delhi or Chennai, the HRA allowance may go up to 27%. The figure may go down to 18% and 9% for the tier-2 and tier-3 cities.</li>
              <li className="mb-4">Depending on the quantum of your salary allocated as HRA, you can easily plan for the future using our HRA calculator</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Calculate HRA in India?
            </h2>
            <p className="text-gray-700 mb-4">
              Groww uses a standard formula to determine the total House Rent Allowance payable. When it comes to HRA calculation, salary refers to the basic sum plus the Dearness Allowance, and other variable commissions.
            </p>
            <p className="text-gray-700 mb-4">
              Our product also works as an excellent HRA tax benefit calculator. The actual exemption limit will be the lowest of the 3 main heads below.
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">The total (actual) rent paid minus 10% basic salary for each individual.</li>
              <li className="mb-4">The total (gross) HRA that the employer provides to the employee.</li>
              <li className="mb-4">Depending on how expensive the residential conditions are, 40 to 50% of the basic salary.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We can use a fictional example of Person A to identify the HRA payable. If we consider that he lives in Delhi at accommodated premises for which he has to spend Rs 12,000 every month, the following is his pay structure breakdown based on our HRA calculator
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-4 py-2 border border-gray-300 w-48">Salary Component</th>
                    <th className="px-4 py-2 border border-gray-300 w-48">Total amount (each month)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-4 py-2 border border-gray-300">Basic salary</td>
                    <td className="px-4 py-2 border border-gray-300">Rs 23,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">HRA</td>
                    <td className="px-4 py-2 border border-gray-300 ">Rs 15,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">Conveyance allowance</td>
                    <td className="px-4 py-2 border border-gray-300 ">Rs 3000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">Medical allowance</td>
                    <td className="px-4 py-2 border border-gray-300 ">Rs 1250</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">Special allowance under other heads</td>
                    <td className="px-4 py-2 border border-gray-300 ">Rs 2300</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              Adding the components, we identify that Individual A has a monthly salary of Rs 44,500.
            </p>
            <p className="text-gray-700 mb-4">
              Based on the three heads mentioned above, using our HRA allowance calculator, the figures that are churned out are:
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">Actual rent paid minus 10% basic or Rs 9700</li>
              <li className="mb-4">HRA the employer offers is Rs 15000</li>
              <li className="mb-4">50% of the basic salary is Rs 11,500</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Since the least of these 3 sums is calculated as HRA, Individual A has to pay Rs 9700 as HRA. It will be exempted from his taxable income.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Use the HRA Calculator?
            </h2>
            <p className="text-gray-700 mb-4">
              It is easy to use our HRA calculator when you know the steps.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 1 :</span> Enter your basic salary and HRA you get as per your salary slip
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 2 :</span> Enter the actual rent paid and specify whether you live in a metro city or not from the drop-down.
            </p>
            <p className="text-gray-700 mb-4">
              The HRA calculation for income tax makes it easy for the employees to save tax.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Benefits of using an HRA calculator
            </h2>
            <p className="text-gray-700 mb-4">
              The primary advantages that using a reliable HRA calculator in India are –
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">The calculator never makes errors. You can use it as many times as you wish.</li>
              <li className="mb-4">You can claim tax exemptions based on the calculations.</li>
              <li className="mb-4">Finally, the calculator takes care of all the variables which are present as part of the HRA calculation.</li>
            </ul>

            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">You are near the age of superannuation</li>
              <li className="mb-4">You have completed 5 years of work in the same organisation continuously.</li>
              <li className="mb-4">You do not have any other full-time employer.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              In such cases, a gratuity calculator online in India is useful because –
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">It helps you ascertain the precise amount due to you.</li>
              <li className="mb-4">It saves you valuable time and other resources.</li>
              <li className="mb-4">You can use it from the comfort of your home.</li>
              <li className="mb-4">It helps you in long-term financial planning.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Use Groww’s Gratuity Calculator?
            </h2>
            <p className="text-gray-700 mb-4">
              Follow these simple steps to use the gratuity calculator.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 1 :</span> Keep all essential details about your employment history handy.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="text-black">Step 2 :</span> Enter the basic pay + dearness allowance value and the gratuity value will be reflected within seconds.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of Using Groww’s Gratuity Calculator
            </h2>
            <p className="text-gray-700 mb-4">
              As a market leader in financial affairs, Groww provides you with the most sophisticated tools in the market. Here are the reasons why our Gratuity Calculator is helpful for you.
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">Data security is of paramount importance. Our servers are secure and safe for use.</li>
              <li className="mb-4">Our calculator is easy to use and you do not need any technical expertise.</li>
              <li className="mb-4">Groww’s gratuity calculator is never wrong. You can trust our product.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Taxation Rules for Gratuity
            </h2>
            <p className="text-gray-700 mb-4">
              The taxes applicable to the gratuity amount depends on the type of employee:
            </p>
            <p className="text-gray-700 mb-4">
              The gratuity amount received by any government employee is exempt from the income tax.
              For private-sector employees, the least of the following three amounts will be exempt from income tax provided that the employer is covered under the Payment of Gratuity Act,
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">Rs 20 Lakh</li>
              <li className="mb-4">The actual gratuity amount received</li>
              <li className="mb-4">The eligible gratuity</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The maximum tax-exempt gratuity amount an employee can claim in his/her entire professional life cannot go beyond Rs 20 lakh.
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

export default HraCalculator;
