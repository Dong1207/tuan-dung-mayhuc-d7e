import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <img
          src="/images/suamoid7e.gif"
          alt="Máy hút bụi D7E Banner"
          className="banner-image"
        />
        <img src="/images/chaomungd7e.gif" alt="Chào mừng" className="welcome-image" />
      </section>
    </div>
  );
};

export default HomePage;
