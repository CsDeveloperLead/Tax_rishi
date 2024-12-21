import { Link } from "react-router-dom";

const MsmeScheme = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]">
      <div className="w-[80%] flex flex-col gap-2">
        <h2 className="text-4xl font-semibold  mb-6">
          MSME Schemes – Ministry of Micro, Small and Medium Enterprises
        </h2>

        <div className="mb-6">
          <p className="text-base mb-4">
            MSME stands for Micro, Small, and Medium Enterprises. These
            industries or enterprises form the backbone of our economy and need
            assistance and protection from larger companies due to a lack of
            resources and technology. To support these enterprises, the
            government provides various schemes, rebates, and counseling.
          </p>
          <h2 className="text-4xl font-semibold  mb-6">
            Threshold for Enterprises to be Called as Micro, Small or Medium
          </h2>

          <p className="text-base mb-4">
            The existing MSME classification was based on investment in plant
            and machinery or equipment. In order to enjoy the MSME benefits,
            businesses had to limit their investment to the thresholds mentioned
            below:
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">
            Existing MSME Classification
          </h3>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Sector
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Criteria
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Micro
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Small
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Medium
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Manufacturing
                </td>
                <td className="border border-gray-300 px-4 py-2">Investment</td>
                <td className="border border-gray-300 px-4 py-2">
                  {"<"} Rs.25 lakh
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {"<"} Rs.5 crore
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {"<"} Rs.10 crore
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Services</td>
                <td className="border border-gray-300 px-4 py-2">Investment</td>
                <td className="border border-gray-300 px-4 py-2">
                  {"<"} Rs.10 lakh
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {"<"} Rs.2 crore
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {"<"} Rs.5 crore
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">
            Revised MSME Classification
          </h3>
          <p className="text-base mb-4">
            Under the Atmanirbhar Bharat Abhiyan, the government revised the
            MSME classification by introducing composite criteria of both
            investment and annual turnover. Additionally, the distinction
            between manufacturing and services sectors has been removed,
            creating parity between them.
          </p>
          <p className="text-base mb-4">
            The revised MSME classification now considers both investment and
            annual turnover to determine the MSME status:
          </p>
          <table className="table-auto w-full border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Criteria
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Micro
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Small
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Medium*
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Investment & Annual Turnover
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  {"< "}Rs.1 crore & {"< "}Rs.5 crore
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {" "}
                  {"< "}Rs.10 crore & {"< "}Rs.50 crore
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {"< "}Rs.50 crore & {"< "}Rs.250 crore
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-base">
            *Further upward revision made by the government.
          </p>
          <p className="text-base mt-4">
            This revision allows businesses to scale and increases healthy
            competition among businesses.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">
            MSME Schemes Launched by the Government
          </h3>
          <p className="text-base mb-4">
            The government has launched several schemes to support MSMEs in
            their growth and development. Below are some of the key schemes:
          </p>

          <div className="mb-4">
            <h4 className="text-2xl mb-2 font-semibold">
              Udyog Aadhaar Memorandum
            </h4>
            <p className="text-base mb-4">
              Aadhaar card is a 12-digit number given to individuals by the
              government. This scheme simplifies the process of availing credit,
              loans, and subsidies for MSMEs. Registration is mandatory and can
              be done online or offline.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-2xl mb-2 font-semibold">
              Zero Defect Zero Effect
            </h4>
            <p className="text-base mb-4">
              This scheme encourages manufacturing for export that meets high
              standards to avoid rejection or return. It offers rebates and
              concessions for goods that are exported.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-2xl mb-2 font-semibold">
              Quality Management Standards & Quality Technology Tools
            </h4>
            <p className="text-base mb-4">
              This scheme helps MSMEs understand and implement quality standards
              and new technologies. Various activities, seminars, and campaigns
              are organized to educate businesses on the latest technologies.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-2xl mb-2 font-semibold">
              Grievance Monitoring System
            </h4>
            <p className="text-base mb-4">
              MSMEs can register under this scheme to address complaints and
              monitor their status. If a business owner is unsatisfied with the
              outcome, they can reopen complaints for further action.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-2xl mb-2 font-semibold">Incubation</h4>
            <p className="text-base mb-4">
              This scheme helps innovators implement new designs, ideas, or
              products. The government finances 75% to 80% of the project cost
              to promote innovation.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-2xl mb-2 font-semibold">
              Credit Linked Capital Subsidy Scheme
            </h4>
            <p className="text-base mb-4">
              This scheme offers capital subsidies to MSMEs to upgrade their old
              technology and replace it with newer, more efficient ones. MSMEs
              can approach banks directly to avail of this subsidy.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-2xl mb-2 font-semibold">
              Women Entrepreneurship
            </h4>
            <p className="text-base mb-4">
              This scheme is designed specifically for women who want to start
              their own businesses. It offers capital, training, counseling, and
              delivery techniques to help women manage and expand their
              businesses.
            </p>
          </div>

          <p className="text-base mt-4">
            The government has launched many other schemes to support MSMEs. To
            learn more about the MSME schemes, check the official government
            website.
          </p>
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

export default MsmeScheme;
