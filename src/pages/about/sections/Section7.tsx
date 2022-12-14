import Person from "../../../components/cards/Person/Person";

// PEOPLE
import CEO from "../../../assets/images/people/CEO.svg";
import CFO from "../../../assets/images/people/CFO.svg";
import CMO from "../../../assets/images/people/CMO.svg";
import CPO from "../../../assets/images/people/CPO.svg";
import TechnicalDirector from "../../../assets/images/people/TechnicalDirector.svg";
import HeadOfDesign from "../../../assets/images/people/HeadOfDesign.svg";
import LegalOfficer from "../../../assets/images/people/LegalOfficer.svg";
import Neurosurgeon from "../../../assets/images/people/Neurosurgeon.svg";
import ProductDirector from "../../../assets/images/people/ProductDirector.svg";
import RegionalOfficer from "../../../assets/images/people/RegionalOfficer.svg";
import { useTranslation } from "react-i18next";

const Section7 = () => {
  const { t } = useTranslation("about", { keyPrefix: "section7" });

  enum Position {
    CEO = "CEO",
    RegionalOfficer = "RegionalOfficer",
    ProductDirector = "ProductDirector",
    LegalOfficer = "LegalOfficer",
    TechnicalDirector = "TechnicalDirector",
    CMO = "CMO",
    Neurosurgeon = "Neurosurgeon",
    HeadOfDesign = "HeadOfDesign",
    CPO = "CPO",
    CFO = "CFO",
  }

  const getProfile = (position: Position) => {
    if (position === Position.CEO) return CEO;
    if (position === Position.RegionalOfficer) return RegionalOfficer;
    if (position === Position.ProductDirector) return ProductDirector;
    if (position === Position.LegalOfficer) return LegalOfficer;
    if (position === Position.TechnicalDirector) return TechnicalDirector;
    if (position === Position.CMO) return CMO;
    if (position === Position.Neurosurgeon) return Neurosurgeon;
    if (position === Position.HeadOfDesign) return HeadOfDesign;
    if (position === Position.CPO) return CPO;
    return CFO;
  };

  return (
    <section className="section__seven">
      <h1 className="section__heading section__seven__heading">
        {t("heading")}
      </h1>
      <div className="section__seven__people">
        {Object.keys(Position).map((position) => (
          <Person
            key={position}
            profile={getProfile(position as Position)}
            name={t(`${position}.name`)}
            position={t(`${position}.position`)}
            details={t(`${position}.details`, { returnObjects: true })}
          />
        ))}
      </div>
    </section>
  );
};

export default Section7;
