import img1 from "../assets/start1.png";
import img2 from "../assets/start2.png";
import img3 from "../assets/start3.png";
import img4 from "../assets/start4.png";
import img5 from "../assets/start5.png";
import img6 from "../assets/start6.png";
import { Link } from 'react-router-dom';


const MsmeRegistration = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat">
      <div className="w-[80%] flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">
            MSME Registration In India: Procedure, Documents Required
          </h1>
          <p className="text-gray-600 text-base leading-8">
            MSME industries are the backbone of the economy. They are also known
            as Small Scale Industries (SSIs). The government of India provides
            an MSME registration to the industries classified by the government
            as Micro, Small and Medium Enterprises (MSME) in India. The MSME
            registration helps MSMEs to obtain various benefits provided by the
            government for their establishment and growth.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">What is MSME Classification?</h1>
          <p className="text-gray-600 text-base leading-8">
            nitially, when the government introduced the MSME registration in
            2006, the MSME classification was based on the investment criteria
            in plant and machinery or equipment. The government revised the MSME
            classification by inserting annual investment and annual criteria.
            Also, the distinction between the manufacturing and the services
            sectors under the MSME definition was removed.
          </p>
          <p className=" font-bold text-black">
            The following is the current revised MSME classification, where the
            investment and annual turnover are to be considered for deciding if
            an entity is considered as an MSME:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th
                  colSpan={4}
                  className="py-3 px-4 text-center font-semibold text-gray-800 border-b"
                >
                  Revised MSME Classification
                </th>
              </tr>
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-r border-gray-300">
                  Criteria
                </th>
                <th className="py-3 px-4 text-center font-semibold text-gray-700 border-r border-gray-300">
                  Micro
                </th>
                <th className="py-3 px-4 text-center font-semibold text-gray-700 border-r border-gray-300">
                  Small
                </th>
                <th className="py-3 px-4 text-center font-semibold text-gray-700">
                  Medium*
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-4 font-medium text-gray-700 border-r border-gray-300">
                  Investment & Annual Turnover
                </td>
                <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-300">
                  &lt; Rs.1 crore &amp; &lt; Rs.5 crore
                </td>
                <td className="py-4 px-4 text-center text-gray-700 border-r border-gray-300">
                  &lt; Rs.10 crore &amp; &lt; Rs.50 crore
                </td>
                <td className="py-4 px-4 text-center text-gray-700">
                  &lt; Rs.50 crore &amp; &lt; Rs.250 crore
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">
            What is MSME Udyam Registration?{" "}
          </h1>
          <p className="text-gray-600 text-base leading-8">
            <strong>
              MSME registration is also called Udyam registration.
            </strong>{" "}
            The entities that fulfill the MSME classification can apply for MSME
            registration from the government portal, the Udyam portal. The MSME
            registration is entirely online and can be obtained from the
            <a
              href="https://udyamregistration.gov.in/"
              className="text-main font-semibold"
            >
              {" "}
              Udyam registration portal{" "}
            </a>
            . It is not mandatory for MSMEs to obtain this registration, but it
            is beneficial to get one’s business registered under this because it
            provides a lot of benefits in terms of taxation, setting up the
            business, credit facilities, loans, etc.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">MSME Registration Eligibility </h1>
          <p className="text-gray-600 text-base leading-8">
            <strong>
              All manufacturing, service industries, wholesale, and retail trade
              that fulfil the revised MSME classification criteria of annual
              turnover and investment can apply for MSME registration.
            </strong>{" "}
            Thus, the MSME registration eligibility depends on an entity’s
            annual turnover and investment. The following entities are eligible
            for MSME registration:
          </p>
          <ul className="space-y-4 list-disc pl-4">
            <li>Individuals, startups, business owners, and entrepreneurs</li>
            <li>Private and public limited companies</li>
            <li>Sole proprietorship</li>
            <li>Partnership firm</li>
            <li>Limited Liability Partnerships (LLPs)</li>
            <li>Self Help Groups (SHGs)</li>
            <li>Co-operative societies</li>
            <li>Trusts</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl leading-[40px] font-bold">
            Documents Required for MSME Registration{" "}
          </h1>
          <p className="text-blxk text-base leading-8">
            <strong>The MSME registration documents are as follows:</strong>{" "}
          </p>
          <ul className="space-y-2 list-disc pl-4 font-bold">
            <li>Aadhaar card</li>
            <li>PAN card</li>
          </ul>
          <p className="text-blxk text-base leading-8">
            <strong>There are no MSME registration fees</strong> and it does not
            require proof of documents. PAN and GST-linked details on investment
            and turnover of enterprises will be taken automatically by the Udyam
            Registration Portal from the Government databases since the portal
            is integrated with Income Tax and GSTIN systems.
          </p>
          <p className="text-blxk text-base leading-8">
            <strong>
              GST registration is not compulsory for enterprises that do not
              require a GST registration.
            </strong>{" "}
            However, enterprises that mandatorily need to obtain GST
            registration under the GST law, must enter their GSTIN for obtaining
            the MSME Registration or{" "}
            <a
              href="https://udyamregistration.gov.in/"
              className="text-main font-semibold"
            >
              {" "}
              Udyam registration portal{" "}
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl leading-[40px] font-bold">
            How to Apply for MSME Registration on Udyam Registration Portal?{" "}
          </h1>
          <p className="text-base leading-8">
            <strong>
              The MSME registration process is entirely online. MSME online
              registration is to be done on the government portal of{" "}
              <a
                href="https://udyamregistration.gov.in/"
                className="text-main font-semibold"
              >
                udyamregistration.gov.in{" "}
              </a>
              .
            </strong>{" "}
            MSME registration online can be done under the following two
            categories in the portal –
          </p>
          <ol className="space-y-4 pl-4">
            <li>
              <span className="font-bold mr-1">1.</span> For New Entrepreneurs
              who are not Registered yet as MSME or those with EM-II and
            </li>
            <li>
              <span className="font-bold mr-1">2.</span> For those having
              registration as UAM and For those already having registration as
              UAM through Assisted filing
            </li>
          </ol>
          <p className="text-xl my-2">
            <strong>
              For New Entrepreneurs who are not Registered yet as MSME or those
              with EM-II{" "}
            </strong>
          </p>
          <div>
            <p className="">
              <span className="font-bold mr-2">Step 1:</span>
              New entrepreneurs and entrepreneurs having EM-II registration need
              to click the button “For New Entrepreneurs who are not Registered
              yet as MSME or those with EM-II” shown on the home page of Udyam
              Registration Portal.
            </p>

            <div className="my-6">
              <img src={img1} alt="" />
            </div>
          </div>
          <div>
            <p className="">
              <span className="font-bold mr-2">Step 2:</span>
              On the next page, enter the Aadhaar number and the name of the
              entrepreneur and click on the “Validate and Generate OTP Button”.
              Once this button is clicked and OTP is received and entered, the
              PAN Verification page opens.{" "}
            </p>

            <div className="my-6">
              <img src={img2} alt="" />
            </div>
          </div>
          <div>
            <p className="">
              <span className="font-bold mr-2">Step 3:</span>
              The entrepreneur must enter the “Type of Organisation” and the PAN
              Number and click on the “Validate PAN” button. The portal gets the
              PAN details from the government databases and validates the PAN
              number of the entrepreneur.{" "}
            </p>
            <div className="my-6">
              <img src={img3} alt="" />
            </div>
          </div>
          <div>
            <p className="">
              <span className="font-bold mr-2">Step 4:</span>
              After verification of PAN, the Udyam Registration form will
              appear, and the entrepreneurs need to fill in their personal
              details and details of their enterprise.{" "}
            </p>
            <div className="my-6">
              <img src={img4} alt="" />
            </div>
          </div>
          <div>
            <p className="">
              <span className="font-bold mr-2">Step 5:</span>
              Enter the investment and turnover details, select the declaration,
              and click on the “Submit and Get Final OTP” button. The OTP is
              sent, and after entering the OTP and submitting the form, the
              Udyam Registration Certificate will be sent through email.
              Entrepreneurs can also find out the MSME registration status from
              the Udyam Registration Portal.{" "}
            </p>
            <div className="my-6">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">
            Registration For Entrepreneurs Already Having UAM
          </h1>
          <p className="text-gray-600 text-base leading-8">
            For those already having UAM registration, they need to click the
            button “For those having registration as UAM” or “For those already
            having registration as UAM through Assisted filing” shown on the
            home page of the government portal. This will open a page where
            Udyog Aadhaar Number is to be entered, and an OTP option should be
            selected.{" "}
          </p>
          <p className="text-gray-600 text-base leading-8">
            The options provided are to obtain OTP on mobile as filled in UAM or
            obtain OTP on email as filled UAM. After choosing the OTP Options,
            “Validate and Generate OTP” is to be clicked. After entering OTP,
            registration details are to be filled on the MSME registration form,
            and Udyam registration will be complete.{" "}
          </p>
          <div className="my-6">
            <img src={img6} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">MSME Registration Fees</h1>
          <p className="text-gray-600 text-base leading-8">
            There are no fees charged by the government for MSME registration.
            It is free of cost on the official website, i.e. Udyam Portal.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">MSME Registration Certificate</h1>
          <p className="text-gray-600 text-base leading-8">
            The Ministry of MSME issues an e-certificate known as the Udyam
            Registration Certificate to MSMEs in India. The Udyam registration
            certificate is known as the MSME registration certificate. The
            entrepreneurs receive the MSME registration certificate upon
            completion of the MSME registration process. The certificate will
            contain a QR Code, from which the enterprise details can be
            accessed.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">MSME Registration Number</h1>
          <p className="text-gray-600 text-base leading-8">
            An enterprise having an MSME registration is known as Udyam, and the
            permanent identity number assigned to by the Ministry of MSME is
            known as the ‘Udyam/MSME Registration number’. The MSME Registration
            Certificate will contain the 19-digit MSME/Udyam Registration
            Number.{" "}
          </p>{" "}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">MSME Registration Status</h1>
          <p className="text-gray-600 text-base leading-8">
          Below is the process to check MSME Registration Status:
          </p>{" "}
          <ul className="space-y-4 list-disc ml-4">
            <li>Visit the Udyam registration portal.</li>
            <li>Click on the ‘Print/Verify’ option and click on the ‘Verify Udyam Registration Number’ option.</li>
            <li>Enter the ‘Reference Number’, enter the captcha code and click on the ‘Verify’ button. </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">MSME Registration Certificate Download </h1>
          <p className="text-gray-600 text-base leading-8">
          Below is the process to download the MSME Registration Certificate:
          </p>{" "}
          <ul className="space-y-4 list-disc ml-4">
            <li>Visit the Udyam registration portal.</li>
            <li>Click the ‘Print/Verify’ option and select the ‘Print Udyam Certificate’ option.</li>
            <li>Enter the ‘Udyam Registration Number’, ‘Mobile’, choose the OTP option and click on the ‘Validate & Generate OTP’ button.  </li>
            <li>Enter the OTP received on the mobile/email and click on the ‘Validate OTP and Login’ button.  </li>
            <li>After logging in, take a printout of the Udyam registration certificate.  </li>
          </ul>
        </div>

        <div className="">
      <h2 className="text-4xl font-bold mb-4">MSME Registration Benefits</h2>
      <p className="text-base mb-4">Below listed are the MSME registration benefits:</p>

      <ul className="list-disc pl-4 space-y-4">
        <li>
          Due to MSME Registration India, bank loans become cheaper as the interest rate is very low, around 1-1.5%, much lower than interest on regular loans.
        </li>
        <li>
          Allows credit for minimum alternate tax (MAT) to be carried forward for up to 15 years instead of 10 years.
        </li>
        <li>
          Once registered, the cost of getting a patent or setting up the industry reduces as many rebates and concessions are available.
        </li>
        <li>
          MSME registration helps to acquire government tenders easily as the Udyam Registration Portal is integrated with the Government e-Marketplace and various other State Government portals.
        </li>
        <li>
          One Time Settlement Fee for non-paid amounts of MSME.
        </li>
        <li>
          MSME registration helps in availing benefits of government schemes such as the Credit Guarantee Scheme, Credit Linked Capital Subsidy Scheme, Public Procurement Policy, Protection against delayed payments, etc.
        </li>
        <li>
          Eligible for priority sector lending from banks.
        </li>
        <li>
          Benefit of a government security deposit waiver for participating in e-tenders.
        </li>
        <li>
          Allows adding any number of activities, including service or manufacturing, in one MSME registration.
        </li>
        <li>
          Barcode registration subsidy.
        </li>
        <li>
          Exemption scheme from direct taxes.
        </li>
        <li>
          ISO certification fees reimbursement.
        </li>
        <li>
          Electricity bills concession.
        </li>
        <li>
          Special consideration in international trade fairs.
        </li>
      </ul>

      <h3 className="text-4xl font-bold text-gray-800 mt-6 mb-4">How to check MSME registration by name?</h3>
      <p className=" mb-4">
        You cannot check the MSME registration number by name. However, you can retrieve your MSME registration number by following the below process:
      </p>

      <ol className="list-decimal pl-4 space-y-4">
        <li>Visit the Udyam Registration Portal.</li>
        <li>Click on the ‘Forgot Udyam/UAM No.’ option under ‘Print/Verify’ on the homepage.</li>
        <li>Choose the registration option.</li>
        <li>Choose the OTP option.</li>
        <li>Enter the mobile/email address.</li>
        <li>Click on the ‘Validate & Generate OTP’ button.</li>
        <li>Enter the OTP. The MSME registration number will be displayed.</li>
      </ol>
    </div>


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

export default MsmeRegistration;
