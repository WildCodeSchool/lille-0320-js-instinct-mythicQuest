import React, { Component } from "react";
import "./Game.scss";
import Player from "../Player/Player";
import { sprite_size } from "../Constants/Constants";

const initialState = {
  direction: "DOWN",
  position: [0, 0],
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
    const oldPosition = this.state.position;
    const direction = e.code.replace("Arrow", "").toUpperCase();
    switch (direction) {
      case "UP":
        this.setState({
          direction,
          position: [oldPosition[0], oldPosition[1] - sprite_size],
        });
        break;
      case "DOWN":
        this.setState({
          direction,
          position: [oldPosition[0], oldPosition[1] + sprite_size],
        });
        break;
      case "LEFT":
        this.setState({
          direction,
          position: [oldPosition[0] - sprite_size, oldPosition[1]],
        });
        break;
      case "RIGHT":
        this.setState({
          direction,
          position: [oldPosition[0] + sprite_size, oldPosition[1]],
        });
        break;
      default:
        return;
    }
  };

  getWalkIndex = (walkIndex) => {
    if (walkIndex >= 7) {
      return this.setState({
        walkIndex: 0,
      });
    } else {
      return this.setState({
        walkIndex: walkIndex + 1,
      });
    }
  };

  render() {
    return (
      <div className="game-area">
        <Player
          position={this.state.position}
          direction={this.state.direction}
        />
      </div>
    );
  }
}

export default Game;
