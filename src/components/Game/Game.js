import React, { Component } from "react";
import "./Game.scss";
import Player from "../Player/Player";
import { sprite_size } from "../Constants/Constants";

const initialState = {
  direction: "DOWN",
  position: [0, 0],
  spriteLocation: "0px 0px",
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
    switch (e.keyCode) {
      case 38:
        this.setState({
          direction: "UP",
          position: [oldPosition[0], oldPosition[1] - sprite_size],
        });
        break;
      case 40:
        this.setState({
          direction: "DOWN",
          position: [oldPosition[0], oldPosition[1] + sprite_size],
        });
        break;
      case 37:
        this.setState({
          direction: "LEFT",
          position: [oldPosition[0] - sprite_size, oldPosition[1]],
        });
        break;
      case 39:
        this.setState({
          direction: "RIGHT",
          position: [oldPosition[0] + sprite_size, oldPosition[1]],
          spriteLocation: `Opx ${sprite_size}px`,
        });
        break;
      default:
        return;
    }
  };

  //Function to shift the position of the character

  // ShiftPosition = () => {
  //   switch (this.state.direction) {
  //     case "RIGHT":
  //       console.log(this.state.spriteLocation);
  //       this.setState({
  //         spriteLocation: "Opx 40px",
  //       });
  //       break;
  //     case "LEFT":
  //       break;
  //     case "UP":
  //       break;
  //     case "DOWN":
  //       break;
  //     default:
  //       return;
  //   }
  // };

  render() {
    return (
      <div className="game-area">
        <Player
          position={this.state.position}
          direction={this.state.direction}
          spriteLocation={this.state.spriteLocation}
        />
      </div>
    );
  }
}

export default Game;
