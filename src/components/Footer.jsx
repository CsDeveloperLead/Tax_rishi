import footmain from "../assets/footmain.png";
// import foot1 from "../assets/foot1.png";
import Logo from '../assets/Logo.png'
import foot2 from "../assets/foot2.png";
import foot3 from "../assets/foot3.png";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="px-4  py-10 md:p-20 bg-main w-full flex flex-col md:flex-row items-center gap-10 font-montserrat ">
      <div className="w-full md:w-[30%] flex flex-col items-center md:items-start gap-6">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>
        <p className="text-[13px] text-white text-center md:text-start w-full leading-8">
          Tax Rishi is more than just a tax consulting firm we are your
          dedicated partner in navigating the complexities of tax management and
          achieving your financial goals. Our brand is built on a foundation of
          trust, expertise
        </p>
        <div className="flex items-center gap-10">
          <Link to="https://www.instagram.com/taxrishi_taxessimplifed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <span className="text-white">
              <BsInstagram size={20} />
            </span>
          </Link>

          <span>
            <img src={foot2} alt="image" className="w-6 h-6 object-contain" />
          </span>
          <Link to="https://www.linkedin.com/company/taxrishi-taxes-simplified/" target="_blank">
            <span>
              <img src={foot3} alt="image" className="w-6 h-6 object-contain" />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[65%] flex flex-col gap-8">
        <div className="flex w-full flex-col md:flex-row  justify-around md:hidden">
          <div className="flex justify-around w-full">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 gap-4">
              <h1 className="text-white font-bold text-lg">Pages</h1>
              <a href="/" className="text-white text-[12px]">Home</a>
              <a href="/about" className="text-white text-[12px]">About Us</a>
              <a href="/#section3" className="text-white text-[12px]">Services</a>
              <a href="/#testimonial" className="text-white text-[12px]">Testimonial</a>
            </div>
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 gap-4">
              <h1 className="text-white font-bold text-lg">Services</h1>
              <p className="text-white text-[12px]">Tax Consulting</p>
              <p className="text-white text-[12px]">Tax Services</p>
              <p className="text-white text-[12px]">Tax Resolution</p>
              <p className="text-white text-[12px]">Trust Planning</p>
            </div>

          </div>
          <div>
            <div className="flex flex-col items-center md:items-start w-full">
              <h1 className="text-white font-bold text-lg mb-4">Contact</h1>
              <p className="text-white text-[12px]">+91-120-4137900/ 4560009</p>
              <p className="text-white text-[12px] my-4">+91-9810038818 / 9654640119</p>
              <p className="text-white text-[12px] mb-4">support@taxrishi.in</p>
              <p className="text-white text-[12px]">Office No. 102, Shree Mahaveer Arcade,</p>
              <p className="text-white text-[12px]"> First Floor, C-19, Sector-15, Adjoing SBI Bank,</p>
              <p className="text-white text-[12px]"> Near Atal Chowk, Vasundhara, Ghaziabad - 201012 (U.P.)</p>
            </div>
          </div>
        </div>
        <div className="w-full  justify-around hidden md:flex">
          <div className="flex flex-col mb-8 md:mb-0 gap-4">
            <h1 className="text-white font-bold text-lg">Pages</h1>
            <a href="/" className="text-white text-[12px]">Home</a>
            <a href="/about" className="text-white text-[12px]">About Us</a>
            <a href="/#section3" className="text-white text-[12px]">Services</a>
            <a href="/#testimonial" className="text-white text-[12px]">Testimonial</a>
          </div>
          <div className="flex flex-col mb-8 md:mb-0 gap-4">
            <h1 className="text-white font-bold text-lg">Services</h1>
            <p className="text-white text-[12px]">Tax Consulting</p>
            <p className="text-white text-[12px]">Tax Services</p>
            <p className="text-white text-[12px]">Tax Resolution</p>
            <p className="text-white text-[12px]">Trust Planning</p>
          </div>
          {/* <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-lg">About</h1>
              <p className="text-white text-[12px]">Our Mission</p>
              <p className="text-white text-[12px]">Our Values</p>
              <p className="text-white text-[12px]">Our Story</p>
              <p className="text-white text-[12px]">Why Choose Us</p>
            </div> */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-lg mb-4">Contact</h1>
            <p className="text-white text-[12px]">+91-120-4137900/ 4560009</p>
            <p className="text-white text-[12px] my-4">+91-9810038818 / 9654640119</p>
            <p className="text-white text-[12px] mb-4">support@taxrishi.in</p>
            <p className="text-white text-[12px]">Office No. 102, Shree Mahaveer Arcade,</p>
            <p className="text-white text-[12px]"> First Floor, C-19, Sector-15, Adjoing SBI Bank,</p>
            <p className="text-white text-[12px]"> Near Atal Chowk, Vasundhara, Ghaziabad - 201012 (U.P.)</p>
          </div>
        </div>
        <div className="flex justify-center text-[12px] text-white">
          ©️2024 Tax rishi, made with 💖 by Campaigning Source, all rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
