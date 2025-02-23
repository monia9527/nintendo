import React from "react";
import { motion } from "framer-motion";

//背景漂浮形状组件 
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 半透明大圆形 */}
      <motion.div
        className="absolute w-48 h-48 bg-green-300 opacity-30 rounded-full top-20 left-10 z-0"
        initial={{ x: -100, y: 0, scale: 0.8 }}
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
          scale: [0.8, 1, 0.8],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* 另一个大圆形 */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-300 opacity-40 rounded-full bottom-10 right-20 z-0"
        initial={{ x: 100, y: 0, scale: 1 }}
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

//父容器动画 
const parentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

//每个 item 的进入动画 
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

//行级遮罩动画
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

// 图片动画 variants
const imageContainerVariants = (delay) => ({
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

// HotGame 组件 
const MainSplatoon = () => {
  const splatoonData = [
    {
      id: 1,
      img: "https://cn.nikkei.com/images/2022/09/0913/0913-10-L.jpg",
      title: "ゲーム発売日",
      content: [
        { text: "スプラトゥーン3", style: "text-7xl font-bold text-darkGreen" },
        { text: "2022年9月9日", style: "text-5xl font-semibold text-red-600" },
        {
          text: "世界同時発売、新たな冒険を始めよう！",
          style: "text-4xl text-base text-gray-700",
        },
      ],
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/UYU9uJJdUrk/maxresdefault.jpg",
      title: "ゲーム内容",
      content: [
        { text: "新モード", style: "text-7xl font-bold text-darkGreen" },
        {
          text: "ナワバリバトル、ヒーローモード、サーモンラン",
          style: "text-5xl font-semibold text-blue-500",
        },
        {
          text: "混沌の街を探索し、新たな可能性を発見！",
          style: "text-4xl text-base text-gray-700",
        },
      ],
    },
    {
      id: 3,
      img: "https://gao7pic.gao7.com/106e7c8f7cbc479aad9fd6cada5e27a7.jpg",
      title: "メディア評価",
      content: [
        {
          text: "年間最優秀マルチプレイゲーム",
          style: "text-5xl font-bold text-darkGreen",
        },
        {
          text: "Metacriticスコア：87",
          style: "text-3xl font-semibold text-red-500",
        },
        {
          text: "革新的なゲームプレイが多くのメディアで高評価！",
          style: "text-xl text-gray-700",
        },
      ],
    },
    {
      id: 4,
      img: "https://image.sofmap.com/images/product/pim/4902370550337_A04.jpg?v=20012201",
      title: "ゲームプレイ",
      content: [
        { text: "プレイヤーの選択", style: "text-7xl font-bold text-darkGreen" },
        {
          text: "ヒーローモード、マルチモード、ナワバリバトル",
          style: "text-5xl font-semibold text-blue-500",
        },
        {
          text: "多彩なゲームモード、自由度の高いプレイ！",
          style: "text-4xl text-gray-700",
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
          <h3 className="text-3xl font-bold text-gray-800">Splatoon 3 紹介</h3>
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
        {splatoonData.map((game, index) => (
          <motion.div
            key={game.id}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center gap-12`}
            variants={itemVariants}
          >
            {/* 图片部分 */}
            <motion.div
              className="relative w-1/2 h-[350px] md:h-[450px] overflow-hidden group"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
              }}
              variants={imageContainerVariants(index * 0.2)}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={game.img}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>

            {/* 文字部分 */}
            <div className="w-1/2 text-left space-y-6">
              <RevealLine
                text={game.title}
                className="text-4xl md:text-5xl font-bold text-darkGreen mb-4 block"
              />
              {game.content.map((line, idx) => (
                <RevealLine
                  key={idx}
                  text={line.text}
                  className={`${line.style} block`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MainSplatoon;