import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ConsultationModal from "../../rest/modal/ConsultationModal";
import "./getConsultation.scss";

interface IProps {
  text?: string;
  onClick?: VoidFunction;
}
const GetConsultation: React.FC<IProps> = ({ onClick, text }) => {
  const { t } = useTranslation("common");
  const [openModal, setOpenModal] = useState(false);

  const openConsultationModal = () => {
    console.log("open");
    setOpenModal(true);
  };

  const closeConsultationModal = () => setOpenModal(false);

  return (
    <>
      <button
        className="button getConsultationBtn"
        onClick={openConsultationModal}
      >
        {text || t("getConsultation")}
      </button>
      <ConsultationModal open={openModal} close={closeConsultationModal} />
    </>
  );
};

export default GetConsultation;
