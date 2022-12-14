import React from "react";
import { useTranslation } from "react-i18next";
import "./getConsultation.scss";

interface IProps {
  text?: string;
  onClick?: VoidFunction;
}
const GetConsultation: React.FC<IProps> = ({ onClick, text }) => {
  const { t } = useTranslation("common");

  return (
    <button className="button getConsultationBtn" onClick={onClick}>
      {text || t("getConsultation")}
    </button>
  );
};

export default GetConsultation;
