import React from "react";
import Game from "../Game/Game";
import "./GamePage.scss";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import LeftSettings from "../LeftSettings/LeftSettings";

const GamePage = () => {
  return (
    <div className="game-container">
      <div className="Left-section">
        <img src="images/logo-mythic-quest.png" alt="logo mythic quest" />
        <div className="Divers">
          <LeftSettings />
        </div>
      </div>
      <Game />
      <div className="Right-section">
        <ScoreBoard />
      </div>
    </div>
  );
};

export default GamePage;
