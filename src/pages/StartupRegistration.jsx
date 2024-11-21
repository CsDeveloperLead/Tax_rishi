import img1 from "../assets/msme1.jpg";
import img2 from "../assets/msme2.png";
import img3 from "../assets/msme3.png";
import img4 from "../assets/msme4.png";
import img5 from "../assets/msme5.png";
import img6 from "../assets/msme6.png";
import img7 from "../assets/msme7.png";
import { Link } from "react-router-dom";
const StartupRegistration = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat">
      <div className="w-full md:w-[80%] flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl  md:text-4xl leading-[40px] font-bold">
            Startup Registration India – 7 Steps to Register your Startup
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-8">
            Startups are booming in India. The government is also supporting
            young entrepreneurs to establish startups. Startups help to boost
            the country's economy. A startup is a business that offers
            innovative products or services that provide solutions to a problem
            existing in society. A startup may also redevelop a current product
            or service into something better.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-2xl md:text-4xl leading-[40px] font-bold">Startup India</h1>
          <p className="text-gray-600 text-sm md:text-base leading-8">
            The Government of India, under the leadership of PM Narendra Modi,
            has started and promoted the Startup India initiative to develop the
            Indian economy, recognise and promote startups and attract talented
            entrepreneurs.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl leading-[40px] font-bold">
            Steps to Register Your Startup With Startup India
          </h1>
          <div className="my-6">
            <img src={img1} alt="" />
          </div>

          <div>
            <p className="">
              <span className="text-2xl md:text-3xl font-bold mr-2">
                Step 1: Incorporate your Business
              </span>
            </p>
            <p className="mb-4 mt-4">
              You must first incorporate your business as a Private Limited
              Company, Partnership firm or a Limited Liability Partnership. You
              have to follow all the normal procedures for registration of any
              business like submitting the registration application and
              obtaining the Certificate of Incorporation/Partnership
              registration.
            </p>
            <p className="mb-4">
              You can incorporate a Private Limited Company or a Limited
              Liability Partnership (LLP) by filing the registration application
              to the Registrar of Companies (ROC) of your region. You can
              establish a Partnership Firm by filing the application for
              registration of your firm with the Registrar of Firms of your
              area. You need to submit the required documents and fees to the
              Registrar of Companies or Registrar of Firms along with the
              registration application.
            </p>
          </div>
          <div>
            <p className="">
              <span className="text-2xl md:text-3xl font-bold mr-2">
                Step 2: Register with Startup India
              </span>
            </p>
            <p className="my-4">
              Then the business must be registered as a startup. The entire
              process is simple and online. Visit the Startup India website and
              click on the ‘Register’ button as shown below.
            </p>

            <div className="my-6">
              <img src={img2} alt="" />
            </div>
            <p className="my-4">Enter your name, email ID, mobile number, password and click on the ‘Register’ button.</p>
            <div className="my-6">
              <img src={img3} alt="" />
            </div>
            <p className="my-4">Next, enter the OTP which is sent to your email and other details like, the type of user, name and stage of the startup, etc., and click on the ‘Submit’ button. After entering these details, the Startup India profile is created.</p>
             <p className="my-4">Once your profile is created on the website, startups can apply for various acceleration and incubator/mentorship programmes on the website, along with getting access to learning resources, funding options, government schemes and market access.</p>
          </div>
          <div>
            <p className="">
              <span className="text-2xl md:text-3xl font-bold mr-2">Step 3: Get DPIIT Recognition</span>
             
            </p>
            <p className="my-4">The next step after creating the profile on the Startup India Website is to avail the Department for Promotion of Industry and Internal Trade (DPIIT) Recognition. This recognition helps the startups to avail benefits like access to high-quality intellectual property services and resources, relaxation in public procurement norms, self-certification under labour and environment laws, easy winding of company, access to Fund of Funds, tax exemption for 3 consecutive years and tax exemption on investment above fair market value.</p>
            <p className="my-4">For getting DPIIT Recognition, log in with your registered profile (account) credentials on the Startup India website and click on the ‘Apply for DPIIT Recognition' option under the ‘Recognition’ tab.</p>
            <div className="my-6">
              <img src={img4} alt="" />
            </div>
            <p className="my-4">On the next page, click on ‘Apply Now'. It will redirect to the National Single Window System (NSWS) website. Companies and LLPs should register on the NSWS website, add form ‘Registration as a Startup’ and fill ‘Startup Recognition Form’ to get DPIIT recognition. </p>
            <div className="my-6">
              <img src={img5} alt="" />
            </div>
          </div>
          <div>
            <p className="">
              <span className="text-2xl md:text-3xl font-bold mr-2">Step 4: Recognition Application</span>
             
            </p>
            <p className="my-4">On the ‘Startup Recognition Form’, you need to fill the details such as the entity details, full address (office), authorised representative details, directors/partner details, information required, startup activities and self-certification. Click on the plus sign on the right-hand side of the form and enter each section of the form.
            </p>
            <div className="my-6">
              <img src={img6} alt="" />
            </div>
            <p className="my-4">After entering all the sections of the ‘Startup Recognition Form’, accept the terms and conditions and click on the ‘Submit’ button.</p>
            <div className="my-6">
              <img src={img7} alt="" />
            </div>
          </div>
          <div>
            <p className="my-4">
              <span className="text-2xl md:text-3xl font-bold mr-2">Step 5: Documents for Registration</span>
             
            </p>
            <ul className="space-y-4 list-disc ml-4">
            <li>Incorporation/Registration Certificate of your startup</li>
            <li>
            Proof of funding, if any
            </li>
            <li>
            Authorisation letter of the authorised representative of the company, LLP or partnership firm
            </li>
            <li>
            Proof of concept like pitch deck/website link/video (in case of a validation/ early traction/scaling stage startup)
            </li>
            <li>
            Patent and trademark details, if any
            </li>
            <li>
            List of awards or certificates of recognition, if any
            </li>
            <li>
            PAN Number
            </li>
          </ul>

          <p className="my-6">
              <span className="text-2xl md:text-3xl font-bold mr-2">
              Step 7: Other Areas
              </span>
            </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Patents, Trademarks, and Design Registration</h2>
        <p className="text-gray-700">
          If you need a patent for your innovation or a trademark for your business, you can easily approach any facilitator from the list issued by the government. 
          You only need to bear the statutory fees, receiving an 80% reduction in fees.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Funding</h2>
        <p className="text-gray-700">
          Accessing finance can be a major challenge for startups due to lack of experience, security, or cash flow, which makes it difficult to attract investors.
          To address this, the government launched the Startup India Seed Fund Scheme (SISFS) on January 21, 2021, with a fund of Rs. 945 crore to support startups over the next four years.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Self-Certification Under Employment and Labour Laws</h2>
        <p className="text-gray-700">
          Startups can self-certify under certain labour and environment laws to reduce compliance costs and focus on core business activities.
          They are allowed to self-certify under 6 labour laws and 3 environment laws for 3 to 5 years from incorporation.
          Additionally, units in the "white category" of industries do not need clearance under 3 environment-related acts for 3 years.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Tax Exemption</h2>
        <p className="text-gray-700">
          Startups are eligible for an income tax exemption for 3 years, provided they are certified by the Inter-Ministerial Board (IMB).
          Startups incorporated on or after April 1, 2016, can apply for this tax exemption.
        </p>
      </div>
           
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">Startup India - Key Information</h1>

      {/* Key Features of the Fund of Funds Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features of the Fund of Funds</h2>
        <ul className="list-disc ml-4  space-y-4">
          <li>The Fund of Funds shall be managed by the Small Industries Development Bank of India (SIDBI).</li>
          <li>Life Insurance Corporation (LIC) shall be a co-investor in the Fund of Funds.</li>
          <li>The Fund shall contribute up to 50% of SEBI-registered venture funds (“daughter funds”), with conditions on raised balance.</li>
          <li>Representatives will be on the board of venture funds based on contribution.</li>
          <li>The Fund supports diverse sectors like manufacturing, agriculture, health, and education.</li>
        </ul>
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

export default StartupRegistration;
