import React from "react";
import { coins_source, coins_size } from "../Constants/Constants";

const Coins = () => {
  const getRandomNum = () => {
    const min = 1;
    const max = 570;
    let num = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return num;
  };

  let x = getRandomNum();
  let y = getRandomNum();

  return (
    <div
      style={{
        position: "relative",
        top: y,
        left: x,
        backgroundImage: `url(${coins_source})`,
        backgroundPosition: `${
          coins_size * (Math.floor(Math.random() * 7) + 0)
        }px 0`,
        width: `${coins_size}px`,
        height: `${coins_size}px`,
      }}
    ></div>
  );
};

export default Coins;
