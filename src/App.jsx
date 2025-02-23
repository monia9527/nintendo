import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Navber from "./components/home/Navber";
import Home from "./components/home/mainJsx/Home";
import Switch from "./components/switch/mainJsx/Switch";
import Game from "./components/game/mainGame/MainGame";
import Support from "./components/support/mainJsx/MainSupport";
import Footer from "./components/home/Footer";
import ScrollToTop from "./components/home/ScrollToTop"; 
import ButtonMenu from "./components/home/ButtonMenu";

const App = () => {
  return (
    <>
      {/* 导航栏固定在顶部 */}
      <Navber />
      
      {/* 每次路由切换时滚动到顶部 */}
      <ScrollToTop />
      {/* 自动顶部按钮 */}
      <ButtonMenu />

      {/* 路由切换区 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/game" element={<Game />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
