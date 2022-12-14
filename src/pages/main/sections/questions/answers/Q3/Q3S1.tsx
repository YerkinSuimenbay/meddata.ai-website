import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}
export const Q3S1: React.FC<IProps> = ({ t }) => {
  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q3.subquestions.sq1.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q3.subquestions.sq1.answer")}
      </p>
    </div>
  );
};
