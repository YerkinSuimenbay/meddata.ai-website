import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import i18next from "i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.scss";

import logoMeddata from "../../assets/images/logo-meddata.svg";
import Lang from "../../components/rest/lang/Lang";
import SidebarMui from "../sidebar/SidebarMui";
import { links } from "../links";

export const Navbar: React.FC = () => {
  const { t } = useTranslation(["common"], { keyPrefix: "navbar" });
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");

    // IF THE LANG ANYTHING BUT en ru kz
    if (lng && lng.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <>
      <div className="navbar-background">
        <div className="navbar container">
          <div className="navbar__logo">
            <NavLink to="">
              <img src={logoMeddata} alt="meddata logo" />
              MedData.Ai
            </NavLink>
          </div>
          <div className="navbar__links">
            {links.map((link) => {
              if (link.name === "contacts") {
                return (
                  <a
                    key={link.path}
                    href="contacts"
                    onClick={(e) => {
                      e.preventDefault();
                      const scrollToBottom = () => {
                        window.scrollTo({
                          top: document.documentElement.scrollHeight,
                          behavior: "smooth",
                        });
                      };
                      scrollToBottom();
                    }}
                  >
                    {t(link.name)}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "active_link" : undefined
                  }
                >
                  {t(link.name)}
                </NavLink>
              );
            })}
          </div>
          <div className="navbar__lang">
            <Lang />
          </div>

          <div className="navbar__burgerMenu">
            <button
              className="navbar__burgerMenu__btn"
              onClick={() => setOpenSidebar(true)}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      <SidebarMui open={openSidebar} onClose={() => setOpenSidebar(false)} />
    </>
  );
};
