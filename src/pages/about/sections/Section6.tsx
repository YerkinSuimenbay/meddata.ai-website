import { useTranslation } from "react-i18next";
// import { ReactComponent as TextMed } from "../../../assets/images/textMed.svg";
// import { ReactComponent as TextData } from "../../../assets/images/textData.svg";
import { ReactComponent as SectionSix } from "../../../assets/images/SectionSix.svg";
import { ReactComponent as SectionSixRu } from "../../../assets/images/SectionSixRu.svg";
import { ReactComponent as SectionSixMobile } from "../../../assets/images/SectionSixMobile.svg";
import { ReactComponent as SectionSixMobileRu } from "../../../assets/images/SectionSixMobileRu.svg";
import { Lang } from "../../../types";

const Section6 = () => {
  const { i18n } = useTranslation();

  const renderSectionSix = () => {
    if (i18n.language === Lang.ru) {
      return (
        <>
          <SectionSixRu className="desktop" />
          <SectionSixMobileRu className="mobile" />
        </>
      );
    }

    return (
      <>
        <SectionSix className="desktop" />
        <SectionSixMobile className="mobile" />
      </>
    );
  };

  return <section className="section__six">{renderSectionSix()}</section>;
};

export default Section6;
