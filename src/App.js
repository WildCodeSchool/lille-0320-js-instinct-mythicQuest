import React from "react";
import HomePage from "./components/HomePage/HomePage";
import "./App.scss";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Game />
    </div>
  );
}

export default App;
