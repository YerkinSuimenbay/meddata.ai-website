import { ReactComponent as CareersMan } from "../../../../assets/images/excited-guy.svg";
import "./careersHeader.scss";

const CareersHeader = () => {
  return (
    <div className="section__header__background">
      <section className="section__header container">
        <div className="section__header__left">
          <h1 className="section__header__title">Meddata Careers</h1>
          <p className="seaction__header__content">
            "Нас объединяет желание создать лучшее будущее.
            <br />
            <br />
            Мы опережаем время, мечтаем о невозможном, создаем инновации и
            трансформируем мир вокруг себя.
            <br />
            <br />
            MedData - это не просто специалисты. MedData - это каждый отдельный
            герой, стремящийся внести вклад в развитие здорового общества.
            <br />
            <br />
            Ты тоже герой? Оставляй заявку!"
          </p>
        </div>
        <CareersMan className="section__header__right" />
      </section>
    </div>
  );
};

export default CareersHeader;
