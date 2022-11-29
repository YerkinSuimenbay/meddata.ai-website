import React from "react";
import "./home.scss";
import logo from "../../assets/images/logo-meddata.svg";

const Home: React.FC = () => {
  return (
    <div className="home__page">
      <section className="section__one">
        <div className="section__one__left">
          <img src={logo} alt="meddata logo" />
          <p>MedData.AI</p>
        </div>
        <div className="vertical-line"></div>
        <div className="section__one__right">
          <p>Platform for efficient clinic management</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
