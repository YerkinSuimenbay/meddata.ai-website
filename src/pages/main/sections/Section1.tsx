import logo from "../../../assets/images/logo-meddata.svg";

const Section1 = () => {
  return (
    <div className="section__one__background">
      <section className="section__one">
        <div className="section__one__left">
          <img src={logo} alt="meddata logo" />
          <h2>MedData.AI</h2>
        </div>
        <div className="section__one__right">
          <h1>
            Platform for efficient <br /> clinic management
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Section1;
