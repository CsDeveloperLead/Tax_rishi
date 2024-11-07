import { Link } from 'react-router-dom';

const MsmeDocument = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat">
      <div className="w-[80%] flex flex-col gap-2">
        <h1 className="text-4xl font-bold mb-2">
          Documents Required for MSME Registration in India
        </h1>

        <p className="mb-4">
          For promoting entrepreneurship, the government provides special
          benefits to small businesses in the form of subsidies and incentives.
          Also, banks give loans at concessional rates to set up these
          businesses. For availing those, the small businesses need to register
          under the Micro, Small and Medium Enterprises (MSMEs) Act.
        </p>

        <p className="mb-4">
          If a business is registered under the MSMEs Act, it can avail several
          benefits like cheaper bank loans, tax benefits, preference during the
          tender process, and access to various schemes and incentives of the
          government.
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          MSME Enterprises
        </h2>
        <p className="mb-4">
          The old MSME classification was based on the criteria of investment in
          plant and machinery or equipment. Under the Aatmanirbhar Bharat
          Abhiyan (ABA), the government revised the MSME classification by
          inserting composite criteria of both investment and annual turnover.
        </p>

        <h1 className="text-4xl font-bold mb-6">Existing MSME Classification</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-200">Sector</th>
              <th className="p-3 border border-gray-200">Criteria</th>
              <th className="p-3 border border-gray-200">Micro</th>
              <th className="p-3 border border-gray-200">Small</th>
              <th className="p-3 border border-gray-200">Medium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-gray-200">Manufacturing</td>
              <td className="p-3 border border-gray-200">Investment</td>
              <td className="p-3 border border-gray-200">&lt; Rs.25 lakh</td>
              <td className="p-3 border border-gray-200">&lt; Rs.5 crore</td>
              <td className="p-3 border border-gray-200">&lt; Rs.10 crore</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200">Services</td>
              <td className="p-3 border border-gray-200">Investment</td>
              <td className="p-3 border border-gray-200">&lt; Rs.10 lakh</td>
              <td className="p-3 border border-gray-200">&lt; Rs.2 crore</td>
              <td className="p-3 border border-gray-200">&lt; Rs.5 crore</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-lg text-gray-700 mb-6 mt-6">
        These lower limits were killing the urge to grow as businesses were unable to scale further. 
        Also, there was a long-pending demand for the revision of the MSME classification so that they 
        could expand their operations while continuing to avail MSME benefits.
      </p>
      
      <p className="text-lg text-gray-700 mb-6">
        Thus, under the <strong>Aatmanirbhar Bharat Abhiyan (ABA)</strong>, the government revised the MSME 
        classification by introducing composite criteria of both investment and annual turnover. 
        Moreover, the distinction between manufacturing and services sectors under the MSME definition was removed, 
        ensuring parity between the sectors.
      </p>
      
      <h3 className="text-xl font-semibold mb-4">Revised MSME Classification</h3>
      
      <p className="text-lg text-gray-700 mb-6">
        The revised MSME classification will now consider both investment and annual turnover to decide whether a business qualifies as an MSME:
      </p>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-4 border border-gray-300 bg-gray-100">Criteria</th>
            <th className="px-4 py-4 border border-gray-300 bg-gray-100">Micro</th>
            <th className="px-4 py-4 border border-gray-300 bg-gray-100">Small</th>
            <th className="px-4 py-4 border border-gray-300 bg-gray-100">Medium*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-4 border border-gray-300">Investment & Annual Turnover</td>
            <td className="px-4 py-4 border border-gray-300">&lt; Rs.1 crore &amp; &lt; Rs.5 crore</td>
            <td className="px-4 py-4 border border-gray-300">&lt; Rs.10 crore &amp; &lt; Rs.50 crore</td>
            <td className="px-4 py-4 border border-gray-300">&lt; Rs.50 crore &amp; &lt; Rs.250 crore</td>
          </tr>
        </tbody>
      </table>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Registration Process
        </h3>
        <p className="mb-4">
          An Aadhar number is compulsory for registering under the MSME Act. Any
          enterprise that qualifies under the definition of MSME can obtain
          Udyam Registration under the MSME Act by filing an application on the
          Udyam Registration Portal. The registration process is entirely
          online, and the registration certificate has lifetime validity unless
          cancelled.
        </p>
        <p className="mb-4">
          {" "}
          Udyam Registration is a completely online registration process and
          once the form is filled and submitted on the Udyam Registration
          portal, the registration certificate will be issued after a few days.
          The Udyam Registration has lifetime validity unless cancelled.
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Documents Required for MSME Registration
        </h1>

        <p className="mb-4">
          The Udyam registration process is entirely online and does not require
          the uploading of any documents. However, before applying for Udyam
          Registration, the proprietor or owner of the enterprise is required to
          have the following documents:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Aadhar Card
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>
            For a Proprietorship Firm: The Aadhar number of the proprietor is to
            be entered in the Udyam Registration form.
          </li>
          <li>
            For a Partnership Firm: The Aadhar number of the managing partner is
            to be entered in the Udyam Registration form.
          </li>
          <li>
            For a Hindu Undivided Family (HUF): The Aadhar number of the Karta
            is to be entered in the Udyam Registration form.
          </li>
          <li>
            For a Company, Limited Liability Partnership, Cooperative Society,
            Society, or Trust: The Aadhar number of the authorized signatory or
            organization is to be entered in the Udyam Registration form.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. PAN Card
        </h2>
        <p className="mb-4">
          The PAN number of the proprietor or authorized signatory is required
          to be entered in the registration form.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. GSTIN (GST Identification Number)
        </h2>
        <p className="mb-4">
          If the enterprise is required to be registered under GST law, the
          GSTIN is necessary for Udyam Registration.
        </p>

        <p className="bg-gray-100 p-4 rounded-md mb-4 text-gray-700">
          <strong>Note:</strong> Having GSTIN is not compulsory for enterprises
          that do not require GST registration under the GST law. Such
          enterprises can register under MSME without having a GST registration.
          However, enterprises that are required to obtain GST registration
          under the GST regime must have GST registration for obtaining
          MSME/Udyam Registration.
        </p>

        <p className="font-semibold">
          The above documents do not need to be uploaded, but the Aadhar and PAN
          numbers of the entrepreneur must be entered in the registration form.
        </p>
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

export default MsmeDocument;
