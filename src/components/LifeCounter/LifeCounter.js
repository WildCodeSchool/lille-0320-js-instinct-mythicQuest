import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { audioGameOver } from "../Constants/Constants";
import "./LifeCounter.scss";

const LifeCounter = ({ lifeCounter }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (lifeCounter === 0) {
      setTimeout(() => {
        audioGameOver.volume = 0.4;
        audioGameOver.play();
        showModal();
      }, 400);
    }
  }, [lifeCounter]);

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
