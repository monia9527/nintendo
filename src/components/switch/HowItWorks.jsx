import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { logoImg, frameVideo } from "../../utils";
import { animateWithGsap } from "../../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();
  const textRef = useRef(); // 文字动画 Ref
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
    }
  };

  useGSAP(() => {
    // LOGO 动画
    gsap.from("#logo", {
      scrollTrigger: {
        trigger: "#logo",
        start: "top 80%",
      },
      opacity: 0,
      scale: 2,
      duration: 3,
      ease: "power3.inOut",
    });

    // 文字动画（向上浮现）
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    // 介绍文字动画
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/*  分割线 */}
        <div className="w-full h-[1px] bg-gray-300 mb-20"></div>
        <p
          ref={textRef}
          className="text-center text-gray-600 text-xl font-medium"
        >
          最適な家庭用 & 友人とのプレイ体験！
        </p>
        <div id="logo" className="flex-center w-full mt-10 md:mt-20 ">
          <img src={logoImg} alt="Nintendo Switch 2" width={180} height={180} />
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative flex-center">
            <div className="w-[75vw] border-8 border-gray-200 rounded-lg overflow-hidden">
              <div className="relative pt-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                  autoPlay
                  ref={videoRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-5 w-[75vw] mx-auto">
            <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden relative">
              <div
                className="bg-blue-600 h-full absolute left-0 top-0 transition-all ease-linear"
                style={{
                  width: `${progress}%`,
                  transitionDuration: `${(1 / duration) * 1000}s`,
                }}
              ></div>
            </div>
            <button
              onClick={togglePlay}
              className="mt-3 px-4 py-2 bg-blue text-black rounded-full hover:bg-blue-700"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          <p className="text-gray font-semibold text-center mt-3">
            Nintendo Switch 2
          </p>
        </div>

        <div className="hiw-text-container flex justify-between items-center mt-8">
          <div className="hiw-text-block g_fadeIn">
            <p className="hiw-text">
              <span className="text-highlight">Nintendo Switch 2</span> は、まったく新しい設計で登場。
            </p>
            <p className="hiw-text mt-3">
              <span className="text-highlight">パワフルな新型チップ</span> により、
              より高精細なゲーム体験を実現。
            </p>
            <p className="hiw-text mt-3">
              GPU の性能が飛躍的に向上し、
              <span className="text-highlight">4K対応の滑らかな映像表現</span> も可能に。
            </p>
          </div>

          <div className="hiw-text-block g_fadeIn">
            <p className="hiw-text">新設計の冷却システム</p>
            <p className="hiw-bigtext mt-3">より静かに、より強力に</p>
            <p className="hiw-text mt-3">快適なゲーム体験を実現</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;