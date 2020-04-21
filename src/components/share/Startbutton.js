import React from "react";
import "./StartButton.scss";

class StartButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="button-start">START</button>;
  }
}

export default StartButton;
