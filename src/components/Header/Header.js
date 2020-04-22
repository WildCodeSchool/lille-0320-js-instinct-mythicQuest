import React from "react";
import Form from "../Form/Form";
import Nav from "../Share/Nav";
import "./Header.scss";

const Header = () => {
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
};

export default Header;
