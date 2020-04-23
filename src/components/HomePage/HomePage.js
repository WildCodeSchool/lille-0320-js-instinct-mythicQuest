import React from "react";
import AboutPage from "../AboutPage/AboutPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HowToPlay from "../HowToPlay/HowToPlay";
import "./HomePage.scss";
import ScrollToTopButton from "../Share/ScrollToTopButton";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <HowToPlay />
      <AboutPage />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
