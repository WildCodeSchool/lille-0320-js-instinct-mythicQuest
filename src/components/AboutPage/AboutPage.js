import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <h2>About us</h2>
      <p className="introduction">
        Project developed during the WildCodeSchool training. <br></br>
        Here are the members of Instinct Agency:
      </p>
      <div className="character-container">
        <div className="character-bloc">
          <img src="images/malika-avatar.png" alt="Malika Avatar" />
          <p>Malika</p>
        </div>
        <div className="character-bloc">
          <img src="images/margaux-avatar.png" alt="Margaux Avatar" />
          <p>Margaux</p>
        </div>
        <div className="character-bloc">
          <img src="images/aurelien-avatar.png" alt="Aurélien Avatar" />
          <p>Aurélien</p>
        </div>
        <div className="character-bloc">
          <img src="images/maxime-avatar.png" alt="Maxime Avatar" />
          <p>Maxime</p>
        </div>
        <div className="character-bloc">
          <img src="images/sylvain-avatar.png" alt="Sylvain Avatar" />
          <p>Sylvain</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
