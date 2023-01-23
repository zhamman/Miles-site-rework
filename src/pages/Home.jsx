import React from "react";
import Header from "../components/Header";
import About from "../pages/About";
import MainPage from "../pages/MainPage";
import Contact from "./Contact";
import WorkPreview from "./WorkPreview";
import "../Styles/Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <MainPage />
      <About />
      <WorkPreview />
      <Contact />
    </div>
  );
};

export default Home;
