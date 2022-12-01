import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/images/logo-meddata.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

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
  {
    path: "/news",
    label: "News",
    name: "news",
  },
  {
    path: "/careers",
    label: "Careers",
    name: "careers",
  },
];

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation(["common"], { keyPrefix: "navbar" });

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");

    // IF THE LANG ANYTHING BUT en ru kz
    if (lng && lng.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar__left">
          <NavLink to="">
            <img src={logo} alt="meddata logo" />
          </NavLink>
        </div>
        <div className="navbar__right">
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
      </div>
    </div>
  );
};
