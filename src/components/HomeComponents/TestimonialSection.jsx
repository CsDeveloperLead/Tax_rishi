import { GoArrowRight } from "react-icons/go";
const TestimonialSection = () => {
  return (
    <div className="w-full flex flex-col items-center md:items-start gap-8 font-montserrat p-4 md:px-20 mt-20 md:mt-0">
      <div className="w-full flex flex-col md:flex-row  items-center justify-between ">
        <div className="flex flex-col items-center md:items-start gap-6">
          <span className="bg-[#cdd4f1] rounded-3xl text-base w-[200px] py-2 text-main flex justify-center items-center font-bold">
            Testimonials
          </span>
          <h1 className="text-3xl text-center mb-6 md:mb-0 font-bold">Best Feedback From Clients</h1>
        </div>
        <div className="text-main uppercase cursor-pointer flex items-center gap-2 font-bold text-[12px]">
          See All Reviews{" "}
          <p className="font-bold">
            <GoArrowRight size={18} />
          </p>
        </div>
      </div>

      <div className="w-full flex items-center mb-20">
        <div className="relative flex flex-col md:flex-row w-full items-center">
          <video
            controls
            width="450"
            className="rounded-2xl w-full md:w-[35%]"
            poster="https://via.placeholder.com/300x200.png?text=Video+Thumbnail" // Add your thumbnail image here
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:absolute md:left-[400px] mt-10 md:mt-0">
            <div className="w-[350px] md:w-[400px] h-[220px] flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-custom-combined">
              <span>⭐⭐⭐⭐⭐</span>
              <p className="h-[150px]">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor “
              </p>
              <div className="flex  gap-4">
                <span className="w-[50px] bg-gray-400 h-[50px] rounded-2xl"></span>
                <span className="flex flex-col justify-center gap-2">
                  <p className="text-[12px]">Mrs. Shreya Khan</p>
                  <p className="text-[10px] text-main font-bold uppercase">
                    Mrs. Shreya Khan
                  </p>
                </span>
              </div>
            </div>
            <div className="w-[350px] md:w-[400px] h-[220px] flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-custom-combined">
              <span>⭐⭐⭐⭐⭐</span>
              <p className="h-[150px]">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor “
              </p>
              <div className="flex  gap-4">
                <span className="w-[50px] bg-gray-400 h-[50px] rounded-2xl"></span>
                <span className="flex flex-col justify-center gap-2">
                  <p className="text-[12px]">Mrs. Shreya Khan</p>
                  <p className="text-[10px] text-main font-bold uppercase">
                    Mrs. Shreya Khan
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
