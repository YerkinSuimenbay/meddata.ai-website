import { Outlet } from "react-router-dom";
// import { ReactComponent as LogoFacebook } from "../assets/images/logo-facebook.svg";
// import { ReactComponent as LogoTwitter } from "../assets/images/logo-twitter.svg";
import { ReactComponent as LogoInstagram } from "../assets/images/logo-instagram.svg";
// import { ReactComponent as LogoLinkedin } from "../assets/images/logo-linkedin.svg";
import logo from "../assets/images/logo-meddata.svg";
import "./footer.scss";
import { useTranslation } from "react-i18next";
import ConsultationModal from "../components/rest/modal/ConsultationModal";
import { useState } from "react";

const Footer = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer" });
  const [openModal, setOpenModal] = useState(false);

  // const openConsultationModal = () => setOpenModal(true);
  const openConsultationModal = () => {
    // setOpenModal(true);
    
    (function (w, d, u) {
      console.log("CLICKED");
      var s = d.createElement("script");
      s.async = true;
      s.src = u + "?" + ((Date.now() / 180000) | 0);
      var h = d.getElementsByTagName("script")[0];
      h!.parentNode!.insertBefore(s, h);
    })(
      window,
      document,
      // "https://cdn-ru.bitrix24.ru/b21027398/c...4.js");
      "https://cdn-ru.bitrix24.ru/b21027398/crm/form/loader_4.js%27"
    );
    // document
    // <script data-b24-form="inline/4/32qite" data-skip-moving="true">
    //   (function (w, d, u) {
    //     var s = d.createElement("script");
    //     s.async = true;
    //     s.src = u + "?" + ((Date.now() / 180000) | 0);
    //     var h = d.getElementsByTagName("script")[0];
    //     h.parentNode.insertBefore(s, h);
    //   })(
    //     window,
    //     document,
    //     // "https://cdn-ru.bitrix24.ru/b21027398/c...4.js");
    //     "https://cdn-ru.bitrix24.ru/b21027398/crm/form/loader_4.js%27"
    //   );
    //   // (https://cdn-ru.bitrix24.ru/b21027398/crm/form/loader_4.js%27));
    // </script>
  };
  const closeConsultationModal = () => setOpenModal(false);

  return (
    <>
      <Outlet />
      <footer className="footer__container" id="contacts">
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
              {/* <br /> {t("phone")}: +7 707 700 0550 */}
              <br /> {t("email")}: corporate@meddata-ai.app
              <p onClick={openConsultationModal} className="footer__contactUs">
                {t("contactUs")}
              </p>
            </div>
            <div className="footer__left__bottom">
              © {new Date().getFullYear()} Kazakhstan
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
      <ConsultationModal open={openModal} close={closeConsultationModal} />
    </>
  );
};
// Связаться с нами

export default Footer;
