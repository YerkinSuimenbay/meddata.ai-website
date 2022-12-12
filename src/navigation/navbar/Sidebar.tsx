import "./sidebar.scss";

const Sidebar = () => {
  //     const burgerMenuRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => document.removeEventListener("mousedown", handleClickOutside);
  //   }, []);

  //   const toggleOptions = () => {
  //     setOpenBurgerMenuContent((prevValue) => !prevValue);
  //   };

  //   const handleClick = async () => {
  //     setOpenBurgerMenuContent(false);
  //   };

  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (!burgerMenuRef.current || !event.target) return;
  //     if (!burgerMenuRef.current.contains(event.target as Node)) {
  //       setOpenBurgerMenuContent(false);
  //     }
  //   };
  return (
    <div className="sidebar__background">
      <div className="sidebar">
        <div className="sidebar__top">LOGO</div>
        <div className="sidebar__middle">
            
        </div>
        <div className="sidebar__bottom">LANG</div>
      </div>
    </div>
  );
};

export default Sidebar;

// {openBurgerMenuContent && (
//     <div className="navbar__burgerMenu__content">
//       <div className="navbar__burgerMenu__links">
//         {links.map((link) => (
//           <NavLink
//             key={link.path}
//             to={link.path}
//             className={({ isActive }) =>
//               isActive ? "active_link" : undefined
//             }
//             // onClick={handleClick}
//           >
//             {/* {link.label} */}
//             {t(link.name)}
//             {/* {t("test")} */}
//           </NavLink>
//         ))}
//       </div>
//       <div className="navbar__burgerMenu__lang">
//         <Lang />
//       </div>
//     </div>
//   )}
