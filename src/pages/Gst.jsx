import  { useState } from "react";
import SideComponent from "../components/SideComponent";

function GSTCalculator() {
  const [amount, setAmount] = useState(25000);
  const [gstType, setGstType] = useState("excluding");
  const [taxRate, setTaxRate] = useState(12);

  const calculateGST = () => {
    const gstAmount =
      gstType === "excluding"
        ? (amount * taxRate) / 100
        : amount - (amount * 100) / (100 + taxRate);

    const postGstAmount =
      gstType === "excluding" ? amount + gstAmount : amount;

    return { gstAmount, postGstAmount };
  };

  const { gstAmount, postGstAmount } = calculateGST();

  const formatToIndianCurrency = (number) =>
    number.toLocaleString("en-IN");

  return (
    <>
      <div className="mx-10 my-10 md:my-20">
        <div className="flex flex-col lg:flex-row">
          <div className="w-[75%] flex flex-col gap-10">
            <div className="border h-[520px] flex bg-white p-6 gap-10 rounded-lg shadow-lg">
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">GST Calculator</h2>

                {/* GST Type Toggle */}
                <div className="my-4">
                  <label className="font-medium">Calculate on:</label>
                  <div className="flex items-center space-x-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="excluding"
                        checked={gstType === "excluding"}
                        onChange={() => setGstType("excluding")}
                        className="mr-2"
                      />
                      Excluding GST
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="including"
                        checked={gstType === "including"}
                        onChange={() => setGstType("including")}
                        className="mr-2"
                      />
                      Including GST
                    </label>
                  </div>
                </div>

                {/* Total Amount Slider */}
                <div className="my-4">
                  <label className="font-medium">Total amount</label>
                  <input
                    type="range"
                    min="5000"
                    max="500000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full mt-2 accent-main"
                  />
                  <div className="text-main text-lg font-semibold text-right mt-2">
                    ₹ {formatToIndianCurrency(amount)}
                  </div>
                </div>

                {/* Tax Slab Dropdown */}
                <div className="my-4">
                  <label className="font-medium">Tax slab</label>
                  <select
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value))}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  >
                    <option value={0.25}>0.25%</option>
                    <option value={3}>3%</option>
                    <option value={5}>5%</option>
                    <option value={12}>12%</option>
                    <option value={18}>18%</option>
                    <option value={28}>28%</option>
                  </select>
                </div>

                {/* Results */}
                <div className="px-8 py-10 bg-[#cdd4f1] mt-10  rounded-xl flex justify-between">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">Total GST</h3>
                    <p className="text-2xl font-bold text-main">
                      ₹ {formatToIndianCurrency(Math.round(gstAmount))}
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">Post-GST amount</h3>
                    <p className="text-2xl font-bold text-main">
                      ₹ {formatToIndianCurrency(Math.round(postGstAmount))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-10">
              {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
              <p className="text-gray-700 mb-4">
                The GST Act was passed by the parliament on March 29, 2017 and implemented from July 1 of the same year. The Good and Services Tax is an indirect tax levied by the Indian government on all goods and services purchased within its jurisdiction. It is a single tax that has eliminated multiple indirect taxes of the previous regime such as sales tax, VAT, Excise Duty, etc
              </p>
              <p className="text-gray-700 mb-4">
                Every enterprise operating in India has to mandatorily register for the GST. They are required to have a GST Identification Number or GSTIN. Consumers have to pay this tax for all goods they purchase and all the services they avail. As such, it is paramount that one understands how to compute GST accurately. You may take the help of the GST calculator to evaluate the same.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                How Can a GST Calculator Help You?
              </h2>
              <p className="text-gray-700 mb-4">
                Everything that you purchase, be it a product or a service, is taxed under the GST amount. It’s to your advantage to know how much tax you are paying for the products you use. That’s where an Indian GST calculator can come to your aid.
              </p>
              <ul className="w-full list-disc list-inside">
                <li className="mb-2">GST tax calculator provides you with an accurate estimate of the amount of tax you have to pay.</li>
                <li className="mb-2">It helps you save time for the calculation of GST.</li>
                <li className="mb-2">It eliminates the chances of any fraudulent activities if you are an aware consumer who knows his/her taxes.</li>
              </ul>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Formula to Determine GST Amount
              </h2>
              <p className="text-gray-700 mb-4">
                The GST amount calculator uses a standardised method to calculate GST. There are 2 aspects of this calculator- adding GST and removing GST from the total price of an item.
              </p>
              <p className="text-gray-700 mb-4">
                For adding GST, the following formula is used.
              </p>
              <p className="text-gray-700 mb-4">
                GST amount = {'(Price x GST%)'}
              </p>
              <p className="text-gray-700 mb-4">
                Net price = Cost of the product + GST amount
              </p>
              <p className="text-gray-700 mb-4">
                For example, if a product or service costs Rs. 100 and the GST levied on that is 18%, the GST amount will be 100 x 18% = Rs. 18. The net amount you’d have to pay would be Rs. 118.
              </p>
              <p className="text-gray-700 mb-4">
                For removing GST from the net price of a product, the following formula is used:
              </p>
              <p className="text-gray-700 mb-4">
                GST= Original cost – {'[Original cost x {100/(100+GST%)}]'}
              </p>
              <p className="text-gray-700 mb-4">
                Net price = Original cost – GST
              </p>
              <p className="text-gray-700 mb-4">
                For example, if the cost of a product after GST of 18% is Rs. 118, its original cost is 118 – {'[100/(100 + 18%)}]'}, which equates to Rs. 100.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                How to Use Groww GST Calculator Online
              </h2>
              <p className="text-gray-700 mb-4">
                You can use GST calculator India from the Groww website within minutes. You have to simply-
              </p>
              <ul className="w-full list-disc list-inside">
                <li className="text-gray-900 mb-2">Input the variables, i.e., original cost and GST percentage.</li>
                <li className="text-gray-900 mb-2">The GST amount will be displayed immediately.</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                - What is GST Inclusive Amount
              </h3>
              <p className="text-gray-700 mb-4">
                GST inclusive amount means the total value of the product after including the GST amount in the original price. Herein, the tax is not charged separately from the customer since it is already included in the price.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                - What is GST Exclusive Amount
              </h3>
              <p className="text-gray-700 mb-4">
                GST Exclusive Amount means the value of the product without GST being included. To calculate this amount, the GST amount is subtracted from the product&apos;s GST inclusive value.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Advantages of using Groww GST calculator
              </h2>
              <ul className="w-full list-disc list-inside">
                <li className="text-gray-900 mb-4">You can figure out the tax amount you are paying.</li>
                <li className="text-gray-900 mb-4">It is quick and accurate, thereby saving you valuable time.</li>
                <li className="text-gray-900 mb-4">You stay protected from any fraudulent activities that may arise out of wrong GST calculation.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                GST has fundamentally changed the tax regime in India. All enterprises, regardless of their size or area of operation, now fall under the same tax umbrella throughout the country. Use the GST calculator online and find out how much tax you are paying for the goods and services you purchase
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
    </>

  );
}

export default GSTCalculator;
