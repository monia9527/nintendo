import React from "react";
import { motion } from "framer-motion";
import zeldaImg1 from "../../../assets/zelda.webp";
import zeldaImg2 from "../../../assets/zelda2.webp";
import zeldaImg3 from "../../../assets/zelda4.jpg";  
import zeldaImg4 from "../../../assets/zelda3.webp";



const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-48 h-48 bg-purple-300 opacity-30 rounded-full top-20 left-10 z-0"
        initial={{ x: -80, y: 0, scale: 0.7 }}
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
          scale: [0.7, 1, 0.7],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-yellow-300 opacity-40 rounded-full bottom-10 right-20 z-0"
        initial={{ x: 80, y: 0, scale: 1 }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

// 父容器动画
const parentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

// 每个 item 的进入动画
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// 行级遮罩动画
const lineVariants = {
  hidden: {},
  show: {},
};

const textVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      times: [0, 0.4, 0.45, 1],
    },
  },
};

const maskVariants = {
  hidden: { width: "0%", left: "0%" },
  show: {
    width: ["0%", "100%", "100%", "100%"],
    left: ["0%", "0%", "0%", "100%"],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      times: [0, 0.4, 0.4, 1],
    },
  },
};

const RevealLine = ({ text, className = "" }) => {
  return (
    <motion.div
      className="relative overflow-hidden inline-block align-middle"
      variants={lineVariants}
    >
      {/* 文字 */}
      <motion.span
        style={{ position: "relative", zIndex: 5 }}
        variants={textVariants}
        className={className}
      >
        {text}
      </motion.span>
      {/* 遮罩矩形 */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "0%",
          backgroundColor: "#f72585",
          zIndex: 10,
        }}
        variants={maskVariants}
      />
    </motion.div>
  );
};

const imageContainerVariants = (delay) => ({
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

//ZeldaGame 组件 
const ZeldaGame = () => {
  const zeldaData = [
    {
      id: 1,
      img: zeldaImg1,
      imgStyle: { width: '200px', height: 'auto' },
      title: "ゲーム概要",
      content: [
        { text: "ゼルダの伝説", style: "text-7xl font-bold text-green-600" },
        { text: "ブレス オブ ザ ワイルド", style: "text-5xl font-semibold text-red-600" },
        {
          text: "広大な世界で自由に冒険！",
          style: "text-4xl text-gray-700",
        },
      ],
    },
    {
      id: 2,
      img: zeldaImg2,
      imgStyle: { width: '300px', height: 'auto' },
      title: "特徴",
      content: [
        { text: "オープンワールド", style: "text-6xl font-bold text-green-700" },
        {
          text: "祠、塔、神獣、料理システム",
          style: "text-4xl font-semibold text-blue-500",
        },
        {
          text: "新たな発見に満ちたハイラルを満喫しよう！",
          style: "text-3xl text-gray-700",
        },
      ],
    },
    {
      id: 3,
      img: zeldaImg3,
      title: "受賞歴",
      content: [
        {
          text: "Game of The Year 2017",
          style: "text-5xl font-bold text-green-700",
        },
        {
          text: "数多くのレビューサイトで高得点",
          style: "text-3xl text-red-500",
        },
        {
          text: "世界中のプレイヤーから圧倒的支持！",
          style: "text-2xl text-gray-700",
        },
      ],
    },
    {
      id: 4,
      img: zeldaImg4,
      title: "続編",
      content: [
        { text: "ティアーズ オブ ザ キングダム", style: "text-5xl font-bold text-green-600" },
        {
          text: "さらなる新要素、新しい冒険が待っている",
          style: "text-3xl font-semibold text-blue-500",
        },
      ],
    },
  ];

  return (
    <section className="py-16 relative bg-white">
      {/* 浮动背景形状 */}
      <FloatingShapes />

      {/* 标题部分：红色矩形 + 标题 */}
      <div className="container mx-auto mb-8 relative z-10">
        <div className="flex items-center">
          <div className="w-8 h-2 bg-red-500 mr-4" />
          <h3 className="text-3xl font-bold text-gray-800">ゼルダの伝説 紹介</h3>
        </div>
      </div>

      {/* 内容动画 */}
      <motion.div
        className="container mx-auto grid grid-cols-1 gap-12 relative z-10"
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {zeldaData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center gap-12`}
            variants={itemVariants}
          >
            {/* 图片：三角形剪切 */}
            <motion.div
              className="relative w-1/2 h-[350px] md:h-[450px] overflow-hidden group"
              style={{
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
              variants={imageContainerVariants(index * 0.2)}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>

            {/* 文本动画部分 */}
            <div className="w-1/2 text-left space-y-6">
              <RevealLine
                text={item.title}
                className="text-4xl md:text-5xl font-bold text-green-700 mb-4 block"
              />
              {(item.content || []).map((line, idx) => (
                <RevealLine key={idx} text={line.text} className={`${line.style} block`} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ZeldaGame;