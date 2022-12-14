import { useTranslation } from "react-i18next";
import Questions from "./questions/Questions";

const SectionQuestions = () => {
  const { t } = useTranslation("main", { keyPrefix: "sectionQuestions" });
  return (
    <section className="section__questions container">
      <h2 className="section__heading section__questions__heading">
        {t("heading")}
      </h2>
      <div className="section__questions__list">
        <Questions />
      </div>
    </section>
  );
};

export default SectionQuestions;
