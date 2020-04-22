import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <img src="images/logo-mythic-quest.png" alt="logo mythic quest" />
      <ul>
        <li>
          <a href="www.twitter.com">About us</a>
        </li>
        <li>
          <a href="www.twitter.com">How to play</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
