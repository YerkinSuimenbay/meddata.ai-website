import { useTranslation } from "react-i18next";
import { ReactComponent as RoadMap } from "../../../assets/images/roadMap.svg";
import { ReactComponent as RoadMapRu } from "../../../assets/images/roadMapRu.svg";
import { Lang } from "../../../types";

const Section4 = () => {
  const { t, i18n } = useTranslation("about", { keyPrefix: "section4" });

  const renderRoadMap = () => {
    if (i18n.language === Lang.ru) {
      return <RoadMapRu />;
    }

    return <RoadMap />;
  };

  return (
    <section className="section__four container">
      <h1 className="section__heading section__four__heading">
        {t("heading")}
      </h1>
      {renderRoadMap()}
    </section>
  );
};

export default Section4;
