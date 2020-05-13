import React, { useState, useEffect } from "react";
import "./Music.scss";

export default function Music() {
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const audio = new Audio("sound/gamesound.ogg");
    if (sound === true) {
      audio.play();
      audio.volume = 0.4;
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [sound]);

  const displayButtonName = sound ? "Desactivate Music" : "Activate Music";

  return (
    <div>
      <div className="button-container">
        <button
          className="buttonMusic"
          onClick={() => {
            setSound(!sound);
          }}
        >
          {displayButtonName}
        </button>
      </div>
    </div>
  );
}
