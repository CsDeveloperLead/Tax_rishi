import bgimg from '../../assets/sec4bg.png';
import { TfiEmail } from "react-icons/tfi";

const Section4 = () => {
  return (
    <div className="w-full px-4 md:px-20 md:my-20 flex flex-col md:flex-row gap-10 md:gap-20 items-center font-montserrat">
      <div className='w-full md:w-[45%] md:h-[600px] flex items-center'>
      <div
        className="w-full h-[80%] bg-cover bg-center flex flex-col gap-20"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className='flex justify-center md:justify-start'>
        <div className='bg-white mt-8 w-[300px] roudned-2xl p-6 border-gray-400 border rounded-3xl shadow-custom-combined '>
            <div className='flex justify-between items-center '>
                <h1 className='text-lg'>Total Revenue</h1>
                <p>x</p>
            </div>
            <p className='border-b-2 border-gray-400 my-4'></p>
            <div className='flex items-center gap-4'>
                <span className='w-12 h-12 text-white bg-gray-500 rounded-full flex justify-center items-center'>
                <TfiEmail size={20} />
                </span>
                <span className='flex flex-col'>
                    <p className='text-main text-xl font-bold'>4.44k</p>
                    <p className='text-sm'>Tax Saving</p>
                </span>
            </div>
        </div>
        </div>
        <div className='w-full flex justify-end'>
        <div className='bg-white w-[350px]   roudned-2xl p-6 border-gray-400 border rounded-3xl shadow-custom-combined '>
            <div className='flex justify-between items-center '>
                <h1 className='text-lg'>Balance in Percent</h1>
                <p>x</p>
            </div>
            <p className='border-b-2 border-gray-400 my-4'></p>
            <div className='flex flex-col gap-4'>
                
                <span className='flex flex-col'>
                    <p className='text-main text-xl font-bold'>30,999.00</p>
                    <p className='text-sm'>Investment for Future</p>
                </span>
                <span className='bg-[#acacac] flex justify-center items-center text-white w-full py-2 rounded-3xl font-bold'>Saving</span>
            </div>
        </div>
        </div>
      </div>
      </div>
      <div className="w-full md:w-[45%] text-center md:text-start flex flex-col gap-4">
        {/* Your content goes here */}
        <h1 className='text-2xl md:text-5xl font-bold md:leading-[60px]'>Calculate your Taxes with our Calculator</h1>
        <p className='text-[#6e7191] text-[12px] md:text-sm md:leading-8'>All the Lorem Ipsum generators on the Montserratnet tend to repeat predefined chunks as necessary, making this the first true generator on the Montserratnet. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
        <p className='text-[#6e7191] text-[12px] md:text-sm md:leading-8'>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
         <div className='flex gap-4 items-center justify-center md:justify-start'>
          <span className='text-base md:text-xl font-bold'>268%</span>
          <p className='font-bold text-[10px]'>Investment Growth Year Over Year</p>
         </div>
         <div className='flex gap-4 md:gap-6 items-center justify-center md:justify-start '><span className='text-base md:text-xl font-bold'>10k+</span><p className='font-bold text-[10px]'>New Investors Joining Everyday</p></div>
         <div className='w-full flex justify-center md:justify-start'>         <button className='bg-main text-white font-bold text-sm flex justify-center items-center py-3 w-[250px] rounded-lg'>Discover Calculator</button>
         </div>
      </div>
    </div>
  );
};

export default Section4;