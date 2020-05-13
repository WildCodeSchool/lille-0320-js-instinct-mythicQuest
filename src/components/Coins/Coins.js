import React from "react";
import { coins_size } from "../Constants/Constants";

const Coins = ({ x, y, display, source }) => {
  return (
    <div
      style={{
        display: display,
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
        backgroundImage: `url(${source})`,
        backgroundPosition: `${coins_size * 4}px 0`,
        width: `${coins_size}px`,
        height: `${coins_size}px`,
      }}
    ></div>
  );
};

export default Coins;
