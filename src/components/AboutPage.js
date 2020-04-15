import React from "react";
import "./styles/AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <p>
        Projet réalisé dans le cadre de la formation à la WildCodeSchool.
        <br></br>
        Voici les membres de Instinct Agency :
      </p>
      <ul className="name_list">
        <li>
          Malika BADAOUI
          <div className="malika_avatar image"></div>
        </li>
        <li>
          Margaux BEDU
          <div className="margaux_avatar image"></div>
        </li>
        <li>
          Aurélien BADRE
          <div className="aurélien_avatar image"></div>
        </li>
        <li>
          Maxime RAWINSKI
          <div className="maxime_avatar image"></div>
        </li>
        <li>
          Sylvain CARLIER
          <div className="sylvain_avatar image"></div>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
