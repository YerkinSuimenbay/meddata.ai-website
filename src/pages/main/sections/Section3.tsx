import { useTranslation } from "react-i18next";
import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";
import { Lang } from "../../../types";

const Section3 = () => {
  const { t, i18n } = useTranslation(["main"], { keyPrefix: "section3" });

  const cards: { text: string; badgeText: string }[] = t("cards", {
    returnObjects: true,
  });

  const renderHeading = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          Более <span className="section__heading__blue2">70% клиник</span>{" "}
          сталкиваются с этими проблемами
        </>
      );
    } else if (i18n.language === Lang.en) {
      return (
        <>
          <span className="section__heading__blue2">More than 70% </span>
          of clinics <br /> face these problems:
        </>
      );
    }
  };

  return (
    <section className="section__three container">
      <h2 className="section__heading section__three__heading">
        {renderHeading()}
      </h2>
      <div className="section__three__cards">
        {cards.map((card) => (
          <CardWithBadge
            key={card.text}
            children={<p dangerouslySetInnerHTML={{ __html: card.text }}></p>}
            textBadge={card.badgeText}
          />
        ))}
      </div>
    </section>
  );
};

export default Section3;
