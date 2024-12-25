import { useState, useEffect, useRef } from "react";
import img1 from "../assets/start1.png";
import img2 from "../assets/start2.png";
import img3 from "../assets/start3.png";
import img4 from "../assets/start4.png";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const imageUrls = [
    img1,
    img2,
    img3,
    img4,
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
  ];

  const slideWidth = 100 / imageUrls.length;

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // Dragging handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const difference = e.clientX - startX;
    if (difference > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
      );
      setIsDragging(false);
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startAutoSlide();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const difference = e.touches[0].clientX - startX;
    if (difference > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
      );
      setIsDragging(false);
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAutoSlide();
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeaveCapture={() => setIsDragging(false)} // Handle edge case for dragging out
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out rounded-3xl"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          width: `${imageUrls.length * 100}%`,
        }}
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 rounded-3xl"
            style={{ width: `${slideWidth}%` }}
          >
            <div
              className="w-full h-[300px] md:h-[450px] mt-2 md:mt-6 mb-10 bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage: `url(${url})`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
