import { useTranslation } from "react-i18next";
import { ReactComponent as GlobalMap } from "../../../assets/images/globalMap.svg";
import { ReactComponent as GlobalMapRu } from "../../../assets/images/globalMapRu.svg";
import { Lang } from "../../../types";

const Section5 = () => {
  const { t, i18n } = useTranslation("about", { keyPrefix: "section5" });

  const renderGlobalMap = () => {
    if (i18n.language === Lang.ru) {
      return <GlobalMapRu />;
    }

    return <GlobalMap />;
  };

  return (
    <section className="section__five container">
      <h1 className="section__heading section__five__heading">
        {t("heading")}
      </h1>
      {renderGlobalMap()}
    </section>
  );
};

export default Section5;
