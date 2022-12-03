import React from "react";
import "./getConsultation.scss";

interface IProps {
  onClick?: VoidFunction;
}
const GetConsultation: React.FC<IProps> = ({ onClick }) => {
  return (
    <button className="button getConsultationBtn" onClick={onClick}>
      to get the consultation
    </button>
  );
};

export default GetConsultation;
