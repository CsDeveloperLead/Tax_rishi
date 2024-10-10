import rect from "../../assets/rect.png";
import { GoArrowDownRight } from "react-icons/go";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
const Section2 = () => {
  return (
    <div className="w-full flex flex-col gap-10 md:flex-row items-center justify-center md:items-start font-montserrat mt-20 mb-10 md:mt-40 md:mb-20 px-20">
      <div className="w-[90%] md:w-[50%] flex flex-col  gap-8">
        <div className="w-full md:w-1/3 flex justify-center items-center font-bold bg-[#cdd4f1] text-main rounded-[49px] px-4 py-2">
          Here Our Services
        </div>
        <h1 className="w-full text-center md:text-start text-xl md:text-5xl font-bold md:leading-[60px]">
          Comprehensive Tax Solutions Tailored to Your Needs
        </h1>
        <p className="w-full text-center md:text-start text-sm md:text-base font-montserrat500 md:leading-10">
          Our expert team provides personalized strategies and solutions to help
          you navigate
        </p>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="bg-main rounded-full w-[45px] h-[45px] flex justify-center items-center">
                  <img
                    src={ser1}
                    alt="placeholder"
                    className="w-[20px] h-[20px] object-contain"
                  />
                </span>
                <span className="text-xl font-bold">Tax Consulting</span>
              </div>
              <p className="text-[10px] md:text-[12px]">
                Our individualized tax planning and preparation services are
                designed to maximize your returns and minimize your liabilities
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="bg-main rounded-full w-[45px] h-[45px] flex justify-center items-center">
                  <img
                    src={ser2}
                    alt="placeholder"
                    className="w-[20px] h-[20px] object-contain"
                  />
                </span>
                <span className="text-xl font-bold">Tax Resolution</span>
              </div>
              <p className="text-[10px] md:text-[12px]">
                Our tax resolution services are here to help you address and
                resolve problems such as IRS audits
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="bg-main rounded-full w-[45px] h-[45px] flex justify-center items-center">
                  <img
                    src={ser3}
                    alt="placeholder"
                    className="w-[20px] h-[20px] object-contain"
                  />
                </span>
                <span className="text-xl font-bold">Business Tax Services</span>
              </div>
              <p className="text-[10px] md:text-[12px]">
                We offer comprehensive tax solutions for businesses of all
                sizes. From startups to established enterprises
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className="bg-main rounded-full w-[45px] h-[45px] flex justify-center items-center">
                  <img
                    src={ser4}
                    alt="placeholder"
                    className="w-[20px] h-[20px] object-contain"
                  />
                </span>
                <span className="text-xl font-bold">Trust Planning</span>
              </div>
              <p className="text-[10px] md:text-[12px]">
                Proper estate and trust planning is essential for managing and
                preserving your wealth
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[45%] h-full flex justify-center items-center ">
        <div className="relative flex justify-center items-center">
          <img
            src={rect}
            alt="Image"
            className="object-contain w-[300px] h-[300px] md:w-[500px] md:h-[500px] "
          />
          <div className="bg-main w-[44px] h-[42px] md:w-[80px] md:h-[80px] rounded-md md:rounded-xl absolute top-1 left-1 md:top-0 md:left-1 flex justify-center items-center text-white ">
            <GoArrowDownRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
