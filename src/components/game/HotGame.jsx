import React from "react";
import { motion } from "framer-motion";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const MainSplatoon = () => {
  const hotGames = [
    {
      id: 1,
      name: "マリオカート8 デラックス",
      img: "https://lh5.googleusercontent.com/proxy/5I4H2kRwV8PSzZP0PmHTShTKB9m9SwigHB9GgDvKgD5z1dDD0e-Vfnb3yDmjKyKZcDYH0K8-3IMp0C6vgc6Idboaz6LoVDxV6upCaCZ-keR7eZrAgzN7h_wOmF35-6gDGahRf_8isB899MHlMRPPyH67",
      price: "8999",
      delay: 0.2,
      recommendation: 95,
      comment: "とても刺激的で、友達との集まりに最適！",
    },
    {
      id: 2,
      name: "ゼルダの伝説 ブレス オブ ザ ワイルド",
      img: "https://gamefaqs.gamespot.com/a/box/6/6/3/599663_front.jpg",
      price: "7499",
      delay: 0.4,
      recommendation: 98,
      comment: "美しいグラフィックと広大なオープンワールドが魅力的！",
    },
    {
      id: 3,
      name: "ポケットモンスター サン＆ムーン",
      img: "https://img.shoplineapp.com/media/image_clips/62d529e5c60370001d40fe08/original.png?1658137061",
      price: "6299",
      delay: 0.6,
      recommendation: 90,
      comment: "クラシックなポケモンの遊び方と、魅力的なストーリー！",
    },
    {
      id: 4,
      name: "スプラトゥーン3",
      img: "https://cdn.max-c.com/console/switch/screenshot/70010000046394/c012c4102cb742ba8b5ce9a6f4f221a0",
      price: "6270",
      delay: 0.8,
      recommendation: 96,
      comment: "オンライン対戦で、カラフルなシューティング体験！",
    },
    {
      id: 5,
      name: "あつまれ どうぶつの森",
      img: "https://img.shoplineapp.com/media/image_clips/64acc768910c940023c0cfa4/original.jpg?1689044839",
      price: "6579",
      delay: 1.0,
      recommendation: 93,
      comment: "ほっこり癒される、ゆったりとした島暮らしを楽しもう。",
    },
    {
      id: 6,
      name: "ファイアーエムブレム 風花雪月",
      img: "https://th.bing.com/th/id/R.2e68ddd78874f2ca871f892a2132dc09?rik=w3g9fh90VjRMIg&riu=http%3a%2f%2fcdn02.nintendo-europe.com%2fmedia%2fimages%2f11_square_images%2fgames_18%2fnintendo_switch_5%2fSQ_NSwitch_FireEmblemThreeHouses.jpg&ehk=JwahdzLZZVmR4fIZ33n4bDixJQs9H4%2fCJLdYo0QKJIk%3d&risl=&pid=ImgRaw&r=0",
      price: "6980",
      delay: 1.2,
      recommendation: 97,
      comment: "クラシックなシミュレーションRPG、豊富なストーリー！",
    },
    {
      id: 7,
      name: "スーパーマリオ オデッセイ",
      img: "https://images-shanwan-50-cdn.shanwan.cn/archive/icon/20230317/186/logo603f4ed8d55ae44c666877094f0d016320230317VUDHYh.jpg",
      price: "6578",
      delay: 1.4,
      recommendation: 94,
      comment: "革新的な3Dマリオ、クラシックを超える体験！",
    },
    {
      id: 8,
      name: "ゼルダの伝説 王国の涙",
      img: "https://shoplineimg.com/5834a34c617069b405901400/63e617e7565971000e38ba69/800x.jpg?",
      price: "7900",
      delay: 1.6,
      recommendation: 99,
      comment: "今年度の続編、さらなる驚きをあなたに！",
    },
    {
      id: 9,
      name: "ゼノブレイド2",
      img: "https://lh4.googleusercontent.com/proxy/XjhoPpPq5BJ2jKm0cG-CNB3N9ORu3BCB9O4lslvdn_SnbvxAgHtF3UflZauxM9ptNxT5Z51f7YV6vTY0uWrA6gp2IMJpJBHOEIbCHIAX5PsK4UpsDgi0RIP9zfeDob1vyS8y4rLH3t9K4ZC0PrwGuVh_FA",
      price: "3980",
      delay: 1.8,
      recommendation: 99,
      comment: "全く新しい視点で、全く新しい体験を！",
    },
  ];

  // 动画配置函数
  const playfulAnimation = (delay) => ({
    hidden: {
      scale: 0.5,
      rotate: -30,
      opacity: 0,
    },
    show: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.6,
        delay: delay,
      },
    },
  });

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto">
        {/* 标题区域 */}
        <div className="flex items-center mb-8">
          {/* 红色长方形 */}
          <div className="w-8 h-2 bg-red-500 mr-4"></div>
          <h3 className="text-3xl font-bold text-gray-800 uppercase">
            人気ゲームストア
          </h3>
        </div>

        {/* 游戏卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotGames.map((game) => (
            <motion.div
              key={game.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4 pb-16 relative"
              variants={playfulAnimation(game.delay)}
              initial="hidden"
              whileInView="show"
            >
              {/* 图片 */}
              <motion.img
                src={game.img}
                alt={game.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* 游戏信息 */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-gray-800">{game.name}</h4>
                <p className="text-sm text-gray-600">
                  推奨率：
                  <span className="font-semibold">{game.recommendation}%</span>
                </p>
                <p className="text-lg font-bold text-yellow-500">
                  {game.price}円
                </p>
                <p className="text-sm text-gray-500 italic">“{game.comment}”</p>
              </div>

              {/* 购买按钮 */}
              <button
                className="absolute bottom-4 right-4 p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                title="今すぐ購入"
              >
                <MdOutlineAddShoppingCart className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSplatoon;
