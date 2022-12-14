import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Goals } from "../../../assets/images/goals.svg";
import CustomList from "../../../components/lists/CustomList/CustomList";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation(["about"], { keyPrefix: "section2" });

  return (
    <section className="section__two">
      <div className="section__two__top">
        <div className="section__two__mission">
          <div className="section__two__center section__two__mission__center">
            <h1 className="section__two__heading">{t("mission.heading")}</h1>
            <div className="section__two__content">
              <p
                dangerouslySetInnerHTML={{
                  __html: t("mission.content") as string,
                }}
              />
            </div>
            <Mission className="section__two__svg" />
          </div>
        </div>
        <div className="section__two__vision">
          <div className="section__two__center section__two__vision__center">
            <h1 className="section__two__heading">{t("vision.heading")}</h1>
            <div className="section__two__content">
              <p
                dangerouslySetInnerHTML={{
                  __html: t("vision.content") as string,
                }}
              />
            </div>
            <Vision className="section__two__svg" />
          </div>
        </div>
      </div>
      <div className="section__two__bottom">
        <div className="section__two__goals">
          <div className="section__two__center container">
            <h1 className="section__two__heading">{t("goals.heading")}</h1>
            <div className="section__two__content goals__content">
              <CustomList
                type="dot"
                items={t("goals.content.left", { returnObjects: true })}
              />
              <CustomList
                type="dot"
                items={t("goals.content.right", { returnObjects: true })}
              />
            </div>
            <Goals className="section__two__svg" />
          </div>
        </div>
        <div className="section__two__motivation">
          <div className="section__two__center container">
            <h1 className="section__two__heading">{t("motivation.heading")}</h1>
            <div className="section__two__content goals__content">
              {t("motivation.content.line1")}
              <br />
              <br />
              {t("motivation.content.line2")}
            </div>
            <Goals className="section__two__svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
