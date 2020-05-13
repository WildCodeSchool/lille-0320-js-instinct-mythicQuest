import React, { useState, useEffect } from "react";
import axios from "axios";
import Score from "./Score";
import "./ScoreBoard.scss";

const ScoreBoard = () => {
  const [bestPlayers, setBestPlayers] = useState([]);
  const [orderScores, setOrderScores] = useState([]);

  useEffect(() => {
    getScores();
  }, []);

  useEffect(() => {
    sortScores();
  }, [bestPlayers]);

  const getScores = () => {
    axios
      .get("http://localhost:5000/highscores")
      .then((res) => setBestPlayers(res.data));
  };

  const sortScores = () => {
    setOrderScores(
      [...bestPlayers].sort((a, b) => (b.score > a.score ? 1 : -1))
    );
  };

  return (
    <div className="scoreboard">
      <h2 className="titlescore">Scoreboard</h2>
      <div className="table">
        {bestPlayers ? (
          orderScores.map((player, index) => (
            <Score key={index} classement={index} player={player} />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default ScoreBoard;
