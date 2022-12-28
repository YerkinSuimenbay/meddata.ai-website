import { useTranslation } from "react-i18next";
// import { LazyLoadImage } from "react-lazy-load-image-component";

import { ReactComponent as MeddataApps } from "../../../assets/images/meddataApps.svg";
import { ReactComponent as MeddataAppsRu } from "../../../assets/images/meddataAppsRu.svg";
import { ReactComponent as MeddataAppsMobile } from "../../../assets/images/meddataAppsMobile.svg";
import { ReactComponent as MeddataAppsMobileRu } from "../../../assets/images/meddataAppsMobileRu.svg";
// import meddataApps from "../../../assets/images/meddata-apps/meddataApps.svg";
// import meddataAppsPlaceholder from "../../../assets/images/meddata-apps/meddataApps.jpg";
// import meddataAppsRu from "../../../assets/images/meddata-apps/meddataAppsRu.svg";
// import meddataAppsRuPlaceholder from "../../../assets/images/meddata-apps/meddataAppsRu.jpg";
// import meddataAppsMobile from "../../../assets/images/meddata-apps/meddataAppsMobile.svg";
// import meddataAppsMobilePlaceholder from "../../../assets/images/meddata-apps/meddataAppsMobile.jpg";
// import meddataAppsMobileRu from "../../../assets/images/meddata-apps/meddataAppsMobileRu.svg";
// import meddataAppsMobileRuPlaceholder from "../../../assets/images/meddata-apps/meddataAppsMobileRu.jpg";
import { Lang } from "../../../types";

const Section3 = () => {
  const { i18n } = useTranslation();

  const renderMeddataApps = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          <MeddataAppsRu className="desktop" />
          <MeddataAppsMobileRu className="mobile" />
          {/* <LazyLoadImage
            src={meddataAppsRu}
            alt={`meddata apps`}
            placeholderSrc={meddataAppsRuPlaceholder}
            effect="blur"
            className="desktop"
          />
          <LazyLoadImage
            src={meddataAppsMobileRu}
            alt={`meddata apps`}
            placeholderSrc={meddataAppsMobileRuPlaceholder}
            effect="blur"
            className="mobile"
          /> */}
        </>
      );
    }

    return (
      <>
        <MeddataApps className="desktop" />
        <MeddataAppsMobile className="mobile" />
        {/* <LazyLoadImage
          src={meddataApps}
          alt={`meddata apps`}
          placeholderSrc={meddataAppsPlaceholder}
          effect="blur"
          // width={800}
          // height={500}
          className="desktop"
        />
        <LazyLoadImage
          src={meddataAppsMobile}
          alt={`meddata apps`}
          placeholderSrc={meddataAppsMobilePlaceholder}
          effect="blur"
          className="mobile"
        /> */}
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
