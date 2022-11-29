import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/images/logo-meddata.svg";

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
    label: "Career",
    name: "career",
  },
];

export const Navbar: React.FC = () => {
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
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
