import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaQuestionCircle, FaShieldAlt } from "react-icons/fa";
import { IoAccessibility, IoPersonCircle, IoSync } from "react-icons/io5";

const NintendoSupport = () => {
  const supportInfo = [
    {
      id: 1,
      title: "修理サービス",
      icon: <FaTools />,
      delay: 0.2,
      content: "Nintendo製品の修理を受け付けています。公式サポートで安心！",
    },
    {
      id: 2,
      title: "よくある質問 (FAQ)",
      icon: <FaQuestionCircle />,
      delay: 0.4,
      content: "困ったときは？Nintendo製品に関するFAQをチェックしよう。",
    },
    {
      id: 3,
      title: "カスタマーサポート",
      icon: <IoAccessibility />,
      delay: 0.6,
      content: "お困りの際は、公式サポートチームへお問い合わせください。",
    },
    {
      id: 4,
      title: "保証サービス",
      icon: <FaShieldAlt />,
      delay: 0.8,
      content: "Nintendo製品の保証状況を確認し、保証申請を行えます。",
    },
    {
      id: 5,
      title: "アカウントの問題",
      icon: <IoPersonCircle />,
      delay: 1.0,
      content: "Nintendoアカウントに関するサポート。ログイン、設定、復旧など。",
    },
    {
      id: 6,
      title: "データ復旧",
      icon: <IoSync />,
      delay: 1.2,
      content: "ゲームデータの復旧やクラウドバックアップのサポート。",
    },
  ];

  // 卡片入场动画（缩放 & 淡入）
  const cardVariants = (delay) => ({
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  return (
    <section className="pt-24 pb-12 bg-white z-40 relative">
      <div className="container mx-auto">
        {/* 标题部分 */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-2 bg-red-500 mr-4"></div>
          <h3 className="text-3xl font-bold text-gray-800">Nintendo サポート</h3>
        </div>

        {/* 卡片列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {supportInfo.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              variants={cardVariants(item.delay)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* 图标部分 */}
              <motion.div
                className="w-20 h-20 flex items-center justify-center text-4xl text-red-500 bg-red-100 rounded-full mb-4"
                whileHover={{ rotate: 20 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              >
                {item.icon}
              </motion.div>

              {/* 标题 */}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>

              {/* 介绍文字 */}
              <p className="text-gray-600 text-sm">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NintendoSupport;