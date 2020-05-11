import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ScoreBoard.scss";

const ScoreBoard = () => {
  const [bestPlayers, setBestPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/highscores")
      .then((res) => setBestPlayers(res.data));
  }, []);

  const orderScore = [...bestPlayers];
  orderScore.sort((a, b) => (b.score > a.score ? 1 : -1));
  console.log(orderScore);

  for (let i in orderScore) {
    orderScore[i].classement = Number(i) + 1;
  }

  return <div className="scoreboard">{JSON.stringify(bestPlayers)}</div>;
};

export default ScoreBoard;
