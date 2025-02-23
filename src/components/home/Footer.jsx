import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">ニンテンドーストア</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                ニンテンドースイッチ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                ゲーム
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                アクセサリー
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                ニンテンドーeショップ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                マイニンテンドー
              </a>
            </li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">カスタマーサポート</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                サポートホーム
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                ニンテンドースイッチのヘルプ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                修理サービス
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                保証サービス
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">任天堂について</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                会社情報
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                採用情報
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                投資家向け情報
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                プレスセンター
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                イベント情報
              </a>
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">コミュニティ</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                マイニンテンドー
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                フォーラム
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                ニンテンドーニュースレター
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-base hover:text-[#f6e05e] hover:underline hover:scale-105 transition-all duration-300"
              >
                開発者向けポータル
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 線 */}
      <div className="border-t border-gray-300 my-8"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
        <p className="text-center md:text-left text-white text-base">
          &copy; {new Date().getFullYear()} 任天堂. All rights reserved.
        </p>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-[#f6e05e] hover:underline transition-all duration-300">プライバシーポリシー</a></li>
          <li><a href="#" className="text-white hover:text-[#f6e05e] hover:underline transition-all duration-300">利用規約</a></li>
          <li><a href="#" className="text-white hover:text-[#f6e05e] hover:underline transition-all duration-300">販売と払い戻し</a></li>
          <li><a href="#" className="text-white hover:text-[#f6e05e] hover:underline transition-all duration-300">法律</a></li>
          <li><a href="#" className="text-white hover:text-[#f6e05e] hover:underline transition-all duration-300">サイトマップ</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;