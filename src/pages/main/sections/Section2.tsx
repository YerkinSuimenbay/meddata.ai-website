import { ReactComponent as MacBookPro17 } from "../../../assets/images/MacBookPro17.svg";
import RippleAnimated from "../../../components/rest/ripple/RippleAnimated";
import GetConsultation from "../../../components/buttons/GetConsultation/GetConsultation";

const Section2 = () => {
  return (
    <section className="section__two container">
      <RippleAnimated />
      <MacBookPro17 className="section__two__macbook" />
      <p className="section__two__slogan">
        MedData is a medical platform, for transparent and efficient clinic
        management
      </p>
      <GetConsultation text="free consultation" />
    </section>
  );
};

export default Section2;
