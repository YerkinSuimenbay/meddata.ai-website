import { ReactComponent as MacBookPro17 } from "../../../assets/images/MacBookPro17.svg";
import RippleAnimated from "../../../components/rest/ripple/RippleAnimated";
import GetConsultation from "../../../components/buttons/GetConsultation/GetConsultation";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation(["main"], { keyPrefix: "section2" });

  return (
    <section className="section__two container">
      <RippleAnimated />
      <MacBookPro17 className="section__two__macbook" />
      <p className="section__two__slogan">{t("slogan")}</p>
      <GetConsultation text={t("getConsultation") as string} />
    </section>
  );
};

export default Section2;
