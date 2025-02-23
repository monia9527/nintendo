import React, { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../../utils/index";
import gsap from "gsap";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const handleVideoSrcSet = () => {
      if (window.innerWidth > 768) {
        setVideoSrc(heroVideo);
      } else {
        setVideoSrc(smallHeroVideo);
      }
    };

    handleVideoSrcSet();
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      gsap.from("#hero-title", {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: "power4.inOut",
      });
      gsap.from("#cta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: "power4.inOut",
      });
    });
  }, []);

  return (
    <section className="relative w-full h-screen bg-black flex justify-center items-center">
      {/* 视频背景 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        key={heroVideo}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* 标题 Switch 2，放在视频正上方 */}
      <p
        id="hero-title"
        className="absolute top-[10%] text-white text-4xl font-bold text-center md:text-6xl"
      >
        Switch 2
      </p>

      {/* CTA 按钮 + 价格，放在视频底部 */}
      <div
        id="cta"
        className="absolute bottom-[5%] flex flex-col items-center text-white text-center"
      >
        <a
          href="#hightlights"
          className="bg-red-600 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-red-700 transition duration-300"
        >
          Try it now
        </a>
        <p className="font-normal text-2xl mt-3">49999 JPY</p>
      </div>
    </section>
  );
};

export default Hero;