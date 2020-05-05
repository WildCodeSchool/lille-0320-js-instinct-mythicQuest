import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./LifeCounter.scss";

const LifeCounter = () => {
  const [count, setCount] = useState(3);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    switch (count) {
      case 2:
        document.getElementById("heart1").src = "images/heart.png";
        document.getElementById("heart2").src = "images/heart.png";
        document.getElementById("heart3").src = "images/heartless.png";
        break;

      case 1:
        document.getElementById("heart1").src = "images/heart.png";
        document.getElementById("heart2").src = "images/heartless.png";
        document.getElementById("heart3").src = "images/heartless.png";
        break;

      case 0:
        document.getElementById("heart1").src = "images/heartless.png";
        document.getElementById("heart2").src = "images/heartless.png";
        document.getElementById("heart3").src = "images/heartless.png";
        setTimeout(() => {
          const audio = new Audio("sound/dundundun.mp3");
          audio.volume = 0.4;
          audio.play();
          showModal();
        }, 400);
        break;

      default:
        document.getElementById("heart1").src = "images/heart.png";
        document.getElementById("heart2").src = "images/heart.png";
        document.getElementById("heart3").src = "images/heart.png";
    }
  }, [count]);

  const handleClickLose = () => {
    if (count > 0) setCount(count - 1);
    const audio = new Audio("sound/lost-life.wav");
    audio.play();
  };

  const handleClickWin = () => {
    if (count < 3) setCount(count + 1);
    const audio = new Audio("sound/win-life.wav");
    audio.play();
  };

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="container-counter">
        <p>Lives : {count} </p>
        <div className="heart-container">
          <img id="heart1" src="images/heart.png" alt="Life 1" />
          <img id="heart2" src="images/heart.png" alt="Life 2" />
          <img id="heart3" src="images/heart.png" alt="Life 3" />
        </div>
        <div className="container-button">
          <button className="lose" onClick={handleClickLose}>
            Lose a life
          </button>
          <button className="win" onClick={handleClickWin}>
            Win a life
          </button>
        </div>
      </div>
      <Modal showModal={openModal} />
    </>
  );
};

export default LifeCounter;
