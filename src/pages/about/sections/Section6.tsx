import { ReactComponent as TextMed } from "../../../assets/images/textMed.svg";
import { ReactComponent as TextData } from "../../../assets/images/textData.svg";
import { ReactComponent as SectionSix } from "../../../assets/images/SectionSix.svg";
import { ReactComponent as SectionSixMobile } from "../../../assets/images/SectionSixMobile.svg";
const Section6 = () => {
  return (
    //  {/* <section className="section__six">
    //     <div className="section__six__top">
    //       <h1 className="section__six__bigText">
    //         480 <br /> clinics
    //       </h1>
    //       <TextMed className="section__six__bgText med" />
    //     </div>
    //     <div className="section__six__bottom">
    //       <h1 className="section__six__bigText">
    //         $1,2 <br /> million
    //       </h1>
    //       <TextData className="section__six__bgText data" />
    //     </div>
    //   </section> */}
    <section className="section__six">
      <SectionSix className="desktop" />
      <SectionSixMobile className="mobile" />
    </section>
  );
};

export default Section6;
