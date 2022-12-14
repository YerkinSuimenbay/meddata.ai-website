import React, { useEffect, useRef, useState } from "react";
import "./main.scss";
import "./verticalScrollingText.scss";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import SectionAbout from "./sections/SectionAbout";
import SectionQuestions from "./sections/SectionQuestions";

const images = [
  {
    alt: "1",
    src: "https://via.placeholder.com/800x350/0bf?text=image1",
  },
  {
    alt: "2",
    src: "https://via.placeholder.com/800x350/fb0?text=image2",
  },
  {
    alt: "3",
    src: "https://via.placeholder.com/800x350/b0f?text=image3",
  },
];

const Main: React.FC = () => {
  return (
    <>
      <div className="home__page">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <SectionAbout />
        <SectionQuestions />
      </div>
    </>
  );
};

export default Main;
