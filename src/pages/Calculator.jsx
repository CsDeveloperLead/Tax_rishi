import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const data = [
    { title: 'SIP ', description: 'Calculate how much you need to save or how much you will accumulate with your SIP', link: '/sip' },
    { title: 'SWP ', description: 'Calculate your final amount with Systematic Withdrawal Plans (SWP)', link: '/swp' },
    { title: 'Mutual Fund Returns ', description: 'Calculate the returns on your mutual fund investments', link: '/mutual-fund' },
    { title: 'PPF ', description: 'Calculate your returns on Public Provident Fund (PPF)', link: '/ppf' },
    { title: 'EPF ', description: 'Calculate returns for your Employee’s Provident Fund (EPF)', link: '/epf' },
    { title: 'FD ', description: 'Check returns on your fixed deposits (FDs) without any hassle', link: '/fd' },
    { title: 'EMI ', description: 'Calculate your Equated Monthly Installment (EMI) for loans', link: '/emi' },
    { title: 'CAGR ', description: 'Calculate the Compound Annual Growth Rate (CAGR) of your investments', link: '/cagr' },
    { title: 'Gratuity ', description: 'Estimate the gratuity amount based on your tenure and salary', link: '/gratuity' },
    { title: 'HRA ', description: 'Calculate House Rent Allowance (HRA) exemption based on your rent and salary', link: '/hra' },
    { title: 'NPS ', description: 'Estimate the final amount and pension from your National Pension Scheme (NPS) contributions', link: '/nps' },
    { title: 'Simple Interest ', description: 'Calculate simple interest on your principal investment', link: '/simple-interest' },
    { title: 'Compound Interest ', description: 'Calculate compound interest and growth on your investment', link: '/compound-interest' },
    { title: 'Retirement ', description: 'Estimate how much you need to save for retirement', link: '/retirement' },
    { title: 'GST ', description: 'Calculate Goods and Services Tax (GST) on your transactions', link: '/gst' },
    { title: 'IRR ', description: 'Calculate Internal Rate of return (IRR) on the cash flow', link: '/irr' },

  ];
  

function CalculatorGrid() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <div className="px-4 md:px-20 font-montserrat mt-10">
    <div className="flex justify-center text-4xl font-bold my-6">
        Calculators
    </div>
    <div className="grid grid-cols-2 gap-6 md:gap-10 p-2 md:p-4 sm:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => (
        
        <div key={index} className="group bg-white border h-44 md:h-40 border-gray-200 rounded-lg p-4 md:p-6 shadow-md flex hover:bg-main hover:scale-105 duration-500 ">
            <Link to={item.link} >
          <h3 className="text-base md:text-xl font-bold mb-2 group-hover:text-white">{item.title}</h3>
          <p className="text-gray-600 text-[12px] group-hover:text-white ">{item.description}</p>
          </Link>
        </div>
        
      ))}
    </div>
    </div>
  );
}

export default CalculatorGrid;
