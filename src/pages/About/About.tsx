import React, { useEffect, useRef } from "react";
import "./about.scss";
import unitedNationsEmblem from "../../assets/images/unitedNationsEmblem.svg";
import logoMeddata from "../../assets/images/logo-meddata.svg";
import { ReactComponent as Mission } from "../../assets/images/mission.svg";
import { ReactComponent as Vision } from "../../assets/images/vision.svg";
import { ReactComponent as Goals } from "../../assets/images/goals.svg";
import { ReactComponent as MeddataApps } from "../../assets/images/meddataApps.svg";
import { ReactComponent as RoadMap } from "../../assets/images/roadMap.svg";
import { ReactComponent as GlobalMap } from "../../assets/images/globalMap.svg";
import { ReactComponent as TextMed } from "../../assets/images/textMed.svg";
import { ReactComponent as TextData } from "../../assets/images/textData.svg";
import { ReactComponent as SectionSix } from "../../assets/images/sectionSix.svg";
import CustomList from "../../components/lists/CustomList/CustomList";
import Person from "../../components/cards/Person/Person";
import Award from "../../components/cards/Award/Award";

// PEOPLE
import CEO from "../../assets/images/people/CEO.svg";
import CFO from "../../assets/images/people/CFO.svg";
import CMO from "../../assets/images/people/CMO.svg";
import CPO from "../../assets/images/people/CPO.svg";
import TechnicalDirector from "../../assets/images/people/TechnicalDirector.svg";
import HeadOfDesign from "../../assets/images/people/HeadOfDesign.svg";
import LegalOfficer from "../../assets/images/people/LegalOfficer.svg";
import Neurosurgeon from "../../assets/images/people/Neurosurgeon.svg";
import ProductDirector from "../../assets/images/people/ProductDirector.svg";
import RegionalOfficer from "../../assets/images/people/RegionalOfficer.svg";

// AWARDS
import DigitalBridge from "../../assets/images/DigitalBridge.svg";
import Sabi from "../../assets/images/Sabi.svg";
import { ReactComponent as Sabic } from "../../assets/images/Sabi.svg";

const people = [
  {
    profile: CEO,
    name: "Sheikhislam Sahi",
    position: "Founder, CEO",
    details: ["Neurosurgeon, neurobiologist.", "30 Under 30 Forbes Member"],
  },
  {
    profile: RegionalOfficer,
    name: "Islam Mamadzhanov",
    position: "Regional officer",
    details: [
      "Entrepreneurship for 11 years",
      "Founder of IMB Croup (IT company)",
      "Founder, Erasmus SKSU (EdTech)",
      "Education: University of Montana, Austria; Polytechnic of Valencia, Spain",
    ],
  },
  {
    profile: ProductDirector,
    name: "Alzhan Sainov",
    position: "Product Director",
    details: [
      "Crypto expert with 5 years of Experience",
      'Creator of the concept of "Get treated-Earn" in MedData',
    ],
  },
  {
    profile: LegalOfficer,
    name: "Khalel Tuganbayev",
    position: "Legal officer",
    details: [
      "More than 10 years of experience in law and more than 8 years in the Big Four company.",
      "Advised on issues of the World Bank, the European Bank for Reconstruction and Development, Eurasian Resources Group. Participated in the development of laws of the Republic of Kazakhstan.",
    ],
  },
  {
    profile: TechnicalDirector,
    name: "Rachit Tomar",
    position: "Technical Director",
    details: [
      "More than 10 years of experience in the field of medical technology",
      "Worked on the development of well-known medical products in India",
      "Participated in the creation of blockchain technology in the fintech sector",
    ],
  },
  {
    profile: CMO,
    name: "Yana Ten",
    position: "CMO",
    details: [
      "An expert with 7 years of marketing experience",
      "Built strategies for startups in such regions as the UAE, the UK, Indonesia and the CIS",
    ],
  },
  {
    profile: Neurosurgeon,
    name: "Aziz Akkaev",
    position: "Neurosurgeon",
    details: [
      "Worked in 40 countries",
      'Founded 2 clinics of a new format - "Center for Pain Treatment and Regenerative Medicine"',
    ],
  },
  {
    profile: HeadOfDesign,
    name: "Khalilova Maryam",
    position: "Head of design",
    details: [
      "More than 19,000 hours in design, work in projects in 18 countries of the world",
    ],
  },
  {
    profile: CPO,
    name: "Dilmurat Islamov",
    position: "CPO",
    details: ["Participated in the development of Zood Superapp and Alfabank"],
  },
  {
    profile: CFO,
    name: "Sadvakas Sanjar",
    position: "CFO",
    details: [
      'He has more than 7 years of audit experience in the "big Four"',
      "At various times, he headed the reporting and control department, as well as financial departments in various industries",
    ],
  },
];

