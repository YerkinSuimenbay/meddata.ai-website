import React, { useState } from "react";
import Modal from "./Modal";
import "./consultationModal.scss";
import { useTranslation } from "react-i18next";

interface IProps {
  open: boolean;
  close: VoidFunction;
}

const ConsultationModal: React.FC<IProps> = ({ open, close }) => {
  const { t } = useTranslation("common", { keyPrefix: "consultationModal" });
  const [fio, setFio] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const getMailToHref = () => {
    const subject = "MedData.Ai_Website_Get Consultation";
    const body = `Full name: ${fio} \nContact info: ${contactInfo}`;
    let href = `mailto:corporate@meddata-ai.app?subject=${subject}&body=${body}`;

    return encodeURI(href);
  };

  if (!open) return null;

  return (
    <Modal onClick={close}>
      <div className="consultationModal">
        <h2 className="consultationModal__title">{t("title")}</h2>
        <form className="consultationModal__form">
          <div>
            <label htmlFor="fio">{t("fio")}:</label>
            <input
              id="fio"
              type="text"
              name="fio"
              placeholder="Хорн Александр Анатольевич"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contactInfo">{t("contactInfo")}</label>
            <input
              id="contactInfo"
              type="text"
              name="contactInfo"
              placeholder="+7 777 777 77 77"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>

          <a
            href={getMailToHref()}
            onClick={close}
            className="consultationModal__form__submitBtn"
          >
            {t("submit")}
          </a>
        </form>
      </div>
    </Modal>
  );
};

export default ConsultationModal;
