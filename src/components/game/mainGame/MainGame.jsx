import React from "react";
import Hero from "../Hero";
import HotGame from "../HotGame";
import MainZelda from "../Zelda/MainZelda";
import MainSplatoon from "../splatoon 3/MainSplatoon";


const MainGame = () => {
  return (
    <>
      <Hero />
      <HotGame />
      <MainSplatoon />
      <MainZelda />
    </>
  );
};

export default MainGame;
