import dotImage from "../../assets/dot.png";
const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6 justify-center items-center min-h-screen font-montserrat relative pb-40 md:pb-0">
      <div className="bg-[#cdd4f1] rounded-[58px] py-3 text-[12px] md:text-base px-6 text-main font-bold">
        <span className="text-[12px] md:text-xl font-bold pr-2"># 1 </span>Welcome to Tax Rishi
        Your Trusted Partner
      </div>
      <div className="flex flex-col gap-2 md:gap-6 text-center">
        <h1 className="text-2xl md:text-6xl font-bold">Maximize Your Returns with</h1>
        <h1 className="text-2xl md:text-6xl font-bold">
          Expert
          <span className="bg-main fot-bold text-white md:px-8 rounded-md md:rounded-lg mx-2 md:mx-6 leading-0">
            Tax
          </span>
          Consulting
        </h1>
      </div>
      <div className="flex flex-col text-center font-montserrat500 mt-4 md:mt-10">
        <p className="text-[12px] md:text-base">
          we specialize in providing personalized tax consulting services to
          help you navigate complex tax{" "}
        </p>
        <p className="text-[12px] md:text-base">
          regulations and optimize your financial outcomes
        </p>
      </div>
      <div className="flex gap-8 mt-10 font-montserrat600 mb-28">
        <button className="bg-main px-4 md:px-8 py-2 md:py-4 text-white rounded-xl">
          Get Started
        </button>
        <button className="bg-white px-4 md:px-8 py-2 md:py-4 text-black rounded-xl border-2 border-main">
          Learn More
        </button>
      </div>

       {/* left image */}

      <div className="absolute left-20 mt-14 hidden md:block">
        <div className="absolute -inset-8 bg-gradient-to-b from-[#bbd5fb] to-transparent blur-xl rounded-lg opacity-80"></div>
        <div className="w-[210px] h-[210px] relative flex justify-center items-center border-dashed rounded-lg  border-2 border-main">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Placeholder Image"
            className="object-contain w-[200px] h-[200px] rounded-lg"
          />
          <div className="absolute -left-16 -bottom-24 z-20">
        <img src={dotImage} alt="image" className="w-[150px] h-[120px]" />
      </div>
        </div>
        
      </div>

        {/* right image */}

      <div className="absolute md:right-14 md:bottom-28 bottom-10">
        {/* Custom Dashed Corner Borders */}
        <div
          className="absolute inset-0 border-0 rounded-xl"
          style={{
            borderStyle: "dashed",
            borderWidth: "0 0 0 0",
            borderColor: "#3E703E",
          }}
        >
          <div className="absolute top-[-5px] left-[-5px] w-[80px] h-[80px] border-t-2 border-l-2 border-green-700 border-dashed rounded-tl-lg"></div>
          <div className="absolute -bottom-[6px] -right-[6px] md:bottom-[45px] md:right-[25px] w-[80px] h-[80px] border-b-2 border-r-2 border-green-700 border-dashed rounded-br-lg"></div>
        </div>

        <div className="relative w-[200px] h-[250px] md:w-[250px] md:h-[350px] ">
          {/* Main Content */}
          <img
            src="https://via.placeholder.com/220x300"
            alt="image"
            className="w-[200px] h-[250px] md:w-[220px] md:h-[300px] rounded-lg shadow-[0_0_50px_15px_#c1d8fc]"
          />

          {/* Overlay Content */}
          <div className="absolute bottom-[28px] md:bottom-[70px]  -left-20 md:-left-32 md:w-[250px] h-[44px] md:h-[60px] bg-main rounded-[49px] px-10 flex items-center justify-center z-30">
            <div className="text-white text-center">
              <span className="block font-bold text-[12px] md:text-lg">100K</span>
              <span className="block text-[6px] md:text-[10px]">Good Reviews</span>
            </div>

            <div className="text-white text-2xl mx-4">|</div>
            <div className="text-white text-center">
              <span className="block font-bold text-[12px] md:text-lg">43K</span>
              <span className="block text-[6px] md:text-[10px]">Feedbacks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
