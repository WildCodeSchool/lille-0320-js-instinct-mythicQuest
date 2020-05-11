import React from "react";
import "./Score.scss";

const Score = ({ player, classement }) => {
  return (
    <div className="player-container">
      <p>{classement + 1}</p>
      <p>{player.nom}</p>
      <p>{player.score} Pts</p>
    </div>
  );
};

export default Score;
