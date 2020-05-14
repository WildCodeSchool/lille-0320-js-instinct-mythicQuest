import React, { useState, useEffect } from "react";
import "./Music.scss";

export default function Music() {
  const [sound] = useState(new Audio("sound/gamesound.ogg"));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? sound.play() : sound.pause();
  }, [playing]);

  return (
    <div>
      <div className="button-container">
        <button className="buttonMusic" onClick={toggle}>
          {playing ? "Pause" : "Play Music"}
        </button>
      </div>
    </div>
  );
}
