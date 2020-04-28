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

  // Fonction pour écouter les évènement sur le clavier
  onKeyDown = (e) => {
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
        });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="game-container">
        <div className="game-area">
          <Player
            position={this.state.position}
            direction={this.state.direction}
          />
        </div>
      </div>
    );
  }
}

export default Game;
