import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";

const Section7 = () => {
  return (
    <section className="section__seven">
      <h2 className="section__seven__header">
        Your clinic, staff and physicians{" "}
        <span className="section__six__header__blue">
          will work like <br /> clockwork
        </span>{" "}
        with the MedData platform
      </h2>
      <div className="section__seven__cards">
        <div className="section__seven__cards__left">
          <CardWithBadge
            children={
              <div className="section__seven__card">
                <h3 className="section__seven__card__title">
                  We find the perfect solution
                </h3>
                <p>
                  We predict and prevent errors in management, identify the
                  dynamics of the clinic's development and help in online
                  management, offering smart recommendations for optimizing
                  business processes.
                </p>
              </div>
            }
          />
          <CardWithBadge
            children={
              <div className="section__seven__card">
                <h3 className="section__seven__card__title">
                  We sign a non-disclosure agreement with you
                </h3>
                <p>We sign a non-disclosure agreement with you</p>
              </div>
            }
          />
          <CardWithBadge
            children={
              <div className="section__seven__card">
                <h3 className="section__seven__card__title">
                  Post-support and audit
                </h3>
                <p>
                  After implementation, you will not be left alone with the
                  platform. We conduct an audit on the platform maintaining
                  quality every 3 months, the work of automation and the
                  addition of amplifying tools
                </p>
              </div>
            }
          />
        </div>
        <div className="section__seven__cards__right">
          <CardWithBadge
            children={
              <div className="section__seven__card">
                <h3 className="section__seven__card__title">
                  We automate routine processes
                </h3>
                <p>
                  We will implement the MedData platform for your clinics, set
                  up a service constructor, clinics, a personal account for a
                  doctor, manager, and patient. So that employees can focus only
                  on the most important
                </p>
              </div>
            }
          />
          <CardWithBadge
            children={
              <div className="section__seven__card">
                <h3 className="section__seven__card__title">
                  We will keep your data safe
                </h3>
                <p>
                  The patients database you have developed, the internal data of
                  physicians and your clinic will be protected: no one will be
                  able to download it without permission
                </p>
              </div>
            }
          />
          <CardWithBadge
            children={
              <div className="section__seven__card">
                <h3 className="section__seven__card__title">
                  Fast integration
                </h3>
                <p>
                  The list of works and the deadlines for their implementation
                  are specified in the contract with the terms of reference
                  agreed with you
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Section7;
