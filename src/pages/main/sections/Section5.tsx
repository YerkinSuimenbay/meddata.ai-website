import Ad from "../../../components/cards/Ad/Ad";

const Section5 = () => {
  return (
    <section className="section__five container">
      <Ad
        topButtonText="free consultation"
        title={
          <>
            Increase the effectiveness of <br /> the clinic within 2 months
          </>
        }
        text={
          <>
            By implementing the MedData platform. <br />
            Leave a request now for a free consultation.
          </>
        }
        bottomButtonText="To get the advice"
      />
    </section>
  );
};

export default Section5;
