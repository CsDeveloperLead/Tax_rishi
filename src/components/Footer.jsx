import footmain from "../assets/footmain.png";
import foot1 from "../assets/foot1.png";
import foot2 from "../assets/foot2.png";
import foot3 from "../assets/foot3.png";
const Footer = () => {
  return (
    <div className="px-4  py-10 md:p-20 bg-main w-full flex flex-col md:flex-row items-center gap-10 font-montserrat ">
      <div className="w-full md:w-[30%] flex flex-col items-center md:items-start gap-6">
        <div className="flex items-center gap-4">
          <span className="">
            <img
              src={footmain}
              alt="footmain"
              className="w-10 h-10 object-contain"
            />
          </span>
          <h1 className="text-white text-2xl font-bold">Tax Rishi</h1>
        </div>
        <p className="text-[13px] text-white text-center md:text-start w-full leading-8">
          Tax Rishi is more than just a tax consulting firm we are your
          dedicated partner in navigating the complexities of tax management and
          achieving your financial goals. Our brand is built on a foundation of
          trust, expertise
        </p>
        <div className="flex items-center gap-10">
          <span>
            <img src={foot1} alt="image" className="w-6 h-6 object-contain" />
          </span>
          <span>
            <img src={foot2} alt="image" className="w-6 h-6 object-contain" />
          </span>
          <span>
            <img src={foot3} alt="image" className="w-6 h-6 object-contain" />
          </span>
        </div>
      </div>
      <div className="w-full md:w-[65%] flex flex-col gap-8">
        <div className="flex w-full  justify-around md:hidden">
          <div className="">
            <div className="flex flex-col mb-8 md:mb-0 gap-4">
              <h1 className="text-white font-bold text-lg">Services</h1>
              <p className="text-white text-[12px]">Tax Consulting</p>
              <p className="text-white text-[12px]">Tax Services</p>
              <p className="text-white text-[12px]">Tax Resolution</p>
              <p className="text-white text-[12px]">Trust Planning</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-lg">About</h1>
              <p className="text-white text-[12px]">Our Mission</p>
              <p className="text-white text-[12px]">Our Values</p>
              <p className="text-white text-[12px]">Our Story</p>
              <p className="text-white text-[12px]">Why Choose Us</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-8 md:mb-0 gap-4">
              <h1 className="text-white font-bold text-lg">Pages</h1>
              <p className="text-white text-[12px]">Home</p>
              <p className="text-white text-[12px]">About Us</p>
              <p className="text-white text-[12px]">Services</p>
              <p className="text-white text-[12px]">Testimonial</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-lg">Contact</h1>
              <p className="text-white text-[12px]">Facebook</p>
              <p className="text-white text-[12px]">Instagram</p>
              <p className="text-white text-[12px]">Twitter</p>
            </div>
          </div>
        </div>
        <div className="w-full  justify-around hidden md:flex">
          <div className="flex flex-col mb-8 md:mb-0 gap-4">
            <h1 className="text-white font-bold text-lg">Services</h1>
            <p className="text-white text-[12px]">Tax Consulting</p>
            <p className="text-white text-[12px]">Tax Services</p>
            <p className="text-white text-[12px]">Tax Resolution</p>
            <p className="text-white text-[12px]">Trust Planning</p>
          </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-lg">About</h1>
              <p className="text-white text-[12px]">Our Mission</p>
              <p className="text-white text-[12px]">Our Values</p>
              <p className="text-white text-[12px]">Our Story</p>
              <p className="text-white text-[12px]">Why Choose Us</p>
            </div>
        
          <div className="flex flex-col mb-8 md:mb-0 gap-4">
            <h1 className="text-white font-bold text-lg">Pages</h1>
            <p className="text-white text-[12px]">Home</p>
            <p className="text-white text-[12px]">About Us</p>
            <p className="text-white text-[12px]">Services</p>
            <p className="text-white text-[12px]">Testimonial</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-lg">Contact</h1>
            <p className="text-white text-[12px]">Facebook</p>
            <p className="text-white text-[12px]">Instagram</p>
            <p className="text-white text-[12px]">Twitter</p>
          </div>
        </div>
        <div className="flex justify-center text-[12px] text-white">
          © 2093 Tax Rishi Tax Consulting. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
