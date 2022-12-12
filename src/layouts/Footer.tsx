import { Outlet } from "react-router-dom";
import { ReactComponent as LogoFacebook } from "../assets/images/logo-facebook.svg";
import { ReactComponent as LogoTwitter } from "../assets/images/logo-twitter.svg";
import { ReactComponent as LogoInstagram } from "../assets/images/logo-instagram.svg";
import { ReactComponent as LogoLinkedin } from "../assets/images/logo-linkedin.svg";
import logo from "../assets/images/logo-meddata.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <Outlet />
      <footer className="footer__container">
        <div className="footer container">
          <div className="footer__left">
            <div className="footer__left__top">
              <LogoFacebook />
              <LogoTwitter />
              <LogoInstagram />
              <LogoLinkedin />
            </div>
            <div className="footer__left__middle">
              AI Systems LTD
              <br /> Телефон горячей линии: +7 707 700 0550
              <br /> email: meddata@gmail.com
            </div>
            <div className="footer__left__bottom">
              © {new Date().getFullYear()} meddata.kz
            </div>
          </div>
          <div className="footer__center">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__right">
            Оставляя данные на этом сайте вы соглашаетесь на обработку
            персональных данных согласно политике конфиденциальности в
            соответствии с подпунктом 7 пункта 1 статьи 27-1 Закона Республики
            Казахстан от 21 мая 2013 года "О персональных данных и их защите"
            <br />
            <br />
            Политика конфиденциальности
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
