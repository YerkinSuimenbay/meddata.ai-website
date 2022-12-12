import logo from "../../../assets/images/logo-meddata.svg";
import { ReactComponent as Logo } from "../../../assets/images/logo-meddata.svg";

const Section1 = () => {
  return (
    <div className="section__one__background">
      <section className="section__one container">
        <div className="section__one__left">
          <Logo className="section__one__left__logo" />
          <h2>MedData.AI</h2>
        </div>
        <div className="section__one__middle" />
        <div className="section__one__right">
          <VerticalScrollingText />
        </div>
      </section>
    </div>
  );
};

const VerticalScrollingText = () => {
  return (
    <div className="verticalScrollingText__container">
      <div className="verticalScrollingText">
        <p className="text">
          Платформа для эффективного <br /> управления клиникой
        </p>
        <p className="text">Приложение для здоровья</p>
        <p className="text">
          Крипто-приложение <br /> для здоровых привычек
        </p>
      </div>
    </div>
  );
};

export default Section1;
