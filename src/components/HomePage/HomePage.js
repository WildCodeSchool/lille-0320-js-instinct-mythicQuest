import React from "react";
import AboutPage from "../AboutPage/AboutPage";
import Header from "../Header/Header";
import HowToPlay from "../HowToPlay/HowToPlay";
import Footer from "../Footer/Footer";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <HowToPlay />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default HomePage;
