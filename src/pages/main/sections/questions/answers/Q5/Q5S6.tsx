import React from "react";
import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}
export const Q5S6: React.FC<IProps> = ({ t }) => {
  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q5.subquestions.sq6.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q5.subquestions.sq6.answer.line1")}
        <br />
        {t("questions.q5.subquestions.sq6.answer.line2")}
      </p>
    </div>
  );
};
