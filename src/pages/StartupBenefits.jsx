import { Link } from 'react-router-dom';

const StartupBenefits = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]">
      <div className="w-[80%] flex flex-col gap-2">
      <h1 className="text-4xl font-bold mb-2">Benefits of the Startup India Program</h1>
      
      <p className="mb-4">
        The Economic Survey of India 2015-16 states that there are more than 19,000 startups in the country; with a total of eight startups belonging in the fabled ‘Unicorn’ club (valued at $1 million and upwards). The government’s ‘Startup India’ program was launched in the year 2016 to ensure that the growing number of such startups in the country have the right resources to grow. If you are a startup; or are thinking of starting up on your own, this initiative can help you immensely in furthering your business.
      </p>

      <h2 className="text-4xl font-bold text-[#14598D] mb-4">What are startups?</h2>
      <p className="mb-4">
        Loosely put, a startup is a young venture that is just beginning to develop. A startup is primarily designed to grow and develop at a rapid pace. It usually refers to a technology-oriented company with a high growth potential.
      </p>
      <p className="mb-4">
        The Department of Industrial Policy & Promotion defines a startup as any entity, incorporated or registered in India, that:
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#14598D]">
        <li>Has not yet completed a period of ten years from the date of incorporation/registration.</li>
        <li>Is a private limited company or registered as a partnership firm or a limited liability partnership.</li>
        <li>Has an annual turnover not exceeding Rs. 100 crore for any of the financial years since incorporation/registration.</li>
        <li>
          Is working towards innovation, development, or improvement of products or processes or services, or is a scalable business model with high potential for employment generation or wealth creation.
        </li>
      </ul>

      <p className="mt-4 mb-4">
        <strong>Note:</strong> An entity formed by splitting up or reconstruction of an existing business shall not be considered a ‘Startup’. Also, an entity will not be called a startup after:
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#14598D]">
        <li>Completion of ten years from the date of its incorporation/registration, or</li>
        <li>Achieving turnover in any previous year more than Rs. 100 crore</li>
      </ul>

      <h3 className="text-2xl font-semibold text-[#14598D] mt-6 mb-2">Benefits for Startups</h3>
      <p className="mb-4">If your venture qualifies as a ‘startup’, you can avail of the following benefits:</p>

      <h4 className="text-2xl font-semibold text-[#14598D] mt-6 mb-2">1. Financial Benefits</h4>
      <p className="mb-4">
        Startups will get an 80% rebate on patent costs. When a startup applies for a patent, the government will aid in funding the defense of the patent. The government also pays the fees of the facilitator to help obtain the patent, making the process of patent registration and protection of Intellectual Property Rights (IPRs) faster and simpler.
      </p>

      <h4 className="text-2xl font-semibold text-[#14598D] mt-6 mb-2">2. Registration Benefits</h4>
      <p className="mb-4">
        The government launched a mobile app on 1 April 2016 along with a portal to allow companies to register in a day. A single point of contact has been set up for all registration-based queries at the Startup India hub, including a single-window clearance for all approvals and registrations.
      </p>

      <h4 className="text-2xl font-semibold text-[#14598D] mt-6 mb-2">3. Income Tax Benefits</h4>
      <p className="mb-4">
        Startups are eligible for Income Tax exemption for the first three years post registration under the scheme. However, this benefit can be claimed only after obtaining a certificate from the Inter-Ministerial Board. Additionally, if money is invested in a fund of funds, startups can avail tax benefits on capital gains.
      </p>

      <div className="bg-gray-100 p-4 rounded-md my-6">
        <h4 className="text-2xl font-semibold text-[#14598D] mb-2">Plan Early and Get ahead for next year’s savings</h4>
        <p className="text-gray-700">
          Use our Tax Calculator to get your tax estimates in minutes as per the new budget.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Calculate Now</button>
      </div>

      <h4 className="text-2xl font-semibold text-[#14598D] mt-6 mb-2">4. Special Benefits</h4>
      <ul className="list-disc list-inside space-y-2 text-[#14598D]">
        <li>Manufacturing startups are exempt from ‘prior experience’ or ‘turnover’ criteria for public procurement.</li>
        <li>Guaranteed funds through National Credit Guarantee Trust Company or SIDBI over 4 years.</li>
        <li>No inspection for the first three years regarding labor laws.</li>
        <li>Self-compliance and self-certify under 3 Environment Laws.</li>
        <li>Faster closure of business – within 90 days.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-[#14598D] mt-6 mb-2">Register for Startup India with ClearTax</h3>
      <p className="mb-4">
        The benefits of this scheme are considerable, and it&apos;s worth exploring if you meet the eligibility criteria. Our experts at ClearTax can help you register for Startup India in a seamless and hassle-free manner, so you can focus on building your startup.
      </p>

      <p className="mb-4 font-semibold">
        Your startup dream is calling! Get started with ClearTax today.
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
  )
}

export default StartupBenefits
