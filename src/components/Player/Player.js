import React, { Component } from "react";
import { sprite_size, sprite_source } from "../Constants/Constants";
import "./Player.scss";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="player"
        style={{
          position: "relative",
          top: this.props.position[1], // top est sur l'axe y
          left: this.props.position[0], // left est sur l'axe x
          backgroundImage: `url(${sprite_source})`,
          backgroundPosition: "0 0",
          transition: "0.3s",
          width: `${sprite_size}px`,
          height: `${sprite_size}px`,
        }}
      ></div>
    );
  }
}

export default Player;
