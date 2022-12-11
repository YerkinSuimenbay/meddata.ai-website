import React from "react";
import "./getConsultation.scss";

interface IProps {
  text?: string;
  onClick?: VoidFunction;
}
const GetConsultation: React.FC<IProps> = ({
  onClick,
  text = "to get the consultation",
}) => {
  return (
    <button className="button getConsultationBtn" onClick={onClick}>
      {text}
    </button>
  );
};

export default GetConsultation;
