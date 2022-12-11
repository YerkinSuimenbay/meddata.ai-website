import CardWithBadge from "../../../components/cards/CardWithBadge/CardWithBadge";
import CustomList from "../../../components/lists/CustomList/CustomList";
import section4TopL from "../../../assets/images/section4TopL.svg";
import section4TopR from "../../../assets/images/section4TopR.svg";
import section4BottomL from "../../../assets/images/section4BottomL.svg";
import section4BottomR from "../../../assets/images/section4BottomR.svg";
import section4BottomBlock from "../../../assets/images/section4BottomBlock.svg";

const Section4 = () => {
  return (
    <section className="section__four container">
      <h2 className="section__heading section__four__heading">
        How can MedData platform connection{" "}
        <span className="section__heading__blue2">
          improve
          {/* TODO: do we need <br/>  */}
          {/* <br /> */} your clinic's performance by 60%?
        </span>
      </h2>
      <div className="section__four__cards">
        <div className="section__four__cards__left">
          <CardWithBadge
            children={
              <>
                <img src={section4TopL} alt="traced layer" />
                <p>
                  individual platform customization for your clinic, for each
                  employee and group of patients, which will help{" "}
                  <b>management improvement by 45%</b>
                </p>
              </>
            }
          />
          <CardWithBadge
            children={
              <>
                <img src={section4BottomL} alt="traced layer" />
                <p>
                  <b>transparent financial analytics.</b> The MedData platform
                  is able to find and prevent errors in management, predict the
                  dynamics of the clinic's development
                </p>
              </>
            }
          />
        </div>
        <div className="section__four__cards__right">
          <CardWithBadge
            children={
              <>
                <img src={section4TopR} alt="traced layer" />
                <p>
                  deep analytics: the platform is easy to connect to the
                  services already working for you, thanks to the neural
                  network, it analyzes the data of employees, warehouse,
                  services, finances -{" "}
                  <b>
                    your manager will respond in time to the clinic shrinking
                    processes
                  </b>
                </p>
              </>
            }
          />
          <CardWithBadge
            children={
              <>
                <img src={section4BottomR} alt="traced layer" />
                <p>
                  a separate personal doctor's office will help you{" "}
                  <b>track your work effectiveness and KPI</b>
                </p>
              </>
            }
          />
        </div>
      </div>
      <div className="section__four__bottom">
        <CardWithBadge
          alignItems="center"
          children={
            <>
              <CustomList
                title="The MedData platform is powered by artificial
                intelligence, this will help:"
                type="dot"
                items={[
                  "conduct transparent financial analytics",
                  " predict the dynamics of the clinic development receive smart",
                  "recommendations for optimizing business processes receive",
                  "profit reporting and track the work of employees",
                ]}
              />
              <img
                src={section4BottomBlock}
                alt="brain"
                style={{ width: "10rem" }}
              />
            </>
          }
        />
      </div>
    </section>
  );
};

export default Section4;
