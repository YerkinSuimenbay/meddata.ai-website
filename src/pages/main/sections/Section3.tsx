import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";

const Section3 = () => {
  return (
    <section className="section__three">
      <h2 className="section__three__header">
        <span className="section__three__header__blue">More than 70% </span>
        of clinics <br /> face these problems:
      </h2>
      <div className="section__three__cards">
        <CardWithBadge
          children={
            <p>
              of business and work processes are not <br /> digitized
            </p>
          }
          textBadge="75%"
          className="topLeft"
        />
        <CardWithBadge
          children={
            <p>
              annual clinics losses due to lack of <br /> digitization
            </p>
          }
          textBadge="от 8 до 20%"
          className="topRight"
        />
        <CardWithBadge
          children={
            <p>
              cannot implement online services to improve <br /> service within
              a clinic
            </p>
          }
          textBadge="87%"
          className="bottomLeft"
        />
        <CardWithBadge
          children={
            <p>
              billion a year clinics losses due to cash <br /> payments
            </p>
          }
          textBadge="100 млрд $"
          className="bottomRight"
        />
      </div>
    </section>
  );
};

export default Section3;
