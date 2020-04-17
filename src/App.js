import React from "react";
import Header from "./components/header/Header";
import "./App.scss";
import Howtoplay from "./components/HowToPlay/Howtoplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Howtoplay />
    </div>
  );
}

export default App;
