import React from "react";
import "./main.scss";
import logo from "../../assets/images/logo-meddata.svg";
// import macBookPro17 from "../../assets/images/MacBook-Pro-17.jpg";
import macBookPro17 from "../../assets/images/MacBookPro17.svg";
import CardWithBadge from "../../components/cards/CardWithBadge/CardWithBadge";

const Main: React.FC = () => {
  return (
    <div className="home__page">
      <section className="section__one">
        <div className="section__one__left">
          <img src={logo} alt="meddata logo" />
          <h2>MedData.AI</h2>
        </div>
        <div className="section__one__right">
          <h1>
            Platform for efficient <br /> clinic management
          </h1>
        </div>
      </section>
      <section className="section__two">
        <img src={macBookPro17} alt="MacBook Pro 17" />
        <p className="section__two__slogan">
          MedData is a medical platform, for transparent and efficient clinic
          management
        </p>
        <p className="section__two__bottom-text">free consultation</p>
      </section>
      <section className="section__three">
        <h2 className="section__three__header">
          <span className="section__three__header__blue">More than 70% </span>
          of clinics <br /> face these problems:
        </h2>
        <div className="section__three__cards">
          <CardWithBadge
            text="of business and work processes are not digitized"
            textBadge="75%"
            className="topLeft"
          />
          <CardWithBadge
            text="annual clinics losses due to lack of digitization"
            textBadge="от 8 до 20%"
            className="topRight"
          />
          <CardWithBadge
            text="cannot implement online services to improve service within a clinic"
            textBadge="87%"
            className="bottomLeft"
          />
          <CardWithBadge
            text="billion a year clinics losses due to cash payments"
            textBadge="100 млрд $"
            className="bottomRight"
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
