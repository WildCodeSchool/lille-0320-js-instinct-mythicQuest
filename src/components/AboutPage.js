import React from "react";
import "./styles/AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <p>
        Projet réalisé dans le cadre de la formation à la WildCodeSchool.
      </p>
      <ul className="name_list">
        <li>Malika BADAOUI</li>
        <li>Margaux BEDU</li>
        <li>Aurélien BADRE</li>
        <li>Maxime RAWINSKI</li>
        <li>Sylvain CARLIER</li>
      </ul>
    </div>
  );
};

export default AboutPage;
