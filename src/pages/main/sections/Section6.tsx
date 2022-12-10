import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";
import macBookPro16 from "../../../assets/images/MacBookPro16.svg";
import section6Top from "../../../assets/images/section6Top.svg";
import section6Middle from "../../../assets/images/section6Middle.svg";
import section6Bottom from "../../../assets/images/section6Bottom.svg";
import GetConsultation from "../../../components/buttons/GetConsultation/GetConsultation";

const Section6 = () => {
  return (
    <section className="section__six">
      <h2 className="section__six__header">
        How can MedData help doctors and clinic staff <br /> work{" "}
        <span className="section__six__header__blue">60% more efficiently</span>
        ?
      </h2>
      <div className="section__six__middle">
        <div className="section__six__cards">
          <CardWithBadge
            alignItems="center"
            children={
              <>
                <div className="section__six__card">
                  <h3 className="section__six__card__title">
                    Reception automation
                  </h3>
                  <p>
                    Personally customizable patient admission protocols. MedData
                    learns and at the same time prevents errors in the reception
                    protocols.
                  </p>
                </div>
                <img src={section6Top} alt="section 6 Top" />
              </>
            }
          />
          <CardWithBadge
            alignItems="center"
            children={
              <>
                <div className="section__six__card">
                  <h3 className="section__six__card__title">Deep Analytics</h3>
                  <p>
                    Using data from the treatment constructor and medical
                    monitoring, MedData is able to analyze the treatment and the
                    patient's condition online.
                  </p>
                </div>
                <img src={section6Middle} alt="section 6 Middle" />
              </>
            }
          />
          <CardWithBadge
            alignItems="center"
            children={
              <>
                <div className="section__six__card">
                  <h3 className="section__six__card__title">
                    Treatment Constructor
                  </h3>
                  <p>
                    Flexible adjustment of the treatment protocol, individual
                    adjustment by patient groups, adjustment of scales and
                    medical monitoring. Thus, the quality of treatment is
                    improved by 70%.
                  </p>
                </div>
                <img src={section6Bottom} alt="section 6 Bottom" />
              </>
            }
          />
        </div>
        <img
          src={macBookPro16}
          className="section__six__middle__right"
          alt="mac book pro 16"
        />
      </div>
      <GetConsultation />
    </section>
  );
};

export default Section6;
