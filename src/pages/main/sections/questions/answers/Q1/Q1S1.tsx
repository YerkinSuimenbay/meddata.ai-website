import React from "react";
import { TFunction } from "i18next";
import "./q1.scss";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}

export const Q1S1: React.FC<IProps> = ({ t }) => {
  const lis = t("questions.q1.subquestions.sq1.answer.lis", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q1.subquestions.sq1.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q1.subquestions.sq1.answer.line1")}
        {lis.map((li) => (
          <React.Fragment key={li}>
            <br />
            {li}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};
