import React from "react";
import { useTranslation } from "react-i18next";
import Ad from "../../../components/cards/Ad/Ad";

const Section5 = () => {
  const { t } = useTranslation(["main"], { keyPrefix: "section5" });

  const texts = t("ad.text", { returnObjects: true }) as string[];

  return (
    <section className="section__five container">
      <Ad
        topButtonText={t("ad.topButtonText") as string}
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
    </section>
  );
};

export default Section5;
