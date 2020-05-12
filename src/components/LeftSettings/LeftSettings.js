import React from "react";
import { Link } from "react-router-dom";
import "./LeftSettings.scss";
import Music from "../Music/Music";

const LeftSettings = () => {
  return (
    <div className="buttonHomeContainer">
      <Link to={"/"}>
        <button className="buttonHome">Home</button>
      </Link>
      <Music />
    </div>
  );
};

export default LeftSettings;
