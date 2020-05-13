import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./LifeCounter.scss";

const LifeCounter = ({ lifeCounter }) => {
  const [count, setCount] = useState(3);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        const audio = new Audio("sound/dundundun.mp3");
        audio.volume = 0.4;
        audio.play();
        showModal();
      }, 400);
    }
  }, [count]);

  // Code commenté provisoire, sera intégré dans dans une future US

  // const handleClickLose = () => {
  //   if (count > 0) setCount(count - 1);
  //   const audio = new Audio("sound/lost-life.wav");
  //   audio.play();
  // };

  // const handleClickWin = () => {
  //   if (count < 3) setCount(count + 1);
  //   const audio = new Audio("sound/win-life.wav");
  //   audio.play();
  // };

  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="container-counter">
        <p>Lives : {lifeCounter} </p>
        <div className="heart-container">
          <img
            src={
              lifeCounter === 0 ? "images/heartless.png" : "images/heart.png"
            }
            alt="Life 1"
          />
          <img
            src={lifeCounter <= 1 ? "images/heartless.png" : "images/heart.png"}
            alt="Life 2"
          />
          <img
            src={lifeCounter <= 2 ? "images/heartless.png" : "images/heart.png"}
            alt="Life 3"
          />
        </div>
      </div>
      <Modal showModal={openModal} />
    </>
  );
};

export default LifeCounter;
