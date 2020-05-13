import React, { Component } from "react";
import "./Game.scss";
import Coins from "../Coins/Coins";
import Player from "../Player/Player";
import {
  sprite_size,
  goldCoin_source,
  silverCoin_source,
  audioWin,
  audioLose,
} from "../Constants/Constants";
import Map from "../Map/Map";
import { tiles } from "../Map/index";
import LifeCounter from "../LifeCounter/LifeCounter";
import StuffCounter from "../StuffCounter/StuffCounter";
import ScoreCounter from "../ScoreCounter/ScoreCounter";

/* RANDOM POSITION FOR COINS */
const getRandomY = () => {
  const num = Math.floor(Math.random() * 15) * 40;
  return num;
};

const getRandomX = () => {
  const num = Math.floor(Math.random() * 20) * 40;
  return num;
};

const getRandomCoords = () => {
  let x = null;
  let y = null;
  let cX = null;
  let cY = null;
  do {
    x = getRandomX();
    y = getRandomY();
    cX = cssToCoords(x);
    cY = cssToCoords(y);
  } while (tiles[cY][cX] > 1);
  return { x, y };
};

/* TRANSFORM CSS TO COORDS */
const cssToCoords = (cssCoord) => {
  return Math.floor(cssCoord / 40);
};

/* INITIAL STATE */
const initialState = {
  direction: "DOWN",
  positionX: 0,
  positionY: 0,
  canMove: true,
  silverList: [
    { coords: getRandomCoords(), display: "" },
    { coords: getRandomCoords(), display: "" },
    { coords: getRandomCoords(), display: "" },
  ],
  silverCounter: 0,
  goldList: [
    { x: 2 * 40, y: 0 * 40, source: goldCoin_source, display: "" },
    { x: 1 * 40, y: 12 * 40, source: goldCoin_source, display: "" },
    { x: 19 * 40, y: 13 * 40, source: goldCoin_source, display: "" },
    { x: 9 * 40, y: 7 * 40, source: goldCoin_source, display: "" },
  ],
  goldCounter: 0,
  lifeCounter: 3,
  score: 0,
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    window.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    if (this.state.canMove === true) {
      this.getSilverCoins();
      this.getGoldCoins();
    }
  }

  // Event Listener when pressing arrow keys and moving character accordingly
  onKeyDown = (e) => {
    e.preventDefault();
    const direction = e.code.replace("Arrow", "").toUpperCase();
    switch (direction) {
      case "UP":
      case "DOWN":
      case "LEFT":
      case "RIGHT":
        this.getMovement(direction);

        break;
      default:
        return;
    }
  };

  getMovement = (direction) => {
    const oldPositionX = this.state.positionX;
    const oldPositionY = this.state.positionY;
    let newPositionX = oldPositionX;
    let newPositionY = oldPositionY;
    switch (direction) {
      case "UP":
        newPositionY = oldPositionY - sprite_size;
        break;
      case "DOWN":
        newPositionY = oldPositionY + sprite_size;
        break;
      case "LEFT":
        newPositionX = oldPositionX - sprite_size;
        break;
      case "RIGHT":
        newPositionX = oldPositionX + sprite_size;
        break;
      default:
        return;
    }

    if (this.isMovePossible(newPositionX, newPositionY) && this.state.canMove) {
      setTimeout(() => {
        this.setState({ canMove: true });
      }, 300);
      return this.setState({
        positionX: newPositionX,
        positionY: newPositionY,
        direction,
        canMove: false,
      });
    }
  };

  isMovePossible = (x, y) => {
    const min_x = 0;
    const min_y = 0;
    const max_x = 760;
    const max_y = 560;

    if (x < min_x || x > max_x || y < min_y || y > max_y) {
      return false;
    }
    const cX = cssToCoords(x);
    const cY = cssToCoords(y);
    if (tiles[cY][cX] > 5) {
      return false;
    }
    if (tiles[cY][cX] === 4) {
      this.setState({
        lifeCounter: this.state.lifeCounter - 1,
        score: this.state.score - 10,
      });
      audioLose.play();
    }
    return true;
  };

  /* COINS */
  getSilverCoins = () => {
    let xPlayer = cssToCoords(this.state.positionX);
    let yPlayer = cssToCoords(this.state.positionY);
    let newSilverList = this.state.silverList;
    for (let i = 0; i < newSilverList.length; i++) {
      let newCoinsX = cssToCoords(newSilverList[i].coords.x);
      let newCoinsY = cssToCoords(newSilverList[i].coords.y);
      if (
        newCoinsX === xPlayer &&
        newCoinsY === yPlayer &&
        newSilverList[i].display !== "none"
      ) {
        newSilverList[i].display = "none";
        this.setState({
          silverList: newSilverList,
          silverCounter: this.state.silverCounter + 1,
          score: this.state.score + 50,
        });
        audioWin.play();
      }
    }
  };

  getGoldCoins = () => {
    let xPlayer = cssToCoords(this.state.positionX);
    let yPlayer = cssToCoords(this.state.positionY);
    let newGoldList = this.state.goldList;
    for (let i = 0; i < newGoldList.length; i++) {
      let newCoinsX = cssToCoords(newGoldList[i].x);
      let newCoinsY = cssToCoords(newGoldList[i].y);
      if (
        newCoinsX === xPlayer &&
        newCoinsY === yPlayer &&
        newGoldList[i].display !== "none"
      ) {
        newGoldList[i].display = "none";
        this.setState({
          goldList: newGoldList,
          goldCounter: this.state.goldCounter + 1,
          score: this.state.score + 100,
        });
        audioWin.play();
      }
    }
  };

  /* Reset function */
  resetGame = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <div>
        <div className="header-game">
          <LifeCounter
            lifeCounter={this.state.lifeCounter}
            resetGame={this.resetGame}
          />
          <StuffCounter
            silverCounter={this.state.silverCounter}
            goldCounter={this.state.goldCounter}
          />
          <ScoreCounter scoreCount={this.state.score} />
        </div>
        <div className="game-area">
          <Map tiles={tiles} />
          {this.state.silverList.map((coin, index) => {
            return (
              <Coins
                x={coin.coords.x}
                y={coin.coords.y}
                display={coin.display}
                source={silverCoin_source}
                key={index}
              />
            );
          })}
          {this.state.goldList.map((coin, index) => {
            return (
              <Coins
                x={coin.x}
                y={coin.y}
                display={coin.display}
                source={goldCoin_source}
                key={index}
              />
            );
          })}
          <Player
            positionX={this.state.positionX}
            positionY={this.state.positionY}
            direction={this.state.direction}
          />
        </div>
      </div>
    );
  }
}

export default Game;
