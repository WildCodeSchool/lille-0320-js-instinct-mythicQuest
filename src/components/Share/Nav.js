import React from "react";
import { Link } from "react-scroll";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <img src="images/logo-mythic-quest.png" alt="logo mythic quest" />
      <ul>
        <Link
          className="howtoplay-link"
          activeClass="active"
          to="howtoplay"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
        >
          How to play
        </Link>
        <Link
          className="aboutus-link"
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          About us
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
