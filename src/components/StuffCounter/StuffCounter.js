import React, { useState } from "react";
import "./StuffCounter.scss";

const StuffCounter = ({ silverCounter, goldCounter }) => {
  return (
    <div className="coinsCounter">
      <div className="gold-container">
        <img src="images/gold.gif" alt="gold coin" />
        <p>X {goldCounter} </p>
      </div>
      <div className="silver-container">
        <img src="images/silver.gif" alt="silver coin" />
        <p>X {silverCounter} </p>
      </div>
    </div>
  );
};

export default StuffCounter;
