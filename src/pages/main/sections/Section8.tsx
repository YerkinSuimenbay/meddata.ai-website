import React from "react";
import { useTranslation } from "react-i18next";
import GetConsultation from "../../../components/buttons/GetConsultation/GetConsultation";
import Ad from "../../../components/cards/Ad/Ad";

const Section8 = () => {
  const { t } = useTranslation(["main"], { keyPrefix: "section8" });

  const texts = t("ad.text", { returnObjects: true }) as string[];

  return (
    <section className="section__eight container">
      <Ad
        title={<>{t("ad.title")}</>}
        text={
          <>
            {texts.map((text, i) => {
              return (
                <React.Fragment key={text}>
                  {text}
                  {i < texts.length - 1 && <br />}
                </React.Fragment>
              );
            })}
          </>
        }
        bottomButtonText={t("ad.bottomButtonText")}
      />
      <div className="section__eight__slogan">
        <h2 className="section__heading">
          <span style={{ textTransform: "uppercase" }}>
            {t("slogan.uppercase")}
          </span>{" "}
          <br />
          {t("slogan.rest")}
        </h2>
      </div>
      <GetConsultation />
    </section>
  );
};

export default Section8;
