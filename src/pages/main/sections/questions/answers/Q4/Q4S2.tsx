import React from "react";
import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}
export const Q4S2: React.FC<IProps> = ({ t }) => {
  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q4.subquestions.sq2.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q4.subquestions.sq2.answer.line1")}
        <br />
        <br />
        {t("questions.q4.subquestions.sq2.answer.line2")}
      </p>
    </div>
  );
};
