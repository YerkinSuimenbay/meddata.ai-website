import React from "react";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineHome } from "react-icons/ai";
import { BiInfoSquare } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";
import "./sidebar.scss";
// import links from "./links.json";
import LangHorizontal from "../../components/rest/lang/LangHorizontal";
import { links } from "../links";

interface IProps {
  open: boolean;
  onClose: VoidFunction;
}

const SidebarMui: React.FC<IProps> = ({ open, onClose }) => {
  const { t } = useTranslation(["common"], { keyPrefix: "navbar" });

  const renderIcon = (linkName: string) => {
    if (linkName === "main") {
      return <AiOutlineHome />;
    } else if (linkName === "about") {
      return <BiInfoSquare />;
    }
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <div className="sidebar">
          <div className="sidebar__top">
            <h2>Meddata.Ai</h2>
            <LangHorizontal />
          </div>
          <div className="sidebar__middle">
            <div className="sidebar__middle__links">
              {links.map(
                (link) => {
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
                          onClose();
                        }}
                      >
                        <TiContacts />
                        <span>{t(link.name)}</span>
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
                      onClick={onClose}
                    >
                      {renderIcon(link.name)}
                      <span>{t(link.name)}</span>
                    </NavLink>
                  );
                }
                // (
                // <NavLink
                //   key={link.path}
                //   to={link.path}
                //   className={({ isActive }) =>
                //     isActive ? "active_link" : undefined
                //   }
                //   onClick={onClose}
                // >
                //   {renderIcon(link.name)}
                //   <span>{t(link.name)}</span>
                // </NavLink>
                // )
              )}
            </div>
          </div>
          {/* <div className="sidebar__bottom">SOCIAL LINKS</div> */}
        </div>
      </Drawer>
    </div>
  );
};

export default SidebarMui;
