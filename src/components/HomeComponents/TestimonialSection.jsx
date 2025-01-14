import { GoArrowRight } from "react-icons/go";
import Video from "../../assets/video1.mp4";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      feedback:
        "My accounting has been never this simpler and tension free. They helped me with my startup funding. I am grateful for that. ☺",
      time: "5 months ago",
      name: "Pushyamitra Jha",
      img: test1,
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐⭐",
      feedback: "Highly recommended for startup funding and grants.",
      time: "6 months ago",
      name: "Satyam Tyagi",
      img: test2,
    },
    {
      id: 3,
      rating: "⭐⭐⭐⭐⭐",
      feedback: "Outstanding service and expertise in startup funding!",
      time: "4 months ago",
      name: "Ananya Mishra",
      img: test1,
    },
    {
      id: 4,
      rating: "⭐⭐⭐⭐⭐",
      feedback: "Exceptional support and results for our funding needs.",
      time: "4 months ago",
      name: "Nikhil Mishra",
      img: test1,
    },
    {
      id: 5,
      rating: "⭐⭐⭐⭐⭐",
      feedback: "Excellent advice and execution for startups!",
      time: "4 months ago",
      name: "Aftab Ahmad",
      img: test1,
    },
    {
      id: 6,
      rating: "⭐⭐⭐⭐⭐",
      feedback: "Highly skilled and reliable funding solutions.",
      time: "4 months ago",
      name: "Vansh Tyagi",
      img: test1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 4 ? 0 : prevIndex + 1
    );
  };

  const videoRef = useRef(null);
  const location = useLocation();

  function handlePlay() {
    videoRef.current.play();
  }

  useEffect(() => {
    function handleScroll() {
      const scroll = document.scrollingElement.scrollTop;
      const path = location.pathname;
      if (path === "/") {
        if (scroll >= 3530) {
          handlePlay();
        }
      } else {
        if (scroll >= 1635) {
          handlePlay();
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="testimonial"
      className="w-full flex flex-col items-center md:items-start gap-8 font-montserrat p-4 md:px-20 mt-20 md:mt-0"
    >
      <div className="w-full flex flex-col md:flex-row  items-center justify-between ">
        <div className="flex flex-col items-center md:items-start gap-6">
          <span className="bg-[#cdd4f1] rounded-3xl text-base w-[200px] py-2 text-main flex justify-center items-center font-bold">
            Testimonials
          </span>
          <h1 className="text-3xl text-center mb-6 md:mb-0 font-bold text-[#14598D]">
            Best Feedback From Clients
          </h1>
        </div>
        <Link
          to="https://maps.app.goo.gl/KT7X6nk4kYwiYA1aA"
          className="text-main uppercase cursor-pointer flex items-center gap-2 font-bold text-[12px]"
        >
          See All Reviews{" "}
          <p className="font-bold">
            <GoArrowRight size={18} />
          </p>
        </Link>
      </div>

      <div className="w-full flex items-center mb-20">
        <div className="relative flex flex-col lg:flex-row w-full items-center">
          <video
            ref={videoRef}
            controls
            width="450"
            className="rounded-2xl w-full lg:w-[35%]"
            poster="https://via.placeholder.com/300x200.png?text=Video+Thumbnail" // Add your thumbnail image here
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative w-full flex flex-col items-center">
            <div className="overflow-hidden w-full lg:w-[850px]">
              <div
                className="flex gap-6 py-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-6 rounded-2xl bg-white border shadow-xl lg:w-[400px] h-[250px] flex flex-col gap-4"
                  >
                    <span>{testimonial.rating}</span>
                    <p className="text-[#14598D]">{testimonial.feedback}</p>
                    <div className="flex gap-4">
                      <span className="w-[50px] bg-gray-400 h-[50px] rounded-full">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </span>
                      <span className="flex flex-col justify-center gap-2">
                        <p className="text-[12px]">{testimonial.time}</p>
                        <p className="text-[10px] text-main font-bold uppercase">
                          {testimonial.name}
                        </p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="bg-main text-white px-4 py-2 rounded-lg"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="bg-main text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
