import React, { useState } from "react";
import "./StuffCounter.scss";

const StuffCounter = () => {
  const [countGold, setCountGold] = useState(0);
  const [countSilver, setCountSilver] = useState(0);

  //   const handleClickGold = () => {
  //     setCountGold(countGold + 1);
  //   };

  //   const handleClickSilver = () => {
  //     setCountSilver(countSilver + 1);
  //   };

  return (
    <>
      <div className="provisoire">
        <div className="coinsCounter-container">
          <div className="gold-container">
            <img src="images/gold.gif" alt="gold coin" />
            <p>X {countGold} </p>
          </div>
          <div className="silver-container">
            <img src="images/silver.gif" alt="silver coin" />
            <p>X {countSilver} </p>
          </div>
        </div>
        {/* <div className="container-button">
          <button className="lose" onClick={handleClickGold}>
            add a gold
          </button>
          <button className="win" onClick={handleClickSilver}>
            add a silver
          </button>
        </div> */}
      </div>
    </>
  );
};

export default StuffCounter;
