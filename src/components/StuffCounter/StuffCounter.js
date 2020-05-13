import React, { useState } from "react";
import "./StuffCounter.scss";

const StuffCounter = () => {
  const [countGold, setCountGold] = useState(0);
  const [countSilver, setCountSilver] = useState(0);

  return (
    <div className="coinsCounter">
      <div className="gold-container">
        <img src="images/gold.gif" alt="gold coin" />
        <p>X {countGold} </p>
      </div>
      <div className="silver-container">
        <img src="images/silver.gif" alt="silver coin" />
        <p>X {countSilver} </p>
      </div>
    </div>
  );
};

export default StuffCounter;
