import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import SideComponent from "../components/SideComponent";



// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

// Helper function to format numbers with Indian currency formatting
const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function Emi() {
  const [loanAmount, setLoanAmount] = useState(100000); // Initial loan amount
  const [interestRate, setInterestRate] = useState(10); // Annual interest rate
  const [loanTenure, setLoanTenure] = useState(1); // Loan tenure in years

  // EMI Calculation Formula
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100); // Convert annual rate to monthly rate
    const tenureInMonths = loanTenure * 12; // Convert tenure from years to months

    // EMI formula
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
      (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalAmount = monthlyEMI * loanTenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#e0e7ff", "#0062f2"],
      },
    ],
  };

  return (
    <div className="mx-4 md:mx-10 my-10 md:my-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[75%] flex flex-col gap-10">
          <div className="border h-auto md:h-[620px] flex flex-col md:flex-row bg-white p-6 gap-10  rounded-lg shadow-lg">
            <div className="w-full md:w-[65%]">
              <h2 className="text-xl font-bold mb-4">EMI Calculator</h2>

              {/* Loan Amount Slider */}
              <div className="my-8">
                <div className="flex justify-between">
                  <label className="text-gray-700 font-medium">Loan Amount</label>
                  <span className="text-main text-sm bg-[#CDD4F1] w-[140px] px-4 py-1 font-bold text-right">
                    ₹ {formatToIndianCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Interest Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label className="text-gray-700 font-medium">Rate of Interest (p.a)</label>
                  <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                    {interestRate} %
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Loan Tenure Slider */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <label className="text-gray-700 font-medium">Loan Tenure (Years)</label>
                  <span className="text-main text-sm bg-[#CDD4F1] w-[100px] px-4 py-1 font-bold text-right">
                    {loanTenure} {loanTenure === 1 ? "Year" : "Years"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Summary */}
              <div className="text-gray-700 font-medium mt-6">
                <p className="py-2">
                  Monthly EMI: <span className="font-semibold">₹{formatToIndianCurrency(monthlyEMI)}</span>
                </p>
                <p className="py-2">
                  Principal amount: <span className="font-semibold">₹{formatToIndianCurrency(loanAmount)}</span>
                </p>
                <p className="py-2">
                  Total interest: <span className="font-semibold">₹{formatToIndianCurrency(totalInterest)}</span>
                </p>
                <p className="py-2">
                  Total amount: <span className="font-bold text-main">₹{formatToIndianCurrency(totalAmount)}</span>
                </p>
              </div>

              <button className="bg-main hover:bg-blue-800 text-white font-semibold mt-4 px-6 py-2 rounded-lg">
                APPLY NOW
              </button>
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
            <p className="text-sm  md:text-base   text-justify text-gray-700 mb-4">
              The credit market in India is steadily on the rise. It is currently the 4th largest credit industry in the world, recording a CAGR of over 11% year on year. A vast majority of these advances are short-term credits such as personal loans and credit cards. Combined, these two financial products account for 78% of all credit lending in India. Loan repayments include EMIs and borrowers should consider the EMI amount to accurately plan their current and future finances.
              <br />
              <br />
              There are several EMI calculators available online; one must choose an accurate EMI calculator and learn its usage to calculate the exact EMI amount they are liable to pay for a loan.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Factors Affecting Your Due Amount
            </h2>
            <p className="text-sm  md:text-base   text-justify text-gray-700 mb-4">
              There are certain factors you need to consider while planning for applying for a loan. Based upon your financial and repayment capacity, you will be required to calculate equated monthly installments (EMI). Here are a few factors to consider-
            </p>
            <ul className="w-full list-disc list-inside">
              <li className="mb-4">Term of Loan</li>
              <p className="text-sm  md:text-base  text-justify text-gray-700 mb-4">
                A loan’s tenure may get reduced or extended. Subsequently, there will be an increase or a decrease in the EMI amount as well. Thus, considering the term of a loan is also an important factor that may affect your due amount.
              </p>
              <li className="mb-4">Rate of Interest</li>
              <p className="text-sm  md:text-base  text-justify text-gray-700 mb-4">
                The rate of interest is a vital factor that will help to assess the installment amount owed. You can compare the product and opt for one which has a lower rate of interest so that your overall repayment stays low.
              </p>
              <li className="mb-4">Amount of Loan</li>
              <p className="text-sm  md:text-base  text-justify text-gray-700 mb-4">
                Choosing the loan amount is another significant factor for determining your EMI. Based on the loan amount you choose, your equated monthly installment will be calculated accordingly.
              </p>
            </ul>

            {/* <ul className="w-full list-disc list-inside">
              <li>It will provide you with the full estimate for 1 year, 3 year and 5 year investment periods.</li>
              <li>It enables you to do future financial planning based on the estimated returns.</li>
              <li>You don’t need to be a subject expert to be able to use this calculator. It’s simple to use, and even someone who hasn’t used it before will not find it challenging to navigate.</li>
            </ul> */}

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How can an online EMI calculator help you?
            </h2>
            <p className="text-sm  md:text-base text-justify text-gray-700 mb-4">
              The number of credit accounts is growing at an even higher CAGR of 28% and has reached 107 million accounts at the end of FY18.
            </p>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              Regardless of the type of loan you want to avail of, be it a secured or unsecured advance, it is paramount that you know how much monthly instalment you have to make before you avail it. That is where an EMI calculator in India can be immensely helpful.
            </p>
            <ul className="w-full list-disc list-inside">
              <li>It helps you get an accurate estimate of your EMI amount so that you can plan your finances accordingly. Make sure that your debt-to-income ratio is below 50% to maximize your chances of loan approval.</li>
              <li>It eliminates any chance of a miscalculation, providing you with an accurate estimate every time.</li>
              <li>It is highly specific for each type of loan. The EMI breakup of a home loan, for example, is different from that of a personal loan.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              The formula to determine loan EMI amount
            </h2>
            <p className="text-sm  md:text-base   text-justify text-gray-700 mb-4">
              There is a specific formula that Groww uses to compute the EMI amount for a loan.
            </p>
            <p className="text-sm  md:text-base   text-justify text-gray-700 mb-4">
              EMI = {'[P x R x (1+R) ^N]/ [(1+R) ^ (N-1)]'}, where –
            </p>
            <ul className="w-full list-disc list-inside">
              <li>P is the principal amount</li>
              <li>R is the rate of interest</li>
              <li>N is the loan tenure</li>
            </ul>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              This is the standardized formula used by any online loan calculator. Some variables may be added based on the type of loan.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Types Of EMI Calculator
            </h2>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              There are numerous types of EMI Calculators that you can use on Groww to calculate your equated monthly installments for home loans, personal loans, car loans, etc.
            </p>
            <h3 className="text-xl font-semibold text-main mt-8 mb-4">
              Home Loan EMI Calculator
            </h3>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              Home loans usually have a huge loan principal amount and a long tenure. It requires strategic planning for its repayment. You can use the Home Loan EMI Calculator of Groww to calculate your EMI. It is a user-friendly designed calculator that can help you calculate and assess your home loan EMIs immediately. All you need to do is enter your loan amount, loan tenure, and rate of interest and the results will be calculated instantly.
            </p>
            <h3 className="text-xl font-semibold text-main mt-8 mb-4">
              Car Loan EMI Calculator
            </h3>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              Buying a car is one of the major investments one can make. You may require a car loan to fund this substantial investment. Often, a car loan’s EMI is supposed is to be repaid with due interest within a stipulated time to the lender. On failure, your car may be taken away and put up for auction to recover the balance amount left to be paid. Thus, to calculate a precise EMI amount that you can afford to pay comfortably, you can use the Car Loan EMI Calculator of Groww. You just need to enter your loan amount, interest rate, and loan tenure, and you will get the monthly EMI amount instantly.
            </p>
            <h3 className="text-xl font-semibold text-main mt-8 mb-4">
              Personal Loan EMI Calculator
            </h3>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              Personal loans are mostly taken to serve multiple purposes like medical emergency, vacation, relocation, wedding, home renovation, etc. Since they are an unsecured loan, they have a relatively higher interest rate and a shorter tenure. You can use the Personal Loan EMI Calculator of Groww to assess the loan and EMI amount that you can pay with ease. By entering your loan amount, rate of interest, and loan tenure, you can calculate your EMI.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Education Loan EMI Calculator
            </h3>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              Affording good education in recent times has been quite a task for parents as its cost has risen at a rapid pace. To finance this cost, an education loan is one of the best options a parent can opt for. Such loans can be taken for a student’s education within the country or even overseas. The loan’s EMI is required to be repaid with interest after a moratorium period. By entering the loan amount, rate of interest, and loan tenure in the Education Loan EMI Calculator, you can calculate the sum of the EMI amount which you need to repay.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Loan against Property EMI Calculator
            </h3>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              A loan against property is a type of secured loan that one can avail against a property owned by them. Be it residential, commercial, or land, any property can be mortgaged with the lender against a loan. For calculating the EMI amount which you can repay without any financial strain, you can use a Loan against Property EMI Calculator.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to use Groww online EMI calculator?
            </h2>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              The Groww online calculator is easy-to-use and takes just a few seconds of your time. Here’s how.
            </p>
            <ul className="w-full list-disc list-inside">
              <li>Insert the variable vis-à-vis principal, tenure and rate of interest.</li>
              <li>The calculated EMI value will be displayed immediately.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Advantages of using Groww calculator
            </h2>
            <ul className="w-full list-disc list-inside">
              <li>It is entirely free of charge. Anyone can use it at any time, as many times as they want.</li>
              <li>Our loan calculator online is 100% accurate every time.</li>
              <li>It’s fast and provides an accurate estimate instantaneously.</li>
            </ul>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              Apart from the loan EMI calculator, Groww also offers other calculators as you can see below. All of them are free to use and you can use them as many times as you want.
            </p>
            <p className="text-sm md:text-base text-justify text-black mb-4">
              “Looking to invest? Open an account with Groww and start investing in direct Mutual funds for free”
            </p>

          </div>
        </div>
        <div className="w-full md:w-[25%]">
         <SideComponent/>
        </div>
      </div>
    </div>
  );
}

export default Emi;
