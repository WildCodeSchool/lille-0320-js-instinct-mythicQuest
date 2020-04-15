import React from "react";
import "./Header.css";
import Startbutton from "../share/Startbutton";
import Nav from "../share/Nav";

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
            <Startbutton />
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
