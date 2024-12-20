import about1 from "../../assets/img4.png";
import about2 from "../../assets/img3.png";
import { GoArrowRight } from "react-icons/go";
import AboutImage1 from "../../assets/aboutImage1.png";
import AboutImage2 from "../../assets/aboutImage2.png";

const AboutSection1 = () => {
  return (
    <div className="w-full px-4 md:px-20 my-10 md:my-20 flex gap-10 flex-col md:flex-row font-montserrat">
      <div className="w-full md:w-[45%]">
        <div className="w-full">
          <span className="relative">
            <img
              src={AboutImage1}
              alt="placeholder"
              className="rounded-3xl hidden md:block w-[400px] h-[500px]  object-cover"
            />
            <img
              src={AboutImage1}
              alt="placeholder"
              className="rounded-3xl md:hidden  w-[250px] h-[400px] object-cover"
            />
            <img
              src={AboutImage2}
              alt="placeholder"
              className="rounded-3xl absolute top-1/4 left-1/4 hidden md:block w-[400px] h-[500px]  object-cover"
            />
            <img
              src={AboutImage2}
              alt="placeholder"
              className="rounded-3xl absolute w-[250px] h-[400px] top-1/4 left-1/4 md:hidden  object-cover"
            />
            <div className="bg-main py-2 md:py-3 rounded-xl text-white flex flex-col px-4 md:px-8 justify-center items-center absolute left-10 md:left-20 -bottom-8">
              <h1 className="font-bold text-xl md:text-2xl">120+</h1>
              <p className="text-[12px]">Happy Clients</p>
            </div>
          </span>
        </div>
      </div>
      <div className="w-full md:w-[50%] mt-20 md:mt-0 flex flex-col items-center md:items-start gap-8 text-[#14598D]">
        <div className="bg-[#cdd4f1] text-main flex justify-center items-center font-bold rounded-3xl py-3 w-full md:w-1/2">
          Wanna Know Our Story ?
        </div>
        <h1 className="text-2xl md:text-5xl text-center md:text-start font-bold md:leading-[50px]">
          We Are in This business Since 1991
        </h1>
        <p className="text-sm text-center md:text-start md:leading-6">
          Our is a professionally managed firm. The team consist of skilled and
          proficient Chartered Accountants, corporate financial advisors and tax
          consultants, who can handle all financial services
        </p>
        <div className="flex flex-col items-center  md:items-start md:flex-row gap-6">
          <span className="border border-main rounded-full w-14 h-14 flex justify-center items-center">
            <img src={about1} alt="" className="w-8 h-8 object-contain" />
          </span>
          <span className="flex flex-col items-center md:items-start gap-2 font-semibold">
            <p className="text-base md:text-xl ">20 + Winning Awards</p>
            <p className="text-gray-400 text-base text-center md:text-start ">
              The firm represents a combination of specialized skills & years of
              experience
            </p>
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
          <span className="border border-main rounded-full w-14 h-14 flex justify-center items-center">
            <img src={about2} alt="" className="w-8 h-8 object-contain" />
          </span>
          <span className="flex flex-col items-center md:items-start gap-2 font-semibold">
            <p className="text-base md:text-xl ">34 Years Of Experience</p>
            <p className="text-gray-400 text-base text-center md:text-start ">
              Our vision is to be the most impactful & trustable
              consultant firm.
            </p>
          </span>
        </div>
        <a
          href="/#section3"
          className="bg-main rounded-3xl py-3 w-[250px] text-white font-bold flex justify-center items-center"
        >
          Learn More{" "}
          <span className="ml-2">
            <GoArrowRight size={24} />
          </span>{" "}
        </a>
      </div>
    </div>
  );
};

export default AboutSection1;
