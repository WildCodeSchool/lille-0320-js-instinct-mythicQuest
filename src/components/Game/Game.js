import React, { Component } from "react";
import "./Game.scss";
import Coins from "../Coins/Coins";
import Player from "../Player/Player";
import { sprite_size } from "../Constants/Constants";
import Map from "../Map/Map";
import { tiles } from "../Map/index";

const initialState = {
  direction: "DOWN",
  positionX: 0,
  positionY: 0,
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }

  // Event Listener when pressing arrow keys and moving character accordingly
  onKeyDown = (e) => {
    e.preventDefault();
    const oldPositionX = this.state.positionX;
    const oldPositionY = this.state.positionY;
    const direction = e.code.replace("Arrow", "").toUpperCase();
    switch (direction) {
      case "UP":
        this.setState({
          direction,
          positionY: oldPositionY - sprite_size,
        });
        break;
      case "DOWN":
        this.setState({
          direction,
          positionY: oldPositionY + sprite_size,
        });
        break;
      case "LEFT":
        this.setState({
          direction,
          positionX: oldPositionX - sprite_size,
        });
        break;
      case "RIGHT":
        this.setState({
          direction,
          positionX: oldPositionX + sprite_size,
        });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="game-area">
        <Map tiles={tiles} />
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
