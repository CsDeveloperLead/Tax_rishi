import { GoArrowRight } from "react-icons/go";
import Video from '../../assets/video1.mp4'
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import test1 from '../../assets/test1.png'
import test2 from '../../assets/test2.png'

const TestimonialSection = () => {
  const videoRef = useRef(null)
  const location = useLocation()

  function handlePlay() {
    videoRef.current.play();
  }

  useEffect(() => {
    function handleScroll() {
      const scroll = document.scrollingElement.scrollTop
      const path = location.pathname
      if (path === '/') {
        if (scroll >= 3530) {
          handlePlay()
        }
      } else {
        if (scroll >= 1635) {
          handlePlay()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])


  return (
    <div id="testimonial" className="w-full flex flex-col items-center md:items-start gap-8 font-montserrat p-4 md:px-20 mt-20 md:mt-0">
      <div className="w-full flex flex-col md:flex-row  items-center justify-between ">
        <div className="flex flex-col items-center md:items-start gap-6">
          <span className="bg-[#cdd4f1] rounded-3xl text-base w-[200px] py-2 text-main flex justify-center items-center font-bold">
            Testimonials
          </span>
          <h1 className="text-3xl text-center mb-6 md:mb-0 font-bold">Best Feedback From Clients</h1>
        </div>
        <Link to='https://maps.app.goo.gl/KT7X6nk4kYwiYA1aA' className="text-main uppercase cursor-pointer flex items-center gap-2 font-bold text-[12px]">
          See All Reviews{" "}
          <p className="font-bold">
            <GoArrowRight size={18} />
          </p>
        </Link>
      </div>

      <div className="w-full flex items-center mb-20">
        <div className="relative flex flex-col md:flex-row w-full items-center">
          <video
            ref={videoRef}
            controls
            width="450"
            className="rounded-2xl w-full md:w-[35%]"
            poster="https://via.placeholder.com/300x200.png?text=Video+Thumbnail" // Add your thumbnail image here
          >
            <source
              src={Video}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:absolute md:left-[400px] mt-10 md:mt-0">
            <div className="w-[350px] md:w-[400px] h-[250px] flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-custom-combined">
              <span>⭐⭐⭐⭐⭐</span>
              <p className="">
                “ My accounting has been never this simpler and tention free. They helped me with my startup funding. I am grateful for that. ☺️ “
              </p>
              <div className="flex  gap-4">
                <span className="w-[50px] bg-gray-400 h-[50px] rounded-full">
                  <img src={test1} alt="" className="w-full h-full object-cover"/>
                </span>
                <span className="flex flex-col justify-center gap-2">
                  <p className="text-[12px]">5 months ago</p>
                  <p className="text-[10px] text-main font-bold uppercase">
                    Pushyamitra Jha
                  </p>
                </span>
              </div>
            </div>
            <div className="w-[350px] md:w-[400px] h-[250px] flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-custom-combined">
              <span>⭐⭐⭐⭐⭐</span>
              <p className="h-[150px]">
                “ Highly recommended for startup funding and grants “
              </p>
              <div className="flex  gap-4">
                <span className="w-[50px] bg-gray-400 h-[50px] rounded-full">
                <img src={test2} alt="" className="w-full h-full object-cover"/>
                </span>
                <span className="flex flex-col justify-center gap-2">
                  <p className="text-[12px]">6 months ago</p>
                  <p className="text-[10px] text-main font-bold uppercase">
                   Satyam Tyagi
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
