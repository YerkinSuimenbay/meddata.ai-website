import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Q1S1, Q1S2 } from "./answers/Q1";
import { Q2S1, Q2S2, Q2S3 } from "./answers/Q2";
import { Q3S1 } from "./answers/Q3";
import { Q4S1, Q4S2, Q4S3, Q4S4 } from "./answers/Q4";
import { Q5S1, Q5S2, Q5S3, Q5S4, Q5S5, Q5S6, Q5S7 } from "./answers/Q5";
import { Q6S1, Q6S2, Q6S3 } from "./answers/Q6";
import Question, { IQuestion } from "./Question";
import "./questions.scss";

const Questions: React.FC = () => {
  const { t } = useTranslation("main", { keyPrefix: "sectionQuestions" });

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    const QuestionsList: IQuestion[] = [
      {
        id: 1,
        title: t("questions.q1.title"),
        isOpen: false,
        subquestions: [
          {
            id: 1,
            title: t("questions.q1.subquestions.sq1.title"),
            answer: <Q1S1 t={t} />,
          },
          {
            id: 2,
            title: t("questions.q1.subquestions.sq2.title"),
            answer: <Q1S2 t={t} />,
          },
        ],
      },
      {
        id: 2,
        title: t("questions.q2.title"),
        isOpen: false,
        subquestions: [
          {
            id: 1,
            title: t("questions.q2.subquestions.sq1.title"),
            answer: <Q2S1 t={t} />,
          },
          {
            id: 2,
            title: t("questions.q2.subquestions.sq2.title"),
            answer: <Q2S2 t={t} />,
          },
          {
            id: 3,
            title: t("questions.q2.subquestions.sq3.title"),
            answer: <Q2S3 t={t} />,
          },
        ],
      },
      {
        id: 3,
        title: t("questions.q3.title"),
        isOpen: false,
        subquestions: [
          {
            id: 1,
            title: t("questions.q3.subquestions.sq1.title"),
            answer: <Q3S1 t={t} />,
          },
        ],
      },
      {
        id: 4,
        title: t("questions.q4.title"),
        isOpen: false,
        subquestions: [
          {
            id: 1,
            title: t("questions.q4.subquestions.sq1.title"),
            answer: <Q4S1 t={t} />,
          },
          {
            id: 2,
            title: t("questions.q4.subquestions.sq2.title"),
            answer: <Q4S2 t={t} />,
          },
          {
            id: 3,
            title: t("questions.q4.subquestions.sq3.title"),
            answer: <Q4S3 t={t} />,
          },
          {
            id: 4,
            title: t("questions.q4.subquestions.sq4.title"),
            answer: <Q4S4 t={t} />,
          },
        ],
      },
      {
        id: 5,
        title: t("questions.q5.title"),
        isOpen: false,
        subquestions: [
          {
            id: 1,
            title: t("questions.q5.subquestions.sq1.title"),
            answer: <Q5S1 t={t} />,
          },
          {
            id: 2,
            title: t("questions.q5.subquestions.sq2.title"),
            answer: <Q5S2 t={t} />,
          },
          {
            id: 3,
            title: t("questions.q5.subquestions.sq3.title"),
            answer: <Q5S3 t={t} />,
          },
          {
            id: 4,
            title: t("questions.q5.subquestions.sq4.title"),
            answer: <Q5S4 t={t} />,
          },
          {
            id: 5,
            title: t("questions.q5.subquestions.sq5.title"),
            answer: <Q5S5 t={t} />,
          },
          {
            id: 6,
            title: t("questions.q5.subquestions.sq6.title"),
            answer: <Q5S6 t={t} />,
          },
          {
            id: 7,
            title: t("questions.q5.subquestions.sq7.title"),
            answer: <Q5S7 t={t} />,
          },
        ],
      },
      {
        id: 6,
        title: t("questions.q6.title"),
        isOpen: false,
        subquestions: [
          {
            id: 1,
            title: t("questions.q6.subquestions.sq1.title"),
            answer: <Q6S1 t={t} />,
          },
          {
            id: 2,
            title: t("questions.q6.subquestions.sq2.title"),
            answer: <Q6S2 t={t} />,
          },
          {
            id: 3,
            title: t("questions.q6.subquestions.sq3.title"),
            answer: <Q6S3 t={t} />,
          },
        ],
      },
    ];

    setQuestions(QuestionsList);
  }, [t]);

  const toggleQuestion = (id: number) => {
    setQuestions((questions) => {
      return questions.map((question) =>
        question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : question
      );
    });

    const questionBody = document.getElementById(String(id))!;
    const questionBodyContainer = questionBody.parentElement;

    if (questionBodyContainer!.getBoundingClientRect().height) {
      questionBodyContainer!.style.height = "0px";
    } else {
      const { height } = questionBody.getBoundingClientRect();
      questionBodyContainer!.style.height = height + "px";
    }
  };

  return (
    <div className="questions">
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          onClick={toggleQuestion}
        />
      ))}
    </div>
  );
};

export default Questions;
