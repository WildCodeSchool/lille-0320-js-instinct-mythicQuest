import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import "./App.scss";
import Howtoplay from "./components/HowToPlay/Howtoplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Howtoplay />
      <Footer />
    </div>
  );
}

export default App;
