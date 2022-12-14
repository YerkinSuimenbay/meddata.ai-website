import { useTranslation } from "react-i18next";
import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";
import { Lang } from "../../../types";

const Section7 = () => {
  const { t, i18n } = useTranslation(["main"], { keyPrefix: "section7" });

  const cards: {
    left: { text: string; title: string }[];
    right: { text: string; title: string }[];
  } = t("cards", {
    returnObjects: true,
  });

  const renderHeading = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          Ваша клиника, сотрудники и врачи вместе с платформой Meddata{" "}
          <span className="section__heading__blue2">
            будут работать как часы
          </span>
        </>
      );
    } else if (i18n.language === Lang.en) {
      return (
        <>
          Your clinic, staff and physicians{" "}
          <span className="section__heading__blue2">
            will work like clockwork
          </span>{" "}
          with the MedData platform
        </>
      );
    }
  };

  return (
    <section className="section__seven container">
      <h2 className="section__heading section__seven__heading">
        {renderHeading()}
      </h2>
      <div className="section__seven__cards">
        <div className="section__seven__cards__left">
          {cards.left.map((card) => (
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              }
            />
          ))}
        </div>
        <div className="section__seven__cards__right">
          {cards.right.map((card) => (
            <CardWithBadge
              children={
                <div className="section__seven__card">
                  <h3 className="section__seven__card__title">{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
