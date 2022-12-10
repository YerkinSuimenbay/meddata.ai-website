import { ReactComponent as Doctor } from "../../../../assets/images/doctor.svg";
import "./newsHeader.scss";

const NewsHeader = () => {
  return (
    <div className="section__header__background">
      <section className="section__header container">
        <div className="section__header__left">
          <h1 className="section__header__title">Новости MedData</h1>
          <p className="seaction__header__content">
            Здесь мы делимся с вами последними новостями о MedData и медицине.
          </p>
        </div>
        <Doctor className="section__header__right" />
      </section>
    </div>
  );
};

export default NewsHeader;