const awards = [
  {
    image: DigitalBridge,
    name: "Innovation of the Year 2021",
  },
  {
    image: unitedNationsEmblem,
    name: "TOP-100 innovative digital solutions of the world",
  },
  {
    image: Sabi,
    name: 'Winner of the "Build Your Own Business" contest from the Sabi Foundation"',
  },
];

const About = () => {
  const backgroundTwoRef = useRef<HTMLDivElement | null>(null);

  const fadeInFadeOut = () => {
    if (backgroundTwoRef.current == null) return;
    const styles = getComputedStyle(backgroundTwoRef.current);
    const opacity = styles.opacity;
    backgroundTwoRef.current.style.opacity = opacity === "0" ? "1" : "0";
  };

  useEffect(() => {
    const intervalId = setInterval(fadeInFadeOut, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about__page">
      <div className="section__one__background">
        <div className="one">
          <section className="section__one container">
            <div className="section__one__left">
              <img src={unitedNationsEmblem} alt="united nations logo" />
            </div>
            <div className="section__one__right">
              <h1 className="heading">
                The United Nations has nominated <br />{" "}
                <span className="blue">MEDDATA</span> as the most innovative{" "}
                <br />
                digital solution
              </h1>
            </div>
          </section>
        </div>
        <div className="two" ref={backgroundTwoRef}>
          <section className="section__one container">
            <div id="pointer">
              <img src={logoMeddata} alt="meddata.ai logo" />
              <h1 className="heading">
                {" "}
                <span className="blue">
                  A new phase of <br /> health care
                </span>
              </h1>
            </div>
          </section>
        </div>
      </div>

      <section className="section__two">
        <div className="section__two__mission">
          <div className="section__two__center section__two__mission__center">
            <h1 className="section__two__heading">Mission</h1>
            <div className="section__two__content">
              Ensure healthy lifestyles <br /> and the well-being of the
              population.
            </div>
            <Mission className="section__two__svg" />
          </div>
        </div>
        <div className="section__two__vision">
          <div className="section__two__center section__two__vision__center">
            <h1 className="section__two__heading">Vision</h1>
            <div className="section__two__content">
              To become an event that changed people's health for the better and
              irrevocably.
            </div>
            <Vision className="section__two__svg" />
          </div>
        </div>
        <div className="section__two__goals">
          <div className="section__two__center container">
            <h1 className="section__two__heading">Goals</h1>
            <div className="section__two__content goals__content">
              <CustomList
                type="dot"
                items={[
                  "Become a leader among medical platforms",
                  "Gain the trust of employees, partners and customers",
                ]}
              />
              <CustomList
                type="dot"
                items={[
                  "Provide high security and reliability for employees, partners and customers",
                  "Implement the credo “We are all clients to each other”, respect each other and clients",
                  "Become a fintech company",
                ]}
              />
            </div>
            <Goals className="section__two__svg" />
          </div>
        </div>
      </section>

      <section className="section__three">
        <MeddataApps />
      </section>
      <section className="section__four container">
        <h1 className="section__four__heading">
          MedData development plan 2022-2025
        </h1>
        <RoadMap />
      </section>
      <section className="section__five container">
        <h1 className="section__five__heading">MedData map</h1>
        <GlobalMap />
      </section>
      {/* <section className="section__six">
        <div className="section__six__top">
          <h1 className="section__six__bigText">
            480 <br /> clinics
          </h1>
          <TextMed className="section__six__bgText med" />
        </div>
        <div className="section__six__bottom">
          <h1 className="section__six__bigText">
            $1,2 <br /> million
          </h1>
          <TextData className="section__six__bgText data" />
        </div>
      </section> */}
      <section className="section__six">
        <SectionSix />
      </section>
      <section className="section__seven">
        <h1 className="section__seven__heading">Who are we?</h1>
        <div className="section__seven__people">
          {people.map((person) => (
            <Person
              key={person.position}
              profile={person.profile}
              name={person.name}
              position={person.position}
              details={person.details}
            />
          ))}
        </div>
      </section>
      <section className="section__eight">
        <h1 className="section__eight__heading">Advisory Board</h1>
        <div className="section__eight__people">
          {people.map((person) => (
            <Person
              key={person.position}
              profile={person.profile}
              name={person.name}
              position={person.position}
              details={person.details}
            />
          ))}
        </div>
      </section>
      <section className="section__nine container">
        <h1 className="section__nine__heading">Awards</h1>
        <div className="section__nine__awards">
          {awards.map((award) => (
            <Award key={award.name} image={award.image} name={award.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
