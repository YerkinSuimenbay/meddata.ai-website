import { ReactComponent as MeddataApps } from "../../../assets/images/meddataApps.svg";
import { ReactComponent as MeddataAppsRu } from "../../../assets/images/meddataAppsRu.svg";
import { ReactComponent as MeddataAppsMobile } from "../../../assets/images/meddataAppsMobile.svg";
import { ReactComponent as MeddataAppsMobileRu } from "../../../assets/images/meddataAppsMobileRu.svg";
import { useTranslation } from "react-i18next";
import { Lang } from "../../../types";

const Section3 = () => {
  const { i18n } = useTranslation();

  const renderMeddataApps = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          <MeddataAppsRu className="desktop" />
          <MeddataAppsMobileRu className="mobile" />
        </>
      );
    }

    return (
      <>
        <MeddataApps className="desktop" />
        <MeddataAppsMobile className="mobile" />
      </>
    );
  };

  return (
    <section className="section__three container">
      {renderMeddataApps()}
    </section>
  );
};

export default Section3;
