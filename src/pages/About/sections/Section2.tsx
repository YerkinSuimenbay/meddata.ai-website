import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Goals } from "../../../assets/images/goals.svg";
import CustomList from "../../../components/lists/CustomList/CustomList";

const Section2 = () => {
  return (
    <section className="section__two">
      <div className="section__two__top">
        <div className="section__two__mission">
          <div className="section__two__center section__two__mission__center">
            <h1 className="section__two__heading">Mission</h1>
            <div className="section__two__content">
              <p>
                Ensure healthy lifestyles <br /> and the well-being of the
                population.
              </p>
            </div>
            <Mission className="section__two__svg" />
          </div>
        </div>
        <div className="section__two__vision">
          <div className="section__two__center section__two__vision__center">
            <h1 className="section__two__heading">Vision</h1>
            <div className="section__two__content">
              <p>
                To become an event that changed people's health for the better
                and irrevocably.
              </p>
            </div>
            <Vision className="section__two__svg" />
          </div>
        </div>
      </div>
      <div className="section__two__bottom">
        <div className="section__two__goals">
          <div className="section__two__center container">
            <h1 className="section__two__heading">Goals</h1>
            <div className="section__two__content goals__content">
              <CustomList
                type="dot"
                items={[
                  "Become a leader among medical platforms",
                  "Gain the trust of employees, partners and customers",
                ]}
              />
              <CustomList
                type="dot"
                items={[
                  "Provide high security and reliability for employees, partners and customers",
                  "Implement the credo “We are all clients to each other”, respect each other and clients",
                  "Become a fintech company",
                ]}
              />
            </div>
            <Goals className="section__two__svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
