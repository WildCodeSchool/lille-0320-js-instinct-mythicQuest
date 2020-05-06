import React, { useEffect, useState } from "react";
import { coins_source, coins_size } from "../Constants/Constants";

const Coins = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    setX(getRandomNum());
    setY(getRandomNum());
  }, []);

  const getRandomNum = () => {
    const min = 1;
    const max = 570;
    let num = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return num;
  };

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        backgroundImage: `url(${coins_source})`,
        backgroundPosition: `${coins_size * 4}px 0`,
        width: `${coins_size}px`,
        height: `${coins_size}px`,
      }}
    ></div>
  );
};

export default Coins;
