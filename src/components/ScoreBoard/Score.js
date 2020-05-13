import React from "react";
import "./Score.scss";

const Score = ({ player, classement }) => {
  return (
    <div className="blocscore">
      <div className="classement">{classement + 1}.</div>
      <div className="nom">{player.nom}</div>
      <div className="score">{player.score} Pts</div>
    </div>
  );
};

export default Score;
