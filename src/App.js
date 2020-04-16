import React from "react";
import Footer from "./components/Footer";
import Howtoplay from "./components/HowToPlay/Howtoplay";

function App() {
  return (
    <div className="App">
      <main>
        <Howtoplay />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
