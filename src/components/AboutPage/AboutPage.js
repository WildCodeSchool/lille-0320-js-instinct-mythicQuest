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
          <a href="https://github.com/MalikaBadaoui">Malika</a>
        </div>
        <div className="character-bloc">
          <img src="images/margaux-avatar.png" alt="Margaux Avatar" />
          <a href="https://github.com/magb7">Margaux</a>
        </div>
        <div className="character-bloc">
          <img src="images/aurelien-avatar.png" alt="Aurélien Avatar" />
          <a href="https://github.com/Aurelien-Bdr">Aurélien</a>
        </div>
        <div className="character-bloc">
          <img src="images/maxime-avatar.png" alt="Maxime Avatar" />
          <a href="https://github.com/MaximePikss">Maxime</a>
        </div>
        <div className="character-bloc">
          <img src="images/sylvain-avatar.png" alt="Sylvain Avatar" />
          <a href="https://github.com/XSylvainX">Sylvain</a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
