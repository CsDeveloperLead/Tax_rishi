import { Link } from 'react-router-dom';

const MsmeGst = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]">
      <div className="w-[80%] flex flex-col gap-6">
        <h1 className="text-4xl font-bold">
          New MSME Act and its Effect on the Payment Cycle Under the New GST
          Returns
        </h1>

        <p className="text-base">
          The Micro, Small and Medium Enterprises Development Act (MSMED), 2006
          was enacted to support the creation and development of MSMEs. It also
          enhances their ability to compete with other domestic and larger
          foreign counterparts. The recently implemented new GST return filing
          system brought with it many changes aimed at simplifying the process
          of filing returns.{" "}
        </p>

        <p className="text-base">
          In this article, we will analyse whether the MSMED Act and the new
          return filing system together affect the payment cycle and if so,
          whether there is a possible solution to it.
        </p>

        <section className="mb-6">
          <h2 className="text-4xl font-bold mb-2">
            Background of the New GST Return Filing System
          </h2>
          <p className="text-base mb-4">
            One of the main changes that the new system brings is the increase
            in the turnover limit for classification of taxpayers for filing
            frequency:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-base">
              <strong>Small taxpayers:</strong> Having aggregate turnover up to
              Rs. 5 crores in the preceding year;
            </li>
            <li className="text-base">
              <strong>Large taxpayers:</strong> Having aggregate turnover above
              Rs. 5 crores in the preceding year;
            </li>
          </ul>
          <p className="text-base">
            All MSMEs fall under the small taxpayer category. The new GST return
            system allows small taxpayers to choose quarterly filing of returns,
            whereas the large taxpayers must file returns only on a monthly
            basis. Further, registered buyers can take the input tax credit
            (ITC) iin ANX-2 only on the basis of invoices uploaded by their
            suppliers in their corresponding ANX-1.
          </p>
        </section>

        <section className="">
          <h2 className="text-4xl font-semibold mb-2">
            Background of the MSMED Act, 2006
          </h2>
          <p className="text-base mb-4">
            The MSMED Act, 2006 specifies 45 day credit period for the recipient
            of any goods or services to pay to the MSME supplier. It is included
            to protect the interest of the MSME business. The Ministry of Micro,
            Small & Medium Enterprises (MSME) launched MSME Samadhaan on 30
            October 2017. It was launched to empower micro and small
            entrepreneurs across the country. It enables them to directly
            register their cases about delayed payments by Central
            Ministries/Departments/CPSEs/State Governments.{" "}
          </p>
        </section>

        <section className="">
        <h1 className="text-4xl font-bold mb-4">The Payment Cycle Problem</h1>
      <p className="mb-4">
        The issue arises when MSME taxpayers, who opt for quarterly filing of returns, make a supply to large taxpayers. The same is presented as follows:
      </p>
      
      <ul className="list-disc ml-4 space-y-4">
        <li>The MSME can declare the details relating to this supply anytime in the three months of the relevant quarter by the 11th of the month following the quarter.</li>
        
        <li>The recipient of the supply, on the other hand, being a large taxpayer, will claim ITC and file GST returns on a monthly basis.</li>
        
        <li>
          The recipient will want to ensure that the MSME supplier declares the invoice details on the GST portal for such supply on a timely basis. This allows them to avail ITC only after the MSME uploads the invoices.
        </li>
        
        <li>
          As a result, the recipient may choose to hold back payment of either the tax portion of the invoice or the entire invoice itself to the MSME supplier until the same is declared on the portal.
        </li>
        
        <li>
          However, the MSMED Act does not allow the recipient to hold back the payment beyond 45 days.
        </li>
        
        <li>
          This discourages large taxpayers from dealing with MSMEs unless they switch to a monthly filing frequency or upload invoices monthly, potentially causing working capital issues for MSMEs due to delayed or unavailable ITC.
        </li>
        
        <li>
          MSMEs may face additional compliance costs to maintain a system for uploading invoices regularly on a monthly basis rather than quarterly.
        </li>
        
        <li>
          It effectively obligates the MSME to opt for a monthly return filing system, defeating the objective of the new return system to simplify the return filing process.
        </li>
      </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-4xl font-semibold mb-2">
            Solution Offered & Conclusion
          </h2>
          <p className="text-base mb-4">
            One solution to this issue is the partnership of GSTN with the Trade
            Receivables Discounting System (TReDS). This helps MSMEs sell or
            discount their trade receivables, which frees up working capital
            faster. The partnership with GSTN helps authenticate invoices,
            ensuring MSMEs can sell receivables efficiently.
          </p>
          <p className="text-base mb-4">
            The quarterly return filing option simplifies compliance for MSMEs
            but might not fully resolve the payment cycle problem with large
            taxpayers. However, the partnership with TReDS offers a promising
            step forward.
          </p>
        </section>
      </div>
      <div className="w-[25%]">
        <div className="bg-[#f9f9f9] rounded-xl px-6 py-10 shadow-xl">
          <h1 className="font-bold text-2xl">BROWSE BY TOPICS</h1>
          <ul className="space-y-6 pl-4 mt-8">
            <Link to="/msme/registration">
              <li className=" font-semibold my-6">MSME Registration</li>
            </Link>
            <Link to="/msme/document">
              <li className=" font-semibold my-6">MSME Document Required</li>
            </Link>

            <Link to="/msme/scheme">
              <li className=" font-semibold my-6">MSME Schemes</li>
            </Link>
            <Link to="/msme/gst">
              <li className=" font-semibold my-6">NEW Gst Act</li>
            </Link>
            <Link to="/startup/registration">
              <li className=" font-semibold my-6">Startup Registration</li>
            </Link>
            <Link to="/startup/benefits">
              <li className=" font-semibold my-6">Startup Benefits</li>
            </Link>
            <Link to="/startup/funding">
              {" "}
              <li className=" font-semibold my-6">Startup Funding</li>
            </Link>
            <Link to="/startup/tax">
              <li className=" font-semibold my-6">Tax Exemption Eligibility</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MsmeGst;
