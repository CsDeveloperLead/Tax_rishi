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

// IRR calculation based on the provided algorithm
const IRR = (values, guess = 0.1) => {
  const irrResult = (values, dates, rate) => {
    const r = rate + 1;
    return values.reduce((acc, value, i) => {
      return acc + value / Math.pow(r, (dates[i] - dates[0]) / 365);
    }, 0);
  };

  const irrResultDeriv = (values, dates, rate) => {
    const r = rate + 1;
    return values.reduce((acc, value, i) => {
      if (i === 0) return acc; // Skip the initial investment
      const frac = (dates[i] - dates[0]) / 365;
      return acc - (frac * value) / Math.pow(r, frac + 1);
    }, 0);
  };

  const dates = values.map((_, i) => i * 365); // Assume yearly intervals
  const positive = values.some((v) => v > 0);
  const negative = values.some((v) => v < 0);

  if (!positive || !negative) return "Not Converging";

  const epsMax = 1e-10;
  const iterMax = 50;
  let resultRate = guess;
  let iteration = 0;

  while (iteration < iterMax) {
    const resultValue = irrResult(values, dates, resultRate);
    const newRate =
      resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    if (
      Math.abs(newRate - resultRate) < epsMax &&
      Math.abs(resultValue) < epsMax
    ) {
      return (newRate * 100).toFixed(2); // Return as percentage
    }
    resultRate = newRate;
    iteration++;
  }

  return "Not Converging";
};

function IrrCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [cashFlows, setCashFlows] = useState([0]);
  const [guess, setGuess] = useState(0.1);
  const [irrResult, setIrrResult] = useState(null);

  const handleAddYear = () => {
    setCashFlows([...cashFlows, 0]);
  };

  const handleRemoveYear = (index) => {
    const updatedCashFlows = cashFlows.filter((_, i) => i !== index);
    setCashFlows(updatedCashFlows);
  };

  
  const handleCashFlowChange = (index, value) => {
    const updatedCashFlows = [...cashFlows];
    updatedCashFlows[index] = value === "" ? 0 : Number(value);
    setCashFlows(updatedCashFlows);
  };

  const calculateIRR = () => {
    const values = [-initialInvestment, ...cashFlows];
    setIrrResult(IRR(values, guess));
  };
  const handleInitialInvestmentChange = (value) => {
    setInitialInvestment(value === "" ? 0 : Number(value));
  };

  const data = {
    labels: ["Initial Investment", "Cash Flows"],
    datasets: [
      {
        data: [
          initialInvestment,
          cashFlows.reduce((acc, flow) => acc + flow, 0),
        ],
        backgroundColor: ["#e0e7ff", "#398730"],
      },
    ],
  };

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20 text-[#14598D]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] h-auto flex flex-col  gap-10">
          <div className="w-full md:[75%] flex border  h-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full ">
            <h2 className="text-xl font-bold mb-6">
              Internal Rate of Return (IRR) Calculator
            </h2>

            {/* Initial Investment */}
            <div className="mb-6">
              <label className=" font-medium">
                Initial Investment
              </label>
              <input
                type="number"
                value={initialInvestment === 0 ? "" : initialInvestment}
                onChange={(e) => handleInitialInvestmentChange(e.target.value)}
                placeholder="Enter the initial investment"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2"
              />
            </div>

            {/* Cash Flows */}
            <div className="mb-6 flex flex-col">
              <label className="text-gray-700 font-medium">Cash Flow</label>
              {cashFlows.map((flow, index) => (
                <div key={index} className="flex items-center gap-4 mt-2">
                  <input
                    type="number"
                    value={flow === 0 ? "" : flow}
                    onChange={(e) => handleCashFlowChange(index, e.target.value)}
                    className="flex-1 bg-gray-100 px-4 py-2 rounded-lg"
                    placeholder={`0`}
                  />
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleRemoveYear(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <button
                className="bg-blue-500 w-[250px] text-white px-4 py-2 mt-4 rounded-lg"
                onClick={handleAddYear}
              >
                Add Year
              </button>
            </div>

            {/* Guess */}
            <div className="mb-6">
              <label className="text-gray-700 font-medium">
                Guess (Optional)
              </label>
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(Number(e.target.value))}
                className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2"
              />
            </div>

            {/* Results */}
            <button
              className="bg-main hover:bg-green-700 text-white font-semibold mt-4 px-6 py-2 rounded-lg"
              onClick={calculateIRR}
            >
              Calculate
            </button>

            <div className="text-gray-700 font-medium mt-6">
              <p>
                Invested Amount: ₹{formatToIndianCurrency(initialInvestment)}
              </p>
              <p>
                Estimated Cash Flows: ₹
                {formatToIndianCurrency(
                  cashFlows.reduce((acc, flow) => acc + flow, 0)
                )}
              </p>
              <p>
                Your IRR:{" "}
                <span className="font-bold text-main">
                  {irrResult ? `${irrResult}%` : "Not Converging"}
                </span>
              </p>
            </div>
            </div>
            {/* <div className="w-full md:w-[30%]">
              <Pie
                data={data}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div> */}
          </div>
         
          <div>
          <div className="min-h-screen font-montserrat text-[#14598D] ">
      <div className="bg-white">
        <h1 className="text-xl font-bold text-blue-800 mb-4">Financial Management</h1>
        
        <section className="mb-6">
          <p className="">
            It can be seen that in absolute terms, project 3 gives the highest cash inflows yet
            its desirability factor is low. This is because the outflow is also very high. 
            <strong className="text-blue-600"> Desirability/Profitability Index factor</strong> 
            helps us in ranking various projects.
          </p>
          <p className=" mt-2">
            Since PI is an extension of NPV, it has the same advantages and limitations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Advantages of PI</h2>
          <ul className="list-disc list-inside ">
            <li>The method also uses the concept of time value of money.</li>
            <li>
              In the PI method, since the present value of cash inflows is divided by the
              present value of cash outflow, it is a <strong>relative measure</strong> of a
              project’s profitability.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Limitations of PI</h2>
          <ul className="list-disc list-inside ">
            <li>
              Profitability index <strong>fails as a guide</strong> in resolving capital rationing where projects are indivisible.
            </li>
            <li>
              Once a single large project with high NPV is selected, the possibility of accepting several small projects, which together may have higher NPV than the single project, is excluded.
            </li>
            <li>
              Situations may arise where a project with a lower profitability index selected may generate cash flows such that another project can be taken up one or two years later, resulting in a higher total NPV.
            </li>
          </ul>
          <p className=" mt-2">
            The Profitability Index approach thus <strong>cannot be used indiscriminately</strong>,
            but all other types of alternatives of projects will have to be worked out.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Internal Rate of Return Method (IRR)</h2>
          <p className="">
            The internal rate of return method considers the time value of money, the initial cash investment, and all cash flows from the investment. 
          </p>
          <p className=" mt-2">
            Unlike the net present value method, the internal rate of return method does not use the desired rate of return but estimates the discount rate that makes the present value of subsequent cash inflows equal to the initial investment. 
            This discount rate is called <strong>IRR</strong>.
          </p>
          <p className=" mt-2">
            <strong>IRR Definition:</strong> Internal rate of return for an investment proposal is the discount rate that equates the present value of the expected cash inflows with the initial cash outflow.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Calculation of IRR</h2>
          <p className="">
            The procedures for computing the internal rate of return vary with the pattern of net cash flows over the useful life of an investment.
          </p>
          <h3 className="text-md font-semibold text-blue-800 mt-4">Scenario 1: Uniform Cash Flows</h3>
          <p className=" mt-2">
            For an investment with uniform cash flows over its life, the following equation is used:
          </p>
          <p className=" mt-2">
            <strong>Total Initial Investment</strong> = Annual Cash Inflow × Annuity Discount Factor
          </p>
          <p className=" mt-2">
            If <strong>A</strong> is the annuity discount factor, then:
          </p>
          <p className="bg-gray-200 p-4 rounded">
            A = (Total Initial Cash Disbursements and Commitments) ÷ (Annual Equal Cash Inflows)
          </p>
          <p className=" mt-2">
            Once <strong>A</strong> is calculated, the interest rate corresponding to the project’s life is searched in the Present Value Annuity Factor (PVAF) table. If the exact value of <strong>A</strong> is found, the respective interest rate is the IRR. However, it rarely happens. Therefore, the following steps are used:
          </p>
          <ol className="list-decimal list-inside  mt-2">
            <li>Compute the approximate payback period (also called fake payback period).</li>
            <li>Locate this value in the PVAF table corresponding to the project's life period.</li>
            <li>Discount cash flows using two discounting rates.</li>
            <li>
              Use the following interpolation formula:
              <div className="bg-gray-200 p-4 rounded mt-2">
                LR + [(NPV at LR) ÷ (NPV at LR - NPV at HR)] × (HR - LR)
              </div>
              <p className="mt-2">Or</p>
              <div className="bg-gray-200 p-4 rounded mt-2">
                LR + [(PV at LR - CI) ÷ (PV at LR - PV at HR)] × (HR - LR)
              </div>
            </li>
          </ol>
          <p className=" mt-4">
            Where:
            <ul className="list-disc list-inside mt-2">
              <li><strong>LR</strong> = Lower Rate</li>
              <li><strong>HR</strong> = Higher Rate</li>
              <li><strong>CI</strong> = Capital Investment</li>
            </ul>
          </p>
        </section>
      </div>
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

export default IrrCalculator;
