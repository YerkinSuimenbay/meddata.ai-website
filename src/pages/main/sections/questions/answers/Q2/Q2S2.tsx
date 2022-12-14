import React from "react";
import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}
export const Q2S2: React.FC<IProps> = ({ t }) => {
  const lis = t("questions.q2.subquestions.sq2.answer.lis", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q2.subquestions.sq2.title")}
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
