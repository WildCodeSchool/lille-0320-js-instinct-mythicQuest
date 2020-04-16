import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Howtoplay from "./components/HowToPlay/Howtoplay";

function App() {
  return (
    <div className="App">
     <header>
      <Header />
     </header>
     <main>
       <Howtoplay />
     </main>

    </div>
  );
}

export default App;
