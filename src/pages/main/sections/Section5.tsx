import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Ad from "../../../components/cards/Ad/Ad";
import ConsultationModal from "../../../components/rest/modal/ConsultationModal";

const Section5 = () => {
  const { t } = useTranslation(["main"], { keyPrefix: "section5" });
  const [openModal, setOpenModal] = useState(false);

  const openConsultationModal = () => {
    console.log("open");
    setOpenModal(true);
  };

  const closeConsultationModal = () => setOpenModal(false);

  const texts = t("ad.text", { returnObjects: true }) as string[];

  return (
    <section className="section__five container">
      <Ad
        topButtonText={t("ad.topButtonText") as string}
        title={<>{t("ad.title")}</>}
        text={
          <>
            {texts.map((text, i) => {
              return (
                <React.Fragment key={text}>
                  {text}
                  {i < texts.length - 1 && <br />}
                </React.Fragment>
              );
            })}
          </>
        }
        bottomButtonText={t("ad.bottomButtonText")}
        bottomButtonUppercase={false}
        onClickTopButton={openConsultationModal}
        onClickBottomButton={openConsultationModal}
      />
      <ConsultationModal open={openModal} close={closeConsultationModal} />
    </section>
  );
};

export default Section5;
