import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // 滚动播放视频
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "top 75%", // 滚动到 3/4 时触发
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    // 标题 3D 翻转动画
    gsap.utils.toArray(".title-char").forEach((char, index) => {
      gsap.fromTo(
        char,
        { opacity: 0, rotateX: -90 },
        {
          opacity: 1,
          rotateX: 0,
          duration: 0.5,
          delay: index * 0.08, // 逐字翻转
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#features_title",
            start: "top 75%", // 3/4 处完全可见
          },
        }
      );
    });

    // 🎯 新增 `h2` 标题动画（进入时缓慢上移 + 透明度增加）
    gsap.from(".features-heading", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features-heading",
        start: "top 75%",
      },
    });

    // 视频放大动画
    animateWithGsap(
      "#exploreVideo",
      { opacity: 1, scale: 1, ease: "power2.out" },
      { start: "top 75%", scrub: 1.5 }
    );

    // 图片放大动画
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power2.out" },
      { start: "top 75%", scrub: 1.5 }
    );

    // 介绍文字动画（逐个浮现）
    animateWithGsap(
      ".g_text",
      { y: 0, opacity: 1, ease: "power2.inOut" },
      { start: "top 75%" }
    );
  });

  // 逐个字母生成 3D 标题
  const generateTitle = (text, highlight) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`title-char ${highlight.includes(char) ? "text-red-600" : "text-black"}`}
        style={{ display: "inline-block", transformOrigin: "bottom" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <section className="h-full common-padding bg-white relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full text-center">
          <h1 id="features_title" className="text-5xl font-bold tracking-wide">
            {generateTitle("Nintendo Switch 2 のすべてを体験しよう。", "Nintendo Switch 2")}
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="features-heading mt-32 mb-32 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Nintendo Switch 2</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              もっと軽く、もっと強く、もっと進化した。
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative w-full h-[75vh] flex flex-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center scale-95 opacity-0"
                preload="none"
                muted
                loop
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[65vh]">
                  <img
                    src={explore1Img}
                    alt="Nintendo Switch 2"
                    className="feature-video g_grow scale-95 opacity-0"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[65vh]">
                  <img
                    src={explore2Img}
                    alt="Nintendo Switch 2 Design"
                    className="feature-video g_grow scale-95 opacity-0"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text text-gray-800">
                    Nintendo Switch 2 は {' '}
                    <span className="text-red-600 font-bold">
                      史上最も洗練されたデザイン。
                    </span>
                    最高品質の素材と最先端の技術で、新しいプレイ体験を提供します。
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text text-gray-800">
                    Switch 史上最も軽量なモデル。 {' '}
                    <span className="text-red-600 font-bold">
                      強度と耐久性を大幅に向上。
                    </span>
                    長時間のプレイでも快適に、どこでも自由に楽しめます。
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text text-gray-800">
                    OLEDディスプレイの採用により {' '}
                    <span className="text-red-600 font-bold">
                      鮮やかな色と深いコントラスト。
                    </span>
                    これまでにない没入感を実現しました。
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text text-gray-800">
                    新しいコントローラー {' '}
                    <span className="text-red-600 font-bold">
                      「Joy-Con 2.0」
                    </span>
                    は、より正確な操作性と快適なグリップを提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;