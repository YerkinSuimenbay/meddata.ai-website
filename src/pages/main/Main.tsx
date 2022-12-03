import React from "react";
import "./main.scss";
import logo from "../../assets/images/logo-meddata.svg";
import CardWithBadge from "../../components/cards/CardWithBadge/CardWithBadge";

import macBookPro17 from "../../assets/images/MacBookPro17.svg";
import macBookPro16 from "../../assets/images/MacBookPro16.svg";
import section4TopL from "../../assets/images/section4TopL.svg";
import section4TopR from "../../assets/images/section4TopR.svg";
import section4BottomL from "../../assets/images/section4BottomL.svg";
import section4BottomR from "../../assets/images/section4BottomR.svg";
import section4BottomBlock from "../../assets/images/section4BottomBlock.svg";
import section6Top from "../../assets/images/section6Top.svg";
import section6Middle from "../../assets/images/section6Middle.svg";
import section6Bottom from "../../assets/images/section6Bottom.svg";
import CustomList from "../../components/lists/CustomList/CustomList";
import Ripple from "../../components/rest/ripple/Ripple";
import Ad from "../../components/cards/Ad/Ad";
import GetConsultation from "../../components/buttons/GetConsultation/GetConsultation";

const Main: React.FC = () => {
  return (
    <div className="home__page">
      <div className="section__one__background">
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
      </div>
      <section className="section__two">
        {/* <div className="ripple">
            <div className="c1" />
            <div className="c2" />
            <div className="c3" />
          </div> */}
        <Ripple />
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
            children={
              <p>
                of business and work processes are not <br /> digitized
              </p>
            }
            textBadge="75%"
            className="topLeft"
          />
          <CardWithBadge
            children={
              <p>
                annual clinics losses due to lack of <br /> digitization
              </p>
            }
            textBadge="от 8 до 20%"
            className="topRight"
          />
          <CardWithBadge
            children={
              <p>
                cannot implement online services to improve <br /> service
                within a clinic
              </p>
            }
            textBadge="87%"
            className="bottomLeft"
          />
          <CardWithBadge
            children={
              <p>
                billion a year clinics losses due to cash <br /> payments
              </p>
            }
            textBadge="100 млрд $"
            className="bottomRight"
          />
        </div>
      </section>
      <section className="section__four">
        <h2 className="section__four__header">
          How can MedData platform connection{" "}
          <span className="section__four__header__blue">
            improve <br /> your clinic's performance by 60%?
          </span>
        </h2>
        <div className="section__four__cards">
          <div className="section__four__cards__left">
            <CardWithBadge
              children={
                <>
                  <img src={section4TopL} alt="traced layer" />
                  <p>
                    individual platform customization for your clinic, for each
                    employee and group of patients, which will help{" "}
                    <b>management improvement by 45%</b>
                  </p>
                </>
              }
            />
            <CardWithBadge
              children={
                <>
                  <img src={section4BottomL} alt="traced layer" />
                  <p>
                    <b>transparent financial analytics.</b> The MedData platform
                    is able to find and prevent errors in management, predict
                    the dynamics of the clinic's development
                  </p>
                </>
              }
            />
          </div>
          <div className="section__four__cards__right">
            <CardWithBadge
              children={
                <>
                  <img src={section4TopR} alt="traced layer" />
                  <p>
                    deep analytics: the platform is easy to connect to the
                    services already working for you, thanks to the neural
                    network, it analyzes the data of employees, warehouse,
                    services, finances -{" "}
                    <b>
                      your manager will respond in time to the clinic shrinking
                      processes
                    </b>
                  </p>
                </>
              }
            />
            <CardWithBadge
              children={
                <>
                  <img src={section4BottomR} alt="traced layer" />
                  <p>
                    a separate personal doctor's office will help you{" "}
                    <b>track your work effectiveness and KPI</b>
                  </p>
                </>
              }
            />
          </div>
        </div>
        <div className="section__four__bottom">
          <CardWithBadge
            alignItems="center"
            children={
              <>
                <CustomList
                  title="The MedData platform is powered by artificial
                intelligence, this will help:"
                  type="dot"
                  items={[
                    "conduct transparent financial analytics",
                    " predict the dynamics of the clinic development receive smart",
                    "recommendations for optimizing business processes receive",
                    "profit reporting and track the work of employees",
                  ]}
                />
                <img
                  src={section4BottomBlock}
                  alt="brain"
                  style={{ width: "10rem" }}
                />
              </>
            }
          />
        </div>
      </section>
      <section className="section__five">
        <Ad
          topButtonText="free consultation"
          title={
            <>
              Increase the effectiveness of <br /> the clinic within 2 months
            </>
          }
          text={
            <>
              By implementing the MedData platform. <br />
              Leave a request now for a free consultation.
            </>
          }
          bottomButtonText="To get the advice"
        />
      </section>

      <section className="section__six">
        <h2 className="section__six__header">
          How can MedData help doctors and clinic staff <br /> work{" "}
          <span className="section__six__header__blue">
            60% more efficiently
          </span>
          ?
        </h2>
        <div className="section__six__middle">
          <div className="section__six__cards">
            <CardWithBadge
              alignItems="center"
              children={
                <>
                  <div className="section__six__card">
                    <h3 className="section__six__card__title">
                      Reception automation
                    </h3>
                    <p>
                      Personally customizable patient admission protocols.
                      MedData learns and at the same time prevents errors in the
                      reception protocols.
                    </p>
                  </div>
                  <img src={section6Top} alt="section 6 Top" />
                </>
              }
            />
            <CardWithBadge
              alignItems="center"
              children={
                <>
                  <div className="section__six__card">
                    <h3 className="section__six__card__title">
                      Deep Analytics
                    </h3>
                    <p>
                      Using data from the treatment constructor and medical
                      monitoring, MedData is able to analyze the treatment and
                      the patient's condition online.
                    </p>
                  </div>
                  <img src={section6Middle} alt="section 6 Middle" />
                </>
              }
            />
            <CardWithBadge
              alignItems="center"
              children={
                <>
                  <div className="section__six__card">
                    <h3 className="section__six__card__title">
                      Treatment Constructor
                    </h3>
                    <p>
                      Flexible adjustment of the treatment protocol, individual
                      adjustment by patient groups, adjustment of scales and
                      medical monitoring. Thus, the quality of treatment is
                      improved by 70%.
                    </p>
                  </div>
                  <img src={section6Bottom} alt="section 6 Bottom" />
                </>
              }
            />
          </div>
          <img
            src={macBookPro16}
            alt="mac book pro 16"
            style={{ width: "30em", zIndex: 10 }}
          />
        </div>
        <GetConsultation />
      </section>
      <section className="section__seven">
        <h2 className="section__seven__header">
          Your clinic, staff and physicians{" "}
          <span className="section__six__header__blue">
            will work like <br /> clockwork
          </span>{" "}
          with the MedData platform
        </h2>
        <div className="section__seven__cards">
          <div className="section__seven__cards__left">
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">
                    We find the perfect solution
                  </h3>
                  <p>
                    We predict and prevent errors in management, identify the
                    dynamics of the clinic's development and help in online
                    management, offering smart recommendations for optimizing
                    business processes.
                  </p>
                </div>
              }
            />
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">
                    We sign a non-disclosure agreement with you
                  </h3>
                  <p>We sign a non-disclosure agreement with you</p>
                </div>
              }
            />
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">
                    Post-support and audit
                  </h3>
                  <p>
                    After implementation, you will not be left alone with the
                    platform. We conduct an audit on the platform maintaining
                    quality every 3 months, the work of automation and the
                    addition of amplifying tools
                  </p>
                </div>
              }
            />
          </div>
          <div className="section__seven__cards__right">
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">
                    We automate routine processes
                  </h3>
                  <p>
                    We will implement the MedData platform for your clinics, set
                    up a service constructor, clinics, a personal account for a
                    doctor, manager, and patient. So that employees can focus
                    only on the most important
                  </p>
                </div>
              }
            />
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">
                    We will keep your data safe
                  </h3>
                  <p>
                    The patients database you have developed, the internal data
                    of physicians and your clinic will be protected: no one will
                    be able to download it without permission
                  </p>
                </div>
              }
            />
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">
                    Fast integration
                  </h3>
                  <p>
                    The list of works and the deadlines for their implementation
                    are specified in the contract with the terms of reference
                    agreed with you
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>
      <section className="section__eight">
        <Ad
          title={
            <>
              Free demo of the <br /> MedData platform
            </>
          }
          text={
            <>
              Let's demonstrate how the platform operates. In this example, you
              will unlock <br /> the potential that will increase the efficiency
              of your clinic.
            </>
          }
          bottomButtonText="View demo"
        />
        <div className="section__eight__slogan">
          <h2 style={{ textTransform: "uppercase" }}>control = income</h2>
          <h2>
            By connecting the MedData platform now, you will increase clinic
            sales by 5 times
          </h2>
        </div>
        <GetConsultation />
      </section>
      <section className="section__about">
        <h2 className="section__about__header">Mass Media about us</h2>
      </section>
    </div>
  );
};

export default Main;
