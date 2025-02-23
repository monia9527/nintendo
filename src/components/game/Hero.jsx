import React from "react";
import { motion } from "framer-motion";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoCardOutline } from "react-icons/io5";
import { gameVideo } from "../../utils";

//把文本拆分为字符，用于逐字动画
const splitText = (text) => {
  return text.split("");
};

//文本容器动画：控制整体出现 & staggerChildren
const textContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // 让子元素（字符、行）依次出现
      staggerChildren: 0.05,
    },
  },
};

//子元素动画：每个字符/行从下往上淡入
const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* 全屏背景视频 (z-0) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={gameVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* 遮罩层 (z-10) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* 文字内容 - 居中布局 (z-20) */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-4">
        {/* 文本容器：可以 staggerChildren */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="show"
          className="text-center max-w-2xl mx-auto space-y-6"
        >
          {/* 主标题 - 逐字动画 */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold uppercase flex items-center justify-center gap-2 flex-wrap"
            variants={childVariants}
          >
            {splitText("楽しい").map((char, i) => (
              <motion.span key={i} variants={childVariants}>
                {char}
              </motion.span>
            ))}
            <motion.span
              className="text-black w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              variants={childVariants}
              whileHover={{
                y: [0, -10, 0],
                transition: {
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <BsNintendoSwitch />
            </motion.span>
          </motion.h1>

          {/* 副标题  */}
          <motion.h2
            className="text-3xl md:text-5xl font-semibold uppercase text-white"
            variants={childVariants}
          >
            Nintendo ゲーム
          </motion.h2>

          {/* 描述性文本 */}
          <motion.p
            className="text-base md:text-lg text-white px-2 md:px-0"
            variants={childVariants}
          >
            伝説の冒険と革新的な体験を、Nintendoからお届けします。クラシックな名作から最新の傑作まで、果てしない楽しみの世界へあなたを誘います。
          </motion.p>

          {/* 按钮  悬浮缩放 & 图标上下跳动 */}
          <motion.button
            className="mt-4 flex items-center gap-3 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold"
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              whileHover={{
                y: [0, -5, 0],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <IoCardOutline size={20} />
            </motion.span>
            今すぐチェック
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
