import React from "react";
import Game from "../Game/Game";
import "./GamePage.scss";
import LifeCounter from "../LifeCounter/LifeCounter";

const GamePage = () => {
  return (
    <div className="game-container">
      <div className="Left-section">
        <LifeCounter />
        <div className="Stuff">
          <p>Stuff</p>
        </div>
        <div className="Divers">
          <p>À préciser</p>
        </div>
      </div>
      <Game />
      <div className="Right-section">
        <p>Score</p>
      </div>
    </div>
  );
};

export default GamePage;
