import { useState, useMemo, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SideComponent from "../components/SideComponent";

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Cagr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalInvestment, setFinalInvestment] = useState(20000);
  const [timePeriod, setTimePeriod] = useState(5);

  // Calculate CAGR
  const cagr = useMemo(() => {
    if (initialInvestment <= 0 || finalInvestment <= 0 || timePeriod <= 0) {
      return 0;
    }
    return (
      ((finalInvestment / initialInvestment) ** (1 / timePeriod) - 1) *
      100
    ).toFixed(2); // Multiplied by 100 to get a percentage
  }, [initialInvestment, finalInvestment, timePeriod]);

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[520px] flex bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">CAGR Calculator</h2>
                <button className="bg-gray-200 rounded-full p-3 focus:outline-none">
                  <span className="text-main font-bold">CAGR</span>
                </button>
              </div>

              {/* Initial Investment Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Initial Investment
                  </label>
                  <input
                    type="text"
                    value={initialInvestment}
                    min="1000"
                    max="10000000"
                    step="1000"
                    onChange={(e) =>
                      setInitialInvestment(Number(e.target.value))
                    }
                    className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Final Investment Slider */}
              <div className="my-8">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Final Investment
                  </label>
                  <input
                    type="text"
                    value={finalInvestment}
                    min="1000"
                    max="10000000"
                    step="1000"
                    onChange={(e) => setFinalInvestment(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={finalInvestment}
                  onChange={(e) => setFinalInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Time Period Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 font-medium">
                    Time Period
                  </label>
                  <input
                    type="text"
                    value={timePeriod}
                    min="1"
                    max="40"
                    step="1"
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right"
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
              <div className="flex w-full flex-col gap-2 bg-[#cdd4f1] py-10 mt-8 rounded-3xl items-center justify-center">
                <h1 className="text-3xl font-bold">
                  CAGR is <span className="text-main">{cagr} %</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full mr-10">
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
              SIP Calculator – Systematic Investment Plan Calculator
            </h1> */}
            <p className="text-gray-700 mb-4">
              CAGR is an acronym for Compounded Annual Growth Rate commonly used
              in determining how well a business is performing in the fiercely
              competitive market. It represents the growth of an organisation,
              and you can easily make out the growth rate, or the lack of it,
              using a CAGR calculator.
              <br />
              <br />
              Such a calculator is easily available online, but
              user-friendliness is important while calculating CAGR returns.
              Groww’s online CAGR calculator brings you an organized and
              accurate approach to calculate your business’ CAGR.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How can a CAGR Calculator Help You?
            </h2>
            <p className="text-gray-700 mb-4">
              If you own a business, the CAGR can indicate a lot of factors that
              are otherwise overlooked. Unlike the concept of ‘absolute
              returns’, growth based on CAGR takes into account the element of
              time. It is thus a better indicator of growth over a period.
            </p>
            <p className="text-gray-700 mb-4">
              Note that the CAGR is an indicative figure and not a real one. In
              its most basic sense, it indicates the exact rate of an
              investment’s growth considering that it grows at the same rate and
              the returns are reinvested. Taking note of CAGR is also a huge
              bonus when you are considering differential investment options.
            </p>
            <p className="text-gray-700 mb-4">
              A CAGR calculator helps you determine the true returns on
              investment yearly. In this sense, using our CAGR calculator online
              saves you time and other resources as it is completely free.
            </p>
            <p className="text-gray-700 mb-4">
              Thus, the CAGR calculator can tell you if:
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li className="mb-4">
                Your business is growing with time and whether the profits thus
                generated is being invested correctly.
              </li>
              <li className="mb-4">
                It will enable you to evaluate your investment options. For
                example, if stock A is not working as well as Stock B based on
                their respective CAGR indices, you can invest in Stock B
                instead.
              </li>
              <li className="mb-4">
                The relative growth of your organization with respect to the
                market leaders in your business segment.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Note that no CAGR calculator in India will give you any data on
              investment risk.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Calculate CAGR?
            </h2>
            <p className="text-gray-700 mb-4">
              The CAGR formula to calculate the investments is represented by:
            </p>
            <p className="text-gray-700 mb-4">
              CAGR = {"(FV / PV) 1 / n – 1 "}
            </p>
            <p className="text-gray-700 mb-4">
              It is a mathematical calculation that determines the real-time
              CAGR for any organization. The values stand for the following:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="px-4 py-2 border border-gray-300 w-10">
                      FV
                    </th>
                    <th className="px-4 py-2 border border-gray-300 w-80">
                      Future Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">PV</td>
                    <td className="px-4 py-2 border border-gray-300 ">
                      Present Value
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 ">N</td>
                    <td className="px-4 py-2 border border-gray-300 ">
                      Time period in years
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">An example of CAGR calculation</p>
            <p className="text-gray-700 mb-4">
              If you have an initial investment of Rs. 1 Lakh in a business, it
              constitutes the PV. If the total investment has swollen to Rs 10
              Lakh (FV) after 5 years (N), the CAGR is:
            </p>
            <p className="text-gray-700 mb-4">
              {"(10,00,000/1,00,000)1 / 5 – 1 or 0.589 "}
            </p>
            <p className="text-gray-700 mb-4">
              Thus, the CAGR percentage is CAGR x 100 or 58.9%.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to use Groww’s CAGR calculator?
            </h2>
            <p className="text-gray-700 mb-4">
              You can use Groww’s CAGR calculator online without any charges.
              Follow these simple steps.
            </p>
            <ol className="w-full list-decimal list-inside mb-4">
              <li>Enter your initial investment amount.</li>
              <li>
                Enter the expected value of the investment after a certain
                period of time.
              </li>
              <li>
                Enter the number of years or months for which you wish to use
                the CAGR calculator .
              </li>
            </ol>
            <p className="text-black mb-4">
              The CAGR calculator will generate the results within seconds as
              soon as you input the values.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of Groww’s online CAGR calculator
            </h2>
            <p className="text-gray-700 mb-4">
              Our services provide you with several significant benefits.
            </p>
            <ul className="w-full list-disc list-inside mb-4">
              <li>It provides a detailed outlook of your ROI.</li>
              <li>
                If you are a potential investor, you can also use our service of
                a mutual fund CAGR calculator. It will help you determine how
                much you need to invest to maximize returns over a certain
                period.
              </li>
              <li>
                Compare your business’ returns with benchmark options and
                evaluate the performance.
              </li>
              <li>Make long-term capital influx plans.</li>
              <li>
                Avail a globally recognized financial platform and get accurate
                results.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              You can see a wide range of other calculators below. Feel free to
              use them. Our CAGR calculator is designed for safety, efficiency,
              and accuracy. It helps you plan your future finances efficiently.
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

export default Cagr;
