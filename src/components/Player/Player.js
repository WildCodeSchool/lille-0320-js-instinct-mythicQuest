import React, { Component } from "react";
import { sprite_source, sprite_size } from "../Constants/Constants";
import "./Player.scss";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "DOWN",
      walkIndex: 0,
      spriteLocationX: "0px",
      spriteLocationY: "0px",
    };
  }

  componentDidUpdate() {}

  getSpriteLocation = () => {
    if (this.props.direction !== this.state.direction) {
      switch (this.props.direction) {
        case "UP":
          this.setState({
            spriteLocationY: `${sprite_size * 3}`,
            // spriteLocationX: `${sprite_size * walkIndex}`,
          });
          break;
        case "DOWN":
          this.setState({
            spriteLocationY: `${sprite_size * 0}`,
            // spriteLocationX: `${sprite_size * walkIndex}`,
          });
          break;
        case "LEFT":
          this.setState({
            spriteLocationY: `${sprite_size * 2}`,
            // spriteLocationX: `${sprite_size * walkIndex}`,
          });
          break;
        case "RIGHT":
          this.setState({
            spriteLocationY: `${sprite_size * 1}`,
            // spriteLocationX: `${sprite_size * walkIndex}`,
          });
          break;
        default:
          return;
      }
    }
  };

  render() {
    return (
      <div
        className="player"
        style={{
          position: "relative",
          top: this.props.position[1], // top est sur l'axe y
          left: this.props.position[0], // left est sur l'axe x
          backgroundImage: `url(${sprite_source})`,
          backgroundPositionX: `${this.state.spriteLocationX}px`,
          backgroundPositionY: `${this.state.spriteLocationY}px`,
          transitionProperty: "top, left",
          transitionDuration: "0.3s",
          width: `${sprite_size}px`,
          height: `${sprite_size}px`,
        }}
      ></div>
    );
  }
}

export default Player;
