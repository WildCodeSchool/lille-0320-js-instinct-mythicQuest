import React, { useState } from "react";
import "./ScoreCounter.scss";

const ScoreCounter = () => {
  const [scoreCount, setScoreCount] = useState(0);

  return (
    <div className="scoreCounter">
      <p>Score : {scoreCount} </p>
    </div>
  );
};

export default ScoreCounter;
