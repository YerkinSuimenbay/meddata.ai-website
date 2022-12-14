import { useEffect, useRef } from "react";
import unitedNationsEmblem from "../../../assets/images/unitedNationsEmblem.svg";
import logoMeddata from "../../../assets/images/logo-meddata.svg";
import { useTranslation } from "react-i18next";
import { Lang } from "../../../types";

const Section1 = () => {
  const { i18n } = useTranslation();

  // const cards: { text: string; badgeText: string }[] = t("cards", {
  //   returnObjects: true,
  // });

  const renderHeading = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          ООН номинировал <br /> <span className="blue">MEDDATA</span> как самое
          инновационное цифровое решение
        </>
      );
    }
    return (
      <>
        The United Nations has nominated <br />{" "}
        <span className="blue">MEDDATA</span> as the most innovative digital
        solution
      </>
    );
  };

  const renderHeading2 = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          Новый этап <br />
          здравоохранения
        </>
      );
    }
    return (
      <>
        A new phase of <br /> health care
      </>
    );
  };

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
            <h1 className="section__heading heading">{renderHeading()}</h1>
          </div>
        </section>
      </div>
      <div className="two" ref={backgroundTwoRef}>
        <section className="section__one container">
          <div id="pointer">
            <img src={logoMeddata} alt="meddata.ai logo" />
            <h2 className="heading2">{renderHeading2()}</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section1;
