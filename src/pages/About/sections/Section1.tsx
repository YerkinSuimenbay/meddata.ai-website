import { useEffect, useRef } from "react";
import unitedNationsEmblem from "../../../assets/images/unitedNationsEmblem.svg";
import logoMeddata from "../../../assets/images/logo-meddata.svg";

const Section1 = () => {
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
    <div className="section__one__background">
      <div className="one">
        <section className="section__one container">
          <div className="section__one__left">
            <img src={unitedNationsEmblem} alt="united nations logo" />
          </div>
          <div className="section__one__right">
            <h1 className="section__heading heading">
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
            <h2 className="heading2">
              A new phase of <br /> health care
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section1;
