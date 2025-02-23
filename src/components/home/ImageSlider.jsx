import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../home/css/CustomSlider.css";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import switchImg from "../../assets/nintendo switch2.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";

function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const imageList = [switchImg, img2, img3, img4, img5,img6,img7];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const startProgress = () => {
    clearInterval(intervalRef.current);
    let progressValue = 0;
    setProgress(0);

    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        progressValue += 1;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(intervalRef.current);
          sliderRef.current.slickNext();
        }
      }
    }, 50);
  };

  useEffect(() => {
    startProgress();
    return () => clearInterval(intervalRef.current);
  }, [currentSlide]);

  const handleManualChange = (action) => {
    clearInterval(intervalRef.current);
    setProgress(0);
    if (action === "next") {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
    startProgress();
  };

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setProgress(0);
    sliderRef.current.slickGoTo(index);
    startProgress();
  };

  return (
    <div
      className="relative group w-full mt-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 主体 Slider */}
      <Slider {...settings} ref={sliderRef}>
        {imageList.map((img, index) => (
          <div className="flex justify-center" key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[calc(70vh+60px)] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* 左箭头 */}
      <button
        onClick={() => handleManualChange("prev")}
        className="
          absolute top-1/2 left-0 
          -translate-y-1/2 
          w-8 h-20 rounded-r 
          bg-gray-800 text-white 
          opacity-0 group-hover:opacity-90 
          flex items-center justify-center
          transition-all duration-300
          hover:bg-gray-600
          hover:-translate-y-[52%]
        "
      >
        <FaArrowLeft size={20} />
      </button>

      {/* 右箭头 */}
      <button
        onClick={() => handleManualChange("next")}
        className="
          absolute top-1/2 right-0
          -translate-y-1/2
          w-8 h-20 rounded-l
          bg-gray-800 text-white
          opacity-0 group-hover:opacity-90
          flex items-center justify-center
          transition-all duration-300
          hover:bg-gray-600
          hover:-translate-y-[52%]
        "
      >
        <FaArrowRight size={20} />
      </button>

      {/* 底部缩略图 */}
      <div className="flex justify-center gap-3 mt-6">
        {imageList.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`
              w-48 h-20 object-cover rounded cursor-pointer border-2 
              transition-all duration-300
              ${
                currentSlide === index
                  ? "border-blue-500 grayscale-0"
                  : "border-transparent grayscale hover:grayscale-0"
              }
            `}
          />
        ))}
      </div>

      {/* 进度条 */}
      <div
        className="progress-bar absolute bottom-24 left-0 h-1 bg-blue-500"
        style={{
          width: `${progress}%`,
          transition: "width 0.1s linear",
        }}
      ></div>
    </div>
  );
}

export default CustomSlider;