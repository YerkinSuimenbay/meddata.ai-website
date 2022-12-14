import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";
import CustomList from "../../../components/lists/CustomList/CustomList";
import section4TopL from "../../../assets/images/section4TopL.svg";
import section4TopR from "../../../assets/images/section4TopR.svg";
import section4BottomL from "../../../assets/images/section4BottomL.svg";
import section4BottomR from "../../../assets/images/section4BottomR.svg";
import section4BottomBlock from "../../../assets/images/section4BottomBlock.svg";
import { useTranslation } from "react-i18next";
import { Lang } from "../../../types";

const Section4 = () => {
  const { t, i18n } = useTranslation(["main"], { keyPrefix: "section4" });

  const cards: { left: { text: string }[]; right: { text: string }[] } = t(
    "cards",
    {
      returnObjects: true,
    }
  );

  const renderHeading = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          Как подключение платформы Meddata может{" "}
          <span className="section__heading__blue2">улучшить показатели</span>{" "}
          вашей клиники на <span className="section__heading__blue2">60%?</span>
        </>
      );
    } else if (i18n.language === Lang.en) {
      return (
        <>
          How can MedData platform connection{" "}
          <span className="section__heading__blue2">
            improve your clinic's performance by 60%?
          </span>
        </>
      );
    }
  };

  const renderCardImage = (
    position: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight"
  ) => {
    if (position === "TopLeft")
      return <img src={section4TopL} alt="traced layer" />;
    if (position === "TopRight")
      return <img src={section4TopR} alt="traced layer" />;
    if (position === "BottomLeft")
      return <img src={section4BottomL} alt="traced layer" />;
    if (position === "BottomRight")
      return <img src={section4BottomR} alt="traced layer" />;
  };

  return (
    <section className="section__four container">
      <h2 className="section__heading section__four__heading">
        {renderHeading()}
      </h2>
      <div className="section__four__cards">
        <div className="section__four__cards__left">
          {cards.left.map((card, index) => (
            <CardWithBadge
              key={card.text}
              children={
                <>
                  {renderCardImage(index === 0 ? "TopLeft" : "TopRight")}
                  <p dangerouslySetInnerHTML={{ __html: card.text }} />
                </>
              }
            />
          ))}
        </div>
        <div className="section__four__cards__right">
          {cards.right.map((card, index) => (
            <CardWithBadge
              key={card.text}
              children={
                <>
                  {renderCardImage(index === 0 ? "BottomLeft" : "BottomRight")}
                  <p dangerouslySetInnerHTML={{ __html: card.text }} />
                </>
              }
            />
          ))}
        </div>
      </div>

      <div className="section__four__bottom">
        <CardWithBadge
          alignItems="center"
          children={
            <>
              <CustomList
                title={t("bottom.title") as string}
                type="dot"
                items={t("bottom.items", { returnObjects: true })}
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
  );
};

export default Section4;
