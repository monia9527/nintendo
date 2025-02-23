import { useState } from "react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("送信されたデータ：", formData);
    // 提交后清空表单
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="pt-24 pb-12 bg-white z-40 relative">
      <div className="container mx-auto">
        {/* 标题部分（与 NintendoSupport 对齐，去掉文字动画） */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-2 bg-red-500 mr-4"></div>
          <h3 className="text-3xl font-bold text-gray-800">お問い合わせ</h3>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 左侧：信息区 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              あなたの声を聞かせてください
            </h2>
            <p className="text-lg text-gray-700">
              製品やサービスに関するご意見、ご質問がございましたら、
              お気軽にお問い合わせください。
            </p>
            <p className="text-base text-gray-600">
              私たちはお客様の声を大切にし、より良い体験を提供できるよう努めています。
            </p>
          </div>

          {/* 右侧：表单，保留表单自身的动画示例 */}
          <motion.form
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* お名前 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                お名前
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="お名前を入力してください"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* メールアドレス */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="メールアドレスを入力してください"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* メッセージ */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                メッセージ
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="メッセージを入力してください"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* 送信ボタン */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg"
            >
              送信する
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;