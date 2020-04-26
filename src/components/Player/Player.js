import React, { Component } from "react";
import "./Player.scss";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprite: "/game/sprites/player_walk.png",
    };
  }

  render() {
    return (
      <div
        className="player"
        style={{
          position: "relative",
          top: this.props.position[1], // top est sur l'axe y
          left: this.props.position[0], // left est sur l'axe x
          backgroundImage: `url(${this.state.sprite})`,
          backgroundPosition: this.props.spriteLocation,
          transition: "0.3s",
          width: "40px",
          height: "40px",
        }}
      ></div>
    );
  }
}

export default Player;
