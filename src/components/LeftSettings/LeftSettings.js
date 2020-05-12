import React from "react";
import { Link } from "react-router-dom";
import "./LeftSettings.scss";
import Music from "../Music/Music";

const LeftSettings = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Music />
    </div>
  );
};

export default LeftSettings;
