import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Nintendo Switchの保証期間はどのくらいですか？",
    answer: "保証期間は通常1年間ですが、Nintendo Switch Onlineに加入すると延長保証オプションが利用可能です。",
  },
  {
    question: "Joy-Conのドリフト問題を修理できますか？",
    answer: "はい、Nintendo公式サポートを通じて無償修理の対象になる場合があります。",
  },
  {
    question: "データのバックアップはどのように行いますか？",
    answer: "Nintendo Switch Onlineのクラウドバックアップ機能を利用することでデータを保護できます。",
  },
  {
    question: "Nintendoアカウントを復旧するには？",
    answer: "公式サイトのアカウントリカバリーページから、メールアドレスを使用して復旧できます。",
  },
  {
    question: "Nintendo Switchのバッテリー持ちはどのくらい？",
    answer: "モデルによりますが、通常4〜9時間のバッテリー持ちです。",
  },
  {
    question: "購入後の返品・交換は可能ですか？",
    answer: "購入後7日以内であれば、未開封の場合に限り交換が可能です。ただし、返品ポリシーは販売店舗により異なります。",
  },
  {
    question: "Nintendo Switchでエラーコードが出た場合の対処法",
    answer: "エラーコードごとに異なりますが、インターネット接続を確認し、公式サポートページで詳細を確認してください。",
  },
  {
    question: "ソフトのダウンロードが遅い・進まない時の解決策",
    answer: "Wi-Fi接続を確認し、ルーターを再起動してください。また、他の機器の使用状況によっても影響を受けることがあります。",
  },
  {
    question: "Nintendo eShopの支払い方法は何がありますか？",
    answer: "クレジットカード、プリペイドカード、PayPalなどが利用可能です。地域によって異なる場合があります。",
  },
  {
    question: "コントローラーの接続が切れる場合の解決策",
    answer: "Bluetooth接続の干渉が原因の可能性があります。近くの電波干渉源を避け、Switchを再起動してみてください。",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-24 pb-12 bg-white z-40 relative">
      <div className="container mx-auto">
        {/* 标题部分（与 NintendoSupport 对齐） */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-2 bg-red-500 mr-4"></div>
          <h3 className="text-3xl font-bold text-gray-800">よくある質問</h3>
        </div>

        {/* FAQ 列表 */}
        <div className="w-full max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* 问题部分 */}
              <button
                className="w-full text-left flex items-center justify-between py-4 px-6 text-blue-500 font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-blue-500" />
                </motion.span>
              </button>

              {/* 答案部分（折叠） */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-700">{item.answer}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;