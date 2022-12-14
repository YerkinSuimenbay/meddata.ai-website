import Award from "../../../components/cards/Award/Award";
import DigitalBridge from "../../../assets/images/DigitalBridge.svg";
import Sabi from "../../../assets/images/Sabi.svg";
import unitedNationsEmblem from "../../../assets/images/unitedNationsEmblem.svg";
import { useTranslation } from "react-i18next";

const Section8 = () => {
  const { t } = useTranslation("about", { keyPrefix: "section8" });

  const awards = [
    {
      image: DigitalBridge,
      name: t("awards.0"),
    },
    {
      image: unitedNationsEmblem,
      name: t("awards.1"),
    },
    {
      image: Sabi,
      name: t("awards.2"),
    },
  ];

  return (
    <section className="section__eight">
      <h1 className="section__heading section__eight__heading">
        {t("heading")}
      </h1>
      <div className="section__eight__awards">
        {awards.map((award) => (
          <Award key={award.name} image={award.image} name={award.name} />
        ))}
      </div>
    </section>
  );
};

export default Section8;
