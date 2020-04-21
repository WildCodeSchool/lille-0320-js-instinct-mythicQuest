import React from "react";
import Nav from "../share/Nav";
import StartButton from "../share/StartButton";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="homepage-header">
        <Nav />
        <div className="container-content">
          <h1>
            <span className="first-word">MYTHIC</span>
            <span className="second-word">QUEST</span>
          </h1>
          <form className="start-container">
            <input className="username" type="text" placeholder="USERNAME" />
            <StartButton />
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
