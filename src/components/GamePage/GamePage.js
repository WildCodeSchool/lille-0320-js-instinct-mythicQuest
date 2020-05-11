import React from "react";
import Game from "../Game/Game";
import "./GamePage.scss";
import LifeCounter from "../LifeCounter/LifeCounter";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const GamePage = () => {
  return (
    <div className="game-container">
      <div className="Left-section">
        <img src="images/logo-mythic-quest.png" alt="logo mythic quest" />
        <div className="Divers">
          <p>Menu / Réglages</p>
        </div>
      </div>
      <div>
        <div className="game-header">
          <LifeCounter />
          <div className="Stuff">
            <p>Compteur Stuff</p>
          </div>
        </div>
        <Game />
      </div>
      <div className="Right-section">
        <ScoreBoard />
      </div>
    </div>
  );
};

export default GamePage;
