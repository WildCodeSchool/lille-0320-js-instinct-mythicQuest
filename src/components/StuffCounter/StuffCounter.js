import React from "react";
import "./StuffCounter.scss";
import { goldCoin_source, silverCoin_source } from "../Constants/Constants";

const StuffCounter = ({ silverCounter, goldCounter }) => {
  return (
    <div className="coinsCounter">
      <div className="gold-container">
        <img src={goldCoin_source} alt="gold coin" />
        <p>X {goldCounter} </p>
      </div>
      <div className="silver-container">
        <img src={silverCoin_source} alt="silver coin" />
        <p>X {silverCounter} </p>
      </div>
    </div>
  );
};

export default StuffCounter;
