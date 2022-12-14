import React from "react";
import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}

export const Q1S2: React.FC<IProps> = ({ t }) => {
  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q1.subquestions.sq2.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q1.subquestions.sq2.answer")}
      </p>
    </div>
  );
};
