import React from "react";
import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}
export const Q4S1: React.FC<IProps> = ({ t }) => {
  const lis = t("questions.q4.subquestions.sq1.answer.lis", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q4.subquestions.sq1.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q4.subquestions.sq1.answer.line1")}
        <br />
        <br />
        {t("questions.q4.subquestions.sq1.answer.line2")}
        {lis.map((li) => (
          <React.Fragment key={li}>
            <br />
            {li}
          </React.Fragment>
        ))}
        <br />
        <br />
        {t("questions.q4.subquestions.sq1.answer.line3")}
      </p>
    </div>
  );
};
