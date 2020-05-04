import React from "react";
import HomePage from "./components/HomePage/HomePage";
import "./App.scss";
import GamePage from "./components/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <GamePage />
    </div>
  );
}

export default App;
