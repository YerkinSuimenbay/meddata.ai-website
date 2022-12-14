import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logoMeddata from "../../assets/images/logo-meddata.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Lang from "../../components/rest/Lang/Lang";
import { ReactComponent as BurgerMenu } from "../../assets/images/BurgerMenu.svg";

// import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import SidebarMui from "./SidebarMui";

const links = [
  {
    path: "/",
    label: "Main",
    name: "main",
  },
  {
    path: "/about",
    label: "About us",
    name: "about",
  },
  // {
  //   path: "/news",
  //   label: "News",
  //   name: "news",
  // },
  // {
  //   path: "/careers",
  //   label: "Careers",
  //   name: "careers",
  // },
];

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation(["common"], { keyPrefix: "navbar" });
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
            </NavLink>
          </div>
          <div className="navbar__links">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active_link" : undefined
                }
              >
                {/* {link.label} */}
                {t(link.name)}
                {/* {t("test")} */}
              </NavLink>
            ))}
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
      {/* {openSidebar && <Sidebar />} */}
      <SidebarMui open={openSidebar} onClose={() => setOpenSidebar(false)} />
    </>
  );
};
