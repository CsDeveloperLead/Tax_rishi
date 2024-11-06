
const MsmeSec1 = () => {
    return (
      <div className='flex flex-col md:flex-row md:gap-10 font-montserrat my-10 md:mb-20 md:mx-20'>
        <div className="pl-8 w-full  md:w-[45%] flex flex-col items-center relative">
          <div className=" flex flex-col gap-2 ">
          <div className="w-[35px] h-[35px] bg-main rounded-md flex justify-start"></div>
  
          <img src="https://via.placeholder.com/400x400" alt="placeholder" className="w-[250px] md:w-[400px] h-[250px] md:h-[400px] object-cover rounded-[20px]" />
          </div>
          <img src="https://via.placeholder.com/250x250" alt="placeholder" className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-cover rounded-[20px] absolute md:-bottom-4 -bottom-14 left-8 md:left-10" />
          
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-8">
          <div className="text-main bg-[#cdd4f1] rounded-[49px] py-2 flex justify-center items-center w-[90%] md:w-[40%] font-bold text-sm md:text-lg mt-24 md:mt-0">Msme Rishi</div>
          <h1 className="w-[90%] md:w-full text-center md:text-start text-2xl md:text-5xl font-bold md:leading-[60px] ">Discover Story Excellence in Tax Consulting</h1>
          <p className="w-[90%] md:w-full text-center md:text-start text-sm md:text-base font-montserrat500 md:leading-10">Tax Rishi is a leading tax consulting firm dedicated to helping individuals and businesses achieve their financial objectives. With a client-first approach and a commitment to excellence, our expert team ensures that you get the most out of your tax filings while staying compliant with all regulations</p>
          <p className="w-[90%] md:w-full text-center md:text-start text-sm md:text-base font-montserrat500 md:leading-10">Our team of experienced and highly qualified tax professionals brings a wealth of knowledge and expertise across various industries</p>
          <button className="bg-main text-white font-bold w-1/3 py-2 md:py-4 rounded-lg md:rounded-2xl">Learn More</button>
        </div>
      </div>
    )
  }
  
  export default MsmeSec1
  