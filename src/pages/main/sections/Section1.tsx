import logo from "../../../assets/images/logo-meddata.svg";
import { ReactComponent as Logo } from "../../../assets/images/logo-meddata.svg";
import CarouselVertical from "../../../components/rest/carouserl/CarouselVertical";

const texts = [
  {
    text: "Платформа для эффективного управления клиникой",
  },
  {
    text: "Приложение для здоровья",
  },
  {
    text: "Крипто-приложение для здоровых привычек ",
  },
];

const Section1 = () => {
  return (
    <div className="section__one__background">
      <section className="section__one container">
        <div className="section__one__left">
          <Logo className="section__one__left__logo" />
          <h2 className="section__one__left__logoText">MedData.AI</h2>
        </div>
        <div className="section__one__middle" />
        <div className="section__one__right">
          {/* <VerticalScrollingText /> */}
          <CarouselVertical>
            {texts.map((text, i) => (
              <p key={text.text} className="section__one__right__text">
                {text.text}
              </p>
            ))}
          </CarouselVertical>
        </div>
      </section>
    </div>
  );
};

// const VerticalScrollingText = () => {
//   return (
//     <div className="verticalScrollingText__container">
//       <div className="verticalScrollingText">
//         <p className="text">Платформа для эффективного управления клиникой</p>
//         <p className="text">Приложение для здоровья</p>
//         <p className="text">Крипто-приложение для здоровых привычек</p>
//       </div>
//     </div>
//   );
// };

export default Section1;
