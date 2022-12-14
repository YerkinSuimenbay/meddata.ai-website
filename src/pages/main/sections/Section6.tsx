import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";
import macBookPro16 from "../../../assets/images/MacBookPro16.svg";
import section6Top from "../../../assets/images/section6Top.svg";
import section6Middle from "../../../assets/images/section6Middle.svg";
import section6Bottom from "../../../assets/images/section6Bottom.svg";
import GetConsultation from "../../../components/buttons/GetConsultation/GetConsultation";
import { useTranslation } from "react-i18next";
import { Lang } from "../../../types";

const Section6 = () => {
  const { t, i18n } = useTranslation(["main"], { keyPrefix: "section6" });

  const cards: {
    title: string;
    text: string;
  }[] = t("cards", {
    returnObjects: true,
  });

  const renderHeading = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          Как MedData поможет врачам и сотрудникам клиники работать{" "}
          <span className="section__heading__blue1">на 60% эффективнее?</span>
        </>
      );
    } else if (i18n.language === Lang.en) {
      return (
        <>
          How can MedData help doctors and clinic staff work{" "}
          <span className="section__heading__blue1">60% more efficiently?</span>
        </>
      );
    }
  };

  const renderCardImage = (index: number) => {
    if (index === 0) return <img src={section6Top} alt="section 6 Top" />;
    if (index === 1) return <img src={section6Middle} alt="section 6 Middle" />;
    return <img src={section6Bottom} alt="section 6 Bottom" />;
  };

  return (
    <section className="section__six container">
      <h2 className="section__heading section__six__heading">
        {renderHeading()}
      </h2>
      <div className="section__six__middle">
        <div className="section__six__cards">
          {cards.map((card, index) => (
            <CardWithBadge
              key={card.title}
              alignItems="center"
              children={
                <>
                  <div className="section__six__card">
                    <h3 className="section__six__card__title">{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  {renderCardImage(index)}
                </>
              }
            />
          ))}
        </div>
        <img
          src={macBookPro16}
          className="section__six__middle__right"
          alt="mac book pro 16"
        />
      </div>
      <GetConsultation />
    </section>
  );
};

export default Section6;
