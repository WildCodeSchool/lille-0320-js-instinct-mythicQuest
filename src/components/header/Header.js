import React from "react";
import Nav from "../share/Nav";
import Form from "../Form/Form";
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
          <Form />
        </div>
      </header>
    );
  }
}

export default Header;
