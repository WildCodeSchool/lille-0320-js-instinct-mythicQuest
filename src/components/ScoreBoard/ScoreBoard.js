import React, { useState, useEffect } from "react";
import axios from "axios";
import Score from "./Score";
import "./ScoreBoard.scss";

const ScoreBoard = () => {
  const [bestPlayers, setBestPlayers] = useState([]);
  const [orderScores, setOrderScores] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getScores();
  }, []);

  useEffect(() => {
    sortScores();
  }, [bestPlayers]);

  const getScores = () => {
    axios
      .get("http://localhost:5000/highscores")
      .then((res) => setBestPlayers(res.data))
      .catch(() => {
        setError("Coming soon");
      });
  };

  const sortScores = () => {
    setOrderScores(
      [...bestPlayers].sort((a, b) => (b.score > a.score ? 1 : -1))
    );
  };

  return (
    <div className="scoreboard">
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h2 className="titlescore">Scoreboard</h2>
          <div className="table">
            {orderScores ? (
              orderScores.map((player, index) => (
                <Score key={index} classement={index} player={player} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ScoreBoard;
