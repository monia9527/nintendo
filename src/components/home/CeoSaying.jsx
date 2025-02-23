import React from "react";
import { motion } from "framer-motion";
import leadership from "../../assets/ceo.jpg";

const nintendoBg =
  "https://cdn-ak.f.st-hatena.com/images/fotolife/t/tsuruga_mega/20230506/20230506172709.jpg";

// 父级容器：控制子元素依次播放动画
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      // 子元素依次延迟出现
      staggerChildren: 0.2,
    },
  },
};

// 1. 照片动画：从左侧滑入
const photoVariants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 2. 标题动画：从上方滑入
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 3. 第一段文字动画：从右侧滑入 + 轻微旋转
const paragraph1Variants = {
  hidden: { opacity: 0, x: 80, rotate: 2 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 4. 第二段文字动画：自下而上弹性进入
const paragraph2Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 5. 第三段文字动画：从左侧滑入
const paragraph3Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const NintendoCEOSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* 背景图片：全屏覆盖 + 半透明 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${nintendoBg})` }}
      />

      {/* 内容容器：相对定位到前景；使用 whileInView 来滚动触发动画 */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 max-w-3xl p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} // 只播放一次，可去掉once让其每次进入视窗都播放
      >
        {/* 照片 */}
        <motion.div variants={photoVariants}>
          <div className="overflow-hidden rounded-2xl border border-gray-200 p-2 shadow-md inline-block">
            <img
              src={leadership}
              alt="古川俊太郎 - 任天堂CEO"
              className="h-auto w-60 rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        {/* 标题 */}
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          variants={headingVariants}
        >
          古川俊太郎 - 任天堂 CEO
        </motion.h1>

        {/* 段落 1 */}
        <motion.p
          className="text-xl leading-relaxed text-gray-800"
          variants={paragraph1Variants}
        >
          古川俊太郎（Shuntaro Furukawa）は2018年より任天堂の代表取締役社長兼 CEO を務めています。
          1994年に任天堂に入社し、さまざまな事業部門で経験を積み、
          世界のゲーム業界の変化やプレイヤーのニーズを深く理解してきました。
        </motion.p>

        {/* 段落 2 */}
        <motion.p
          className="text-xl leading-relaxed text-gray-800"
          variants={paragraph2Variants}
        >
          彼は「プレイヤーとともに楽しむ」理念を大切にし、
          ユーザーエクスペリエンスを最優先に考えています。
          新しいハードウェアや革新的なゲーム開発を推進し、
          幅広い世代のプレイヤーに楽しさと驚きを提供することを目指しています。
        </motion.p>

        {/* 段落 3 */}
        <motion.p
          className="text-xl leading-relaxed text-gray-800"
          variants={paragraph3Variants}
        >
          古川氏のリーダーシップのもと、任天堂は技術の進化、新たなプラットフォームの開拓、
          そしてゲームの品質と創造性の追求を続けています。
          これにより、任天堂は世界中の多くのファンに支持される存在となっています。
        </motion.p>
      </motion.div>
    </section>
  );
};

export default NintendoCEOSection;