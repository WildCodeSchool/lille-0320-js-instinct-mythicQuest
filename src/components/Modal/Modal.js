import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";

const refreshPage = () => {
  window.location.reload();
};

const Modal = ({ showModal }) => {
  return (
    showModal && (
      <div className="ModalBackground">
        <div className="ModalContainer">
          <img src="images/gameover.gif" alt="game over" />
          <div className="button-container">
            <button onClick={refreshPage} className="restart">
              Try again
            </button>
            <Link to={"/"}>
              <button className="exit">Exit the game</button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
