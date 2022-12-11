import Ripple from "../../../components/rest/Ripple/Ripple";
import { ReactComponent as MacBookPro17 } from "../../../assets/images/MacBookPro17.svg";
import RippleAnimated from "../../../components/rest/Ripple/RippleAnimated";
import GetConsultation from "../../../components/buttons/GetConsultation/GetConsultation";

const Section2 = () => {
  return (
    <section className="section__two container">
      <h2 className="section__heading section__two__heading">
        Meddata — медицинская платформа, для <br />
        <span className="blue">прозрачного и эффективного</span>
        <br />
        управления клиникой
      </h2>
      <RippleAnimated />
      <MacBookPro17 className="section__two__macbook" />
      <p className="section__two__afterMacbook blue">
        первые результаты уже через 2 недели
      </p>
      <p className="section__two__slogan">
        MedData is a medical platform, for transparent and efficient clinic
        management
      </p>
      <GetConsultation text="free consultation" />
    </section>
  );
};

export default Section2;
