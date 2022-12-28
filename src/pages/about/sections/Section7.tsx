import Person from "../../../components/cards/Person/Person";

// PEOPLE
import CEO from "../../../assets/images/people/CEO.svg";
import CEOPlaceholder from "../../../assets/images/people/CEO.webp";
// import CFO from "../../../assets/images/people/CFO.svg";
// import CMO from "../../../assets/images/people/CMO.svg";
import CPO from "../../../assets/images/people/CPO.svg";
import CPOPlaceholder from "../../../assets/images/people/CPO.webp";
import TechnicalDirector from "../../../assets/images/people/TechnicalDirector.svg";
import TechnicalDirectorPlaceholder from "../../../assets/images/people/TechnicalDirector.webp";
import HeadOfDesign from "../../../assets/images/people/HeadOfDesign.svg";
import HeadOfDesignPlaceholder from "../../../assets/images/people/HeadOfDesign.webp";
import LegalOfficer from "../../../assets/images/people/LegalOfficer.svg";
import LegalOfficerPlaceholder from "../../../assets/images/people/LegalOfficer.webp";
import Neurosurgeon from "../../../assets/images/people/Neurosurgeon.svg";
import NeurosurgeonPlaceholder from "../../../assets/images/people/Neurosurgeon.webp";
import ProductDirector from "../../../assets/images/people/ProductDirector.svg";
import ProductDirectorPlaceholder from "../../../assets/images/people/ProductDirector.webp";
import RegionalOfficer from "../../../assets/images/people/RegionalOfficer.svg";
import RegionalOfficerPlaceholder from "../../../assets/images/people/RegionalOfficer.webp";
import { useTranslation } from "react-i18next";

const Section7 = () => {
  const { t } = useTranslation("about", { keyPrefix: "section7" });

  enum Position {
    CEO = "CEO",
    RegionalOfficer = "RegionalOfficer",
    ProductDirector = "ProductDirector",
    LegalOfficer = "LegalOfficer",
    TechnicalDirector = "TechnicalDirector",
    Neurosurgeon = "Neurosurgeon",
    HeadOfDesign = "HeadOfDesign",
    CPO = "CPO",
  }

  const getProfileAndProfilePlaceholder = (
    position: Position
  ): {
    profile: string;
    profilePlaceholder: string;
  } => {
    let profile = "";
    let profilePlaceholder = "";

    if (position === Position.CEO) {
      profile = CEO;
      profilePlaceholder = CEOPlaceholder;
    } else if (position === Position.RegionalOfficer) {
      profile = RegionalOfficer;
      profilePlaceholder = RegionalOfficerPlaceholder;
    } else if (position === Position.ProductDirector) {
      profile = ProductDirector;
      profilePlaceholder = ProductDirectorPlaceholder;
    } else if (position === Position.LegalOfficer) {
      profile = LegalOfficer;
      profilePlaceholder = LegalOfficerPlaceholder;
    } else if (position === Position.TechnicalDirector) {
      profile = TechnicalDirector;
      profilePlaceholder = TechnicalDirectorPlaceholder;
    } else if (position === Position.Neurosurgeon) {
      profile = Neurosurgeon;
      profilePlaceholder = NeurosurgeonPlaceholder;
    } else if (position === Position.HeadOfDesign) {
      profile = HeadOfDesign;
      profilePlaceholder = HeadOfDesignPlaceholder;
    } else if (position === Position.CPO) {
      profile = CPO;
      profilePlaceholder = CPOPlaceholder;
    }
    return { profile, profilePlaceholder };
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
            {...getProfileAndProfilePlaceholder(position as Position)}
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
