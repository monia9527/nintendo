import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GameSquare({ hoveredBox, setHoveredBox }) {
  const navigate = useNavigate();

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const renderContent = (box) => {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-full w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-4xl font-bold mb-4 text-red-500">
          {box === "NS" ? "Nintendo Switch" : "エピックゲーム"}
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          {box === "NS"
            ? "家庭でも外出先でも、究極のコンソール体験を。"
            : "美麗な映像と広大な世界に飛び込もう。"}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {box === "NS"
            ? "Nintendo独占タイトルを発見しよう。"
            : "無限の冒険が待っています。友達と挑戦するも、一人でも楽しめる。"}
        </p>
        <button
          onClick={() => navigate(box === "NS" ? "/switch" : "/game")}
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-600 transition"
        >
          {box === "NS" ? "詳細を見る" : "今すぐ購入"}
        </button>
      </motion.div>
    );
  };

  return (
    <div className="flex w-4/5 h-[500px] border-4 border-black rounded-lg relative overflow-hidden shadow-md">
      {/* 左半 - Switch */}
      <motion.div
        className="flex flex-col items-center justify-center w-1/2 h-full border-r border-gray-300 relative overflow-hidden"
        style={{ backgroundColor: hoveredBox === "left" ? "#f8f8f8" : "#ffffff" }}
        onMouseEnter={() => setHoveredBox("left")}
        onMouseLeave={() => setHoveredBox(null)}
        animate={{ flex: hoveredBox === "left" ? 3 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {hoveredBox === "left" ? (
          renderContent("NS")
        ) : (
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="mb-3 text-red-500"
            >
              <BsNintendoSwitch size={64} />
            </motion.div>
            <h1 className="text-3xl font-bold">Nintendo Switch</h1>
            <p className="text-lg text-gray-600 mt-2">
              家庭でも外出先でもプレイ可能
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* 右半 - Game */}
      <motion.div
        className="flex flex-col items-center justify-center w-1/2 h-full"
        style={{ backgroundColor: hoveredBox === "right" ? "#f8f8f8" : "#ffffff" }}
        onMouseEnter={() => setHoveredBox("right")}
        onMouseLeave={() => setHoveredBox(null)}
        animate={{ flex: hoveredBox === "right" ? 3 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {hoveredBox === "right" ? (
          renderContent("GAME")
        ) : (
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="mb-3 text-blue-500"
            >
              <FaGamepad size={64} />
            </motion.div>
            <h1 className="text-3xl font-bold">エピックアドベンチャー</h1>
            <p className="text-lg text-gray-600 mt-2">
              新しい世界へ飛び込もう
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default function EnhancedGameSquare() {
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div
      className="
        relative w-full 
        mt-[250px] 
        mb-[250px]  
        h-[800px] 
        bg-white 
        overflow-hidden 
        flex flex-col 
        items-center 
        justify-center
      "
      style={{ border: "1px solid #ccc" }} 
    >
      {/* 左上角平行四辺形 */}
      <motion.div
        className="absolute top-2 left-[-150px] h-8 bg-red-500"
        style={{
          transform: "skewX(-30deg)",
          width: "250px",
        }}
        initial={{ x: 0 }}
        animate={{ x: 650 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* 右下角平行四辺形 */}
      <motion.div
        className="absolute bottom-2 right-[-150px] h-8 bg-red-500"
        style={{
          transform: "skewX(-30deg)",
          width: "250px",
        }}
        initial={{ x: 0 }}
        animate={{ x: -600 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* 中央*/}
      <GameSquare hoveredBox={hoveredBox} setHoveredBox={setHoveredBox} />
    </div>
  );
}