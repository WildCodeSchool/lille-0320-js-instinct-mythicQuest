import React, { Component } from "react";
import { sprite_source, sprite_size } from "../Constants/Constants";
import "./Player.scss";


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spriteLocationX: "0px",
      spriteLocationY: "0px",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.direction !== this.props.direction) {
      this.getSpriteLocation();
    }
  }

  getSpriteLocation = () => {
    switch (this.props.direction) {
      case "UP":
        this.setState({
          spriteLocationY: `${sprite_size * 3}`,
        });
        break;
      case "DOWN":
        this.setState({
          spriteLocationY: `${sprite_size * 0}`,
        });
        break;
      case "LEFT":
        this.setState({
          spriteLocationY: `${sprite_size * 2}`,
        });
        break;
      case "RIGHT":
        this.setState({
          spriteLocationY: `${sprite_size * 1}`,
        });
        break;
      default:
        return;

    }
  };

  render() {
    return (
      <div
        className="player"
        style={{
          position: "absolute",
          top: this.props.positionY,
          left: this.props.positionX,
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
