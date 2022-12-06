import React, { useEffect } from "react";
import "./modal.scss";
// import plus from "../../../assets/images/plus.svg";
import { ReactComponent as Plus } from "../../../assets/images/plus.svg";

interface IProps {
  children: JSX.Element;
  onClick: VoidFunction;
}

const Modal: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <div className="modal__background" onClick={onClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__closeBtn" onClick={onClick}>
          <Plus />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
