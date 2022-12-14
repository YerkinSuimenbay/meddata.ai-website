import React from "react";
import { TFunction } from "i18next";

interface IProps {
  t: TFunction<"main", "sectionQuestions">;
}
export const Q6S3: React.FC<IProps> = ({ t }) => {
  const lis = t("questions.q4.subquestions.sq1.answer.lis", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="questionAnswer">
      <h2 className="questionAnswer__title">
        {t("questions.q6.subquestions.sq3.title")}
      </h2>
      <p className="questionAnswer__content">
        {t("questions.q6.subquestions.sq3.answer.line1")}
        {lis.map((li) => (
          <React.Fragment key={li}>
            <br />
            {li}
          </React.Fragment>
        ))}
        <br />
        <br />
        {t("questions.q6.subquestions.sq3.answer.line2")}
      </p>
    </div>
  );
};
