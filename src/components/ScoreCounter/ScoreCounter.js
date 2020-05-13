import React from "react";
import "./ScoreCounter.scss";

const ScoreCounter = ({ scoreCount }) => {
  return (
    <div className="scoreCounter">
      <p>Score : {scoreCount} </p>
    </div>
  );
};

export default ScoreCounter;
