import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="flexmenu">
          <li>
            <a href="#howtoplay">How to play</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
