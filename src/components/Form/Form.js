import React from "react";
import "./Form.scss";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { username } = this.state;
    const isEnabled = username.length > 0;
    return (
      <form className="start-container" onSubmit={this.handleSubmit}>
        <input
          className="username"
          type="text"
          placeholder="USERNAME"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <Link to={"/Gamepage"}>
          <button
            className={!isEnabled ? "button-start-disabled" : "button-start"}
            disabled={!isEnabled}
          >
            start
          </button>
        </Link>
      </form>
    );
  }
}

export default Form;
