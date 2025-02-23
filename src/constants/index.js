import nintendo1 from "../assets/nintendo1.png";
import nintendo2 from "../assets/nintendo2.png";
import nintendo3 from "../assets/nintendo3.png";
import nintendo4 from "../assets/nintendo4.png";

import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils/index";

import "../index.css";

export const experiences = [
  {
    title: "任天堂の創業期",
    company_name: "任天堂",
    icon: nintendo1,
    iconBg: "#D9E6F2",
    date: "1889年 - 1950年代",
    points: [
      "1889年、山内房治郎によって京都で創業。当初は花札やトランプの製造を行っていた。",
      "1929年、山内積良が二代目社長に就任。製品ラインを拡大し、国内外のトランプ市場で成功を収めた。",
      "1950年代には、任天堂のトランプが日本で大ヒット。特に、プラスチック製トランプの発売が大きな転機となった。",
      "この時期、任天堂はトランプ製造会社としての地位を確立した。",
    ],
  },
  {
    title: "ゲーム市場への進出",
    company_name: "任天堂",
    icon: nintendo2,
    iconBg: "#F5E1B2",
    date: "1960年代 - 1980年代前半",
    points: [
      "1960年代、玩具業界に進出し、『ウルトラハンド』などのヒット商品を生み出した。",
      "1970年代、電子ゲーム事業に着手。『ゲーム＆ウオッチ』シリーズが大成功を収める。",
      "1981年にはアーケードゲーム『ドンキーコング』が大ヒットし、世界中で任天堂の名が知られるようになった。",
      "1983年、ファミリーコンピュータ（ファミコン）を発売し、家庭用ゲーム機市場に革命を起こした。",
    ],
  },
  {
    title: "世界的な成功と多様化",
    company_name: "任天堂",
    icon: nintendo3,
    iconBg: "#CDE9C5",
    date: "1990年代",
    points: [
      "1990年、『スーパーファミコン』を発売し、家庭用ゲーム機市場での地位をさらに強化した。",
      "1996年、3Dポリゴンを活用した『ニンテンドー64』と『スーパーマリオ64』を発売し、ゲームの可能性を拡大。",
      "『ポケットモンスター』シリーズが世界中で社会現象となり、任天堂のブランドをさらに強固なものとした。",
      "この時期、ゲーム機やソフトウェア開発における技術革新を進め、エンターテインメントの多様化を実現した。",
    ],
  },
  {
    title: "イノベーションと新時代",
    company_name: "任天堂",
    icon: nintendo4,
    iconBg: "#E3C8DE",
    date: "2000年代 - 現在",
    points: [
      "2006年、『Wii』を発売し、直感的な操作を可能にするモーションコントローラーが話題に。",
      "2011年、『ニンテンドー3DS』を発売し、裸眼での3D体験を提供。",
      "2017年、家庭用と携帯用を兼ね備えた『Nintendo Switch』を発売し、爆発的なヒットを記録。",
      "現在も、ソフトウェアとハードウェアの両面で革新を続け、ゲーム業界のリーダーとして活躍している。",
    ],
  },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "新しいマテリアル。",
      "洗練されたデザイン。",
      "より耐久性のあるUSB-Cポート。",
    ],
    video: highlightFirstVideo,
    videoDuration: 8,
  },
  {
    id: 2,
    textLists: [
      "革新的な冷却システム。",
      "高性能を支える新設計。",
      "よりスマートな接続体験。",
    ],
    video: highlightSecondVideo,
    videoDuration: 4,
  },
  {
    id: 3,
    textLists: [
      "進化した一体型スタンド。",
      "さらに安定したプレイ環境。",
      "どこでも快適にゲームを。",
    ],
    video: highlightThirdVideo,
    videoDuration: 10,
  },
  {
    id: 4,
    textLists: [
      "まったく新しいコントローラー。",
      "さらに握りやすく、さらに快適。",
      "あなたのプレイスタイルに最適。",
    ],
    video: highlightFourthVideo,
    videoDuration: 17,
  },
];

export const sizes = [
  { label: "Switch", value: "small" },
  { label: "Switch OLED", value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
