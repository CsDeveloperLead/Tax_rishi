import img1 from "../assets/msme1.jpg";
import img2 from "../assets/msme2.png";
import img3 from "../assets/msme3.png";
import img4 from "../assets/msme4.png";
import img5 from "../assets/msme5.png";
import img6 from "../assets/msme6.png";
import img7 from "../assets/msme7.png";
import { Link } from "react-router-dom";
const StartupFunding = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-10 flex gap-10 flex-col md:flex-row font-montserrat">
      <div className="w-[80%] flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">Startup Funding</h1>
          <p className=" text-base leading-8">
            As the whole world seems abuzz with the word ‘startup’, the popular
            concept today has gained a hallmark prominence across nations. The
            total number of startups is rising in developed economies and
            emerging markets alike. So it is safe to say that this bandwagon is
            set to become the alpha of industries.
          </p>
          <p className=" text-base leading-8">
            Talking of economies, India is not new to the startup concept and
            infact, it has been totally deluged by the trend in the past few
            years. The last decade has witnessed some major startups disrupting
            the conventional corporate scene in India. There’s no denying
            ‘startup’ the idea, is a million dollar baby, but can’t say it is as
            easy for every startup to survive in the big sea. In India, almost
            every fortnight when a new startup gears up to begin operations,
            another one bites the dust. Ever wondered what compels some startups
            to take a such colossal step? Funding! Mostly. Launching a startup
            is definitely something to take pride in. It is an absolute
            advantage if your creation is innovative and self-motivated, but
            when it is ready to take off you have to see that it is
            satisfactorily funded. Startup funding can actually be a herculean
            task, especially in the beginning when your venture may need funding
            for more than a couple of rounds. Unless you consistently make
            profits for a good six to seven months, it’s hard to deal with
            payoffs, operations and other utilities without having sufficient
            cash flow. This is when funding helps you in operating smoothly and
            successfully.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[40px] font-bold">
            Startup Funding: 7 Ways to fund-start your venture
          </h1>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">1. Angel investors</h1>
            <p>
              At the very nascent stage of your startup, the first on your to-do
              list is looking for angel investors. These investors are the first
              few people who will listen to your pitch. On foreseeing a
              promising association, they will also invest in the idea. Angel
              investors do not invest a very big amount but they also don’t get
              into the technicalities of the venture.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">2. Venture capitalists</h1>
            <p>
              As the name suggests, venture capitalists are investors who lend
              money only upon liking a business model and after contemplating
              prospects. Usually, venture capitalists invest in a lump sum and
              are known for expecting high returns.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">3. Business incubators</h1>
            <p>
              As you know, every industry today has programmes called business
              incubators to assist startups with proper financing and training
              when they are merely starting out. The programmes consist of
              industry experts serving as mentors-cum-investors to help
              entrepreneurs understand the current growth trends.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">4. Friends and family</h1>
            <p>
              What could be better than your own family or friends investing
              money in your idea. This, in fact, is said to be one of the safest
              and the most reliable ways of all the other fundings as the one
              lending you the money knows you enough to put their trust in you.
              Besides, you always have them by your side.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">5. Crowdfunding</h1>
            <p>
              A very popular type of fundraising, crowdfunding is opted by a
              number of startups today. Certain websites are dedicated to
              collecting investments from a host of investors just so they can
              help budding startups in setting up their business.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">6. Government Loan Schemes</h1>
            <p>
              The government has introduced various loan schemes to help
              startups. These schemes provide collateral-free debt to aspiring
              startups and facilitate them to gain access to low-cost capital.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">7. Grants</h1>
            <p>
              This type of funding typically applies to businesses operating in
              the research and development process. Grants are offered to them
              by the government because most of these startups are run and
              regulated by the government itself. All that being said, every
              entrepreneur should envisage the pros and cons of their idea
              before they lay it on the ground. A good funding will help a
              startup go a long way without losing balance.F
            </p>
          </div>
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

export default StartupFunding;
