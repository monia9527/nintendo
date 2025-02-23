import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import marioImg from "../../assets/mariao.png"; 
import luigiImg from "../../assets/luigi.png"; 

const FloatingBackground = () => {
  const shapeRefs = useRef([]);

  useEffect(() => {
    shapeRefs.current.forEach((el, i) => {
      if (!el) return;
      const floatDistance = 30 + (i % 3) * 5; 
      gsap.to(el, {
        y: `+=${floatDistance}`,
        duration: 2 + i * 0.3, 
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2, 
      });
    });
  }, []);

  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      {/* 任天堂角色 */}
      <img
        ref={(el) => (shapeRefs.current[0] = el)}
        src={marioImg}
        alt="Mario"
        className="w-16 h-16 absolute top-[5%] left-[5%]"
      />
      <img
        ref={(el) => (shapeRefs.current[1] = el)}
        src={luigiImg}
        alt="Luigi"
        className="w-16 h-16 absolute top-[20%] left-[10%]"
      />

      {/* 上方圆形和多边形 */}
      <div
        ref={(el) => (shapeRefs.current[2] = el)}
        className="absolute top-[10%] right-[5%] w-14 h-14 bg-red-300 rounded-full opacity-50"
      />
      <div
        ref={(el) => (shapeRefs.current[3] = el)}
        className="absolute top-[15%] right-[20%] w-20 h-20 bg-green-300 rounded-full opacity-40"
      />
      <div
        ref={(el) => (shapeRefs.current[4] = el)}
        className="absolute top-[25%] left-[40%] w-10 h-10 bg-yellow-300 rounded-full opacity-60"
      />
      <div
        ref={(el) => (shapeRefs.current[5] = el)}
        className="absolute top-[30%] left-[65%] w-16 h-16 bg-pink-300 rounded-full opacity-40"
      />

      {/* 中部随机几何图形 */}
      <div
        ref={(el) => (shapeRefs.current[6] = el)}
        className="absolute top-[40%] right-[40%] w-12 h-12 bg-purple-300 opacity-50"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)" }} 
      />
      <div
        ref={(el) => (shapeRefs.current[7] = el)}
        className="absolute top-[45%] right-[60%] w-16 h-16 bg-blue-300 opacity-50"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />
      <div
        ref={(el) => (shapeRefs.current[12] = el)}
        className="absolute top-[50%] left-[30%] w-24 h-12 bg-orange-400 opacity-40"
        style={{ clipPath: "polygon(0% 50%, 100% 0%, 100% 100%, 0% 50%)" }} 
      />
      <div
        ref={(el) => (shapeRefs.current[13] = el)}
        className="absolute top-[60%] left-[20%] w-20 h-20 bg-teal-400 opacity-30"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 30% 100%)" }} 
      />

      {/* 更多散落在下方 */}
      <div
        ref={(el) => (shapeRefs.current[8] = el)}
        className="absolute bottom-[15%] left-[10%] w-14 h-14 bg-orange-300 rounded-full opacity-50"
      />
      <div
        ref={(el) => (shapeRefs.current[9] = el)}
        className="absolute bottom-[20%] left-[30%] w-24 h-24 bg-teal-300 rounded-full opacity-20"
      />
      <div
        ref={(el) => (shapeRefs.current[10] = el)}
        className="absolute bottom-[10%] right-[15%] w-16 h-16 bg-blue-300 rounded-full opacity-50"
      />
      <div
        ref={(el) => (shapeRefs.current[11] = el)}
        className="absolute bottom-[25%] right-[8%] w-8 h-8 bg-red-300 rounded-full opacity-70"
      />
      <div
        ref={(el) => (shapeRefs.current[14] = el)}
        className="absolute bottom-[10%] left-[50%] w-12 h-12 bg-lime-400 opacity-60"
        style={{ clipPath: "polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)" }} 
      />
    </div>
  );
};

export default FloatingBackground;