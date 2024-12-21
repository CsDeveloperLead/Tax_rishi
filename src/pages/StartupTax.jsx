import { Link } from "react-router-dom";
const StartupTax = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat text-[#14598D]">
      <div className="w-[80%] flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">
            Startup India: Eligibility, Tax Exemptions and Incentives{" "}
          </h1>
          <p className=" text-base leading-8">
            Prime Minister Narendra Modi proclaimed the Startup India campaign
            in 2016 to boost entrepreneurship in India. The action plan aimed at
            promoting bank financing for startups, simplifying the incorporation
            of the startup process and grant of various tax exemptions and other
            benefits to startups.
          </p>
          <p className=" text-base leading-8">
            But all the benefits and exemptions are available to the startups
            only if they come under the criteria of an ‘Eligible Startup’.{" "}
          </p>
          <p className=" text-base leading-8">
            So first let’s understand the conditions to be met to qualify as an
            “Eligible Startup”.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">
            Eligibility for Startup India
          </h1>
          <p className=" text-base leading-8">
            As per the Startup India Action plan, the followings conditions must
            be fulfilled in order to be eligible as Startup :
          </p>
          <ul className="space-y-4 list-disc ml-4">
            <li>
              Has not yet completed a period of ten years from the date of
              incorporation/registration.
            </li>
            <li>
              Is a private limited company or registered as a partnership firm
              or a limited liability partnership.
            </li>
            <li>
              Has an annual turnover not exceeding Rs. 100 crore for any of the
              financial years since incorporation/registration.
            </li>
            <li>
              Is working towards innovation, development or improvement of
              products or processes or services, or if it is a scalable business
              model with a high potential of employment generation or wealth
              creation.
            </li>
            <li>
              It is not formed by splitting up or reconstructing a business
              already in existence.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-6">Tax Exemptions for Eligible Startups under the Startup India Program</h1>

      {/* 3-Year Tax Holiday */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">3-Year Tax Holiday in a Block of Seven Years</h2>
        <p className="text-[#14598D]">
          Startups incorporated between April 1, 2016, and March 31, 2021, were initially eligible for this scheme. The eligibility has been extended to March 31, 2022. Startups can receive a 100% tax rebate on profit for a period of three years within a block of seven years, provided that their annual turnover does not exceed Rs. 25 crores in any financial year. This benefit aims to support startups with their working capital needs during initial operations.
        </p>
      </div>

      {/* Exemption from Tax on Long-term Capital Gains */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Exemption from Tax on Long-term Capital Gains</h2>
        <p className="text-[#14598D]">
          Section 54EE of the Income Tax Act allows eligible startups to exempt long-term capital gains if these gains are reinvested in a government-notified fund within six months of asset transfer. The maximum amount that can be invested in these specified assets is Rs. 50 lakh, and the amount must remain invested for three years. If withdrawn before three years, the exemption is revoked for that tax year.
        </p>
      </div>

      {/* Tax Exemption on Investments Above Fair Market Value */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tax Exemption on Investments Above Fair Market Value</h2>
        <p className="text-[#14598D]">
          The government provides tax exemptions on investments above fair market value for eligible startups. These investments include those made by resident angel investors, family, or non-venture capital funds. Investments by incubators above fair market value are also exempt from taxes.
        </p>
      </div>

      {/* Exemption on Investment of Long-term Capital Gain in Equity Shares */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tax Exemption to Individual/HUF on Investment of Long-term Capital Gain in Equity Shares</h2>
        <p className="text-[#14598D]">
          Under section 54GB, individuals or Hindu Undivided Families (HUFs) can receive tax exemptions on long-term capital gains from the sale of residential property, provided these gains are reinvested in eligible startups. If the capital gains are used to acquire at least 50% equity shares of the startup, tax on long-term capital gains is exempt as long as the shares are not transferred within five years. The startup must use the invested amount to acquire assets, which cannot be transferred within five years of purchase.
        </p>
      </div>

      {/* Set Off of Carry Forward Losses and Capital Gains */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Set Off of Carry Forward Losses and Capital Gains in Case of Change in Shareholding Pattern</h2>
        <p className="text-[#14598D]">
          For eligible startups, the carry forward of losses is allowed if all original shareholders who held shares with voting power during the year of the loss continue to hold them in subsequent years. Section 79 relaxes the restriction on maintaining 51% voting rights, allowing startups more flexibility in shareholding changes while retaining carry-forward loss benefits.
        </p>
      </div>

      <p className="text-sm  mt-6">
        Disclaimer: This information is for educational purposes only and does not constitute legal or tax advice. For advice, consult a tax professional or legal advisor.
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

export default StartupTax;
