import React from "react";
import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}
export const Q5S3: React.FC<IProps> = ({ t }) => {
  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q5.subquestions.sq3.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q5.subquestions.sq3.answer")}
      </p>
    </div>
  );
};
