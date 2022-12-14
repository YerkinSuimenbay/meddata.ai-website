import { ReactComponent as MeddataApps } from "../../../assets/images/meddataApps.svg";
import { ReactComponent as MeddataAppsMobile } from "../../../assets/images/meddataAppsModile.svg";

const Section3 = () => {
  return (
    <section className="section__three container">
      <MeddataApps className="desktop" />
      <MeddataAppsMobile className="mobile" />
    </section>
  );
};

export default Section3;
