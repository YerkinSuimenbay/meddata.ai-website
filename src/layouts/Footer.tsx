import { Link, Outlet } from "react-router-dom";
import { ReactComponent as LogoFacebook } from "../assets/images/logo-facebook.svg";
import { ReactComponent as LogoTwitter } from "../assets/images/logo-twitter.svg";
import { ReactComponent as LogoInstagram } from "../assets/images/logo-instagram.svg";
import { ReactComponent as LogoLinkedin } from "../assets/images/logo-linkedin.svg";
import logo from "../assets/images/logo-meddata.svg";
import "./footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer" });

  return (
    <>
      <Outlet />
      <footer className="footer__container">
        <div className="footer container">
          <div className="footer__left">
            <div className="footer__left__top">
              {/* <LogoFacebook /> */}
              {/* <LogoTwitter /> */}
              <a href="https://instagram.com/meddata.ai?igshid=YmMyMTA2M2Y=">
                <LogoInstagram />
              </a>
              {/* <LogoLinkedin /> */}
            </div>
            <div className="footer__left__middle">
              AI Systems LTD
              <br /> {t("phone")}: +7 707 700 0550
              <br /> {t("email")}: meddata@gmail.com
            </div>
            <div className="footer__left__bottom">
              © {new Date().getFullYear()} meddata.kz
            </div>
          </div>
          <div className="footer__center">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__right">
            {t("privacyPolicy.0")}
            <br />
            <br />
            {t("privacyPolicy.1")}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
