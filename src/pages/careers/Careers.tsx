import "./careers.scss";
import Vacancies from "./sections/content/Vacancies";
import CareersHeader from "./sections/header/CareersHeader";

const Careers = () => {
  return (
    <div className="careers__page">
      <CareersHeader />
      <div className="container">
        <Vacancies />
      </div>
    </div>
  );
};

export default Careers;
