import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./LifeCounter.scss";

const LifeCounter = () => {
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
        <p>Lives : {count} </p>
        <div className="heart-container">
          <img
            src={count === 0 ? "images/heartless.png" : "images/heart.png"}
            alt="Life 1"
          />
          <img
            src={count <= 1 ? "images/heartless.png" : "images/heart.png"}
            alt="Life 2"
          />
          <img
            src={count <= 2 ? "images/heartless.png" : "images/heart.png"}
            alt="Life 3"
          />
        </div>
        {/* <div className="container-button">
          <button className="lose" onClick={handleClickLose}>
            Lose a life
          </button>
          <button className="win" onClick={handleClickWin}>
            Win a life
          </button>
        </div> */}
      </div>
      <Modal showModal={openModal} />
    </>
  );
};

export default LifeCounter;
