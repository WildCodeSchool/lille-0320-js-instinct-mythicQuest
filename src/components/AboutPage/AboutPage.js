import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <p>
        Project developed during the WildCodeSchool training. <br></br>
        Here are the members of Instinct Agency:
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
