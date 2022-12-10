import Ripple from "../../../components/rest/Ripple/Ripple";
import macBookPro17 from "../../../assets/images/MacBookPro17.svg";

const Section2 = () => {
  return (
    <section className="section__two">
      {/* <div className="ripple">
      <div className="c1" />
      <div className="c2" />
      <div className="c3" />
    </div> */}
      <Ripple />
      <img src={macBookPro17} alt="MacBook Pro 17" />
      <p className="section__two__slogan">
        MedData is a medical platform, for transparent and efficient clinic
        management
      </p>
      <p className="section__two__bottom-text">free consultation</p>
    </section>
  );
};

export default Section2;
