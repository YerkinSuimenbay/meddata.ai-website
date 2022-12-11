import GetConsultation from "../../../components/buttons/GetConsultation/GetConsultation";
import Ad from "../../../components/cards/Ad/Ad";

const Section8 = () => {
  return (
    <section className="section__eight container">
      <Ad
        title={<>Free demo of the MedData platform</>}
        text={
          <>
            Let's demonstrate how the platform operates. In this example, you
            will unlock the potential that will increase the efficiency of your
            clinic.
          </>
        }
        bottomButtonText="View demo"
      />
      <div className="section__eight__slogan">
        <h2 className="section__heading">
          <span style={{ textTransform: "uppercase" }}>control = income</span>{" "}
          <br />
          By connecting the MedData platform now, you will increase clinic sales
          by 5 times
        </h2>
      </div>
      <GetConsultation />
    </section>
  );
};

export default Section8;
