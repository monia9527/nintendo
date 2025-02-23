import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import { styles } from "../styles/styles";
import { textVariant } from "../../utils/motion";
import "react-vertical-timeline-component/style.min.css";

import FloatingBackground from "../home/FloatingBackground";

const History = () => {
  const HistoryCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ff0000",
        color: "#fff", 
        border: "4px solid #ff0000", 
      }}
      contentArrowStyle={{ borderRight: "7px solid #ff0000" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc space-y-2">
        {experience.points.map((point, idx) => (
          <li
            key={`experience-point-${idx}`}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );

  return (
    <div className="relative z-0 w-full min-h-screen bg-white">
      {/* 背景动画 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingBackground />
      </div>

      {/* 动画 */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        className="w-full text-center mb-10"
      >
        <p className={styles.sectionSubText}>任天堂の歴史</p>
        <h2 className={styles.sectionHeadText}>Nintendo ヒストリー</h2>
        {/* 説明 */}
        <p className="text-gray-600 text-lg mt-4 px-5">
          1889年の創業以来、任天堂は伝統的な花札メーカーから世界をリードするゲームエンターテイメント企業へと成長しました。
          画期的なゲームコンセプトと卓越した技術を通じて、世界中のプレイヤーに多くの名作を届けてきました。
        </p>
        <p className="text-gray-600 text-lg mt-2 px-5">
          初代家庭用ゲーム機「ファミリーコンピュータ」から現在の「Nintendo Switch」まで、
          任天堂は常にプレイヤーに楽しさを提供し、多くの人々の子供時代の思い出の一部となっています。
        </p>
      </motion.div>

      <div className="relative z-10 w-full mx-auto">
        <VerticalTimeline lineColor="#b3b3b3">
          {experiences.map((experience, index) => ( 
            <HistoryCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default History;