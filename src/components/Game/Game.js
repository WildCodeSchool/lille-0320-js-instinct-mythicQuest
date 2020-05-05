import React, { Component } from "react";
import "./Game.scss";
import Coins from "../Coins/Coins";
import Player from "../Player/Player";
import { sprite_size } from "../Constants/Constants";

const initialState = {
  direction: "DOWN",
  positionX: 0,
  positionY: 0,
  canMove: true,
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    window.onkeydown = this.onKeyDown;
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
      default: return;
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
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="game-area">
        <Coins />
        <Coins />
        <Player
          positionX={this.state.positionX}
          positionY={this.state.positionY}
          direction={this.state.direction}
        />
      </div>
    );
  }
}

export default Game;
