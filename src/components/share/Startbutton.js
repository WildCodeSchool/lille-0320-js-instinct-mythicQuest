import React from "react";
import "./Startbutton.css";

class Startbutton extends React.Component {
  state = {};
  render() {
    return (
      <button className="button-start" onClick={this.state}>
        START
      </button>
    );
  }
}

export default Startbutton;
