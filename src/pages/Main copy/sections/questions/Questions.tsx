import React, { useState } from "react";
import { Q1S1, Q1S2 } from "./answers/Q1";
import { Q2S1, Q2S2, Q2S3 } from "./answers/Q2";
import { Q3S1 } from "./answers/Q3";
import { Q4S1, Q4S2, Q4S3, Q4S4 } from "./answers/Q4";
import { Q5S1, Q5S2, Q5S3, Q5S4, Q5S5, Q5S6, Q5S7 } from "./answers/Q5";
import { Q6S1, Q6S2, Q6S3 } from "./answers/Q6";
import Question, { IQuestion } from "./Question";
import "./questions.scss";

const QuestionsList: IQuestion[] = [
  {
    id: 1,
    title: "About the platform",
    isOpen: false,
    subquestions: [
      {
        id: 1,
        title: "1. What is MedData?",
        answer: <Q1S1 />,
      },
      {
        id: 2,
        title: "2. Who is your platform for?",
        answer: <Q1S2 />,
      },
    ],
  },
  {
    id: 2,
    title: "Profit",
    isOpen: false,
    subquestions: [
      {
        id: 1,
        title: "1. How do you improve the efficiency of clinic management?",
        answer: <Q2S1 />,
      },
      {
        id: 2,
        title: "2. How do you increase the clinic profitability?",
        answer: <Q2S2 />,
      },
      {
        id: 3,
        title:
          "3. Will the platform track cash payments or Kaspi installment payments?",
        answer: <Q2S3 />,
      },
    ],
  },
  {
    id: 3,
    title: "For patients",
    isOpen: false,
    subquestions: [
      {
        id: 1,
        title: "How is patient progress monitored?",
        answer: <Q3S1 />,
      },
    ],
  },
  {
    id: 4,
    title: "Advantages",
    isOpen: false,
    subquestions: [
      {
        id: 1,
        title: "1. How are you better than your competitors?",
        answer: <Q4S1 />,
      },
      {
        id: 2,
        title: "2. Is there integration with the call center?",
        answer: <Q4S2 />,
      },
      {
        id: 3,
        title: "3. How are payments made?",
        answer: <Q4S3 />,
      },
      {
        id: 4,
        title: "4. Do you have access to the patient's ID card?",
        answer: <Q4S4 />,
      },
    ],
  },
  {
    id: 5,
    title: "How to work with MedData",
    isOpen: false,
    subquestions: [
      {
        id: 1,
        title: "1. Will it be difficult for doctors and patients to use?",
        answer: <Q5S1 />,
      },
      {
        id: 2,
        title: "2. Where will the database be stored?",
        answer: <Q5S2 />,
      },
      {
        id: 3,
        title:
          "3. If a patient comes in with an old card, does he have to get a new one?",
        answer: <Q5S3 />,
      },
      {
        id: 4,
        title: "4. How long will the integration run?",
        answer: <Q5S4 />,
      },
      {
        id: 5,
        title:
          "5. What are the minimum specifications required by the platform?",
        answer: <Q5S5 />,
      },
      {
        id: 6,
        title:
          "6. What will the platform for physicians and patients look like?",
        answer: <Q5S6 />,
      },
      {
        id: 7,
        title: "7. Will there be advertising inside the application? ",
        answer: <Q5S7 />,
      },
    ],
  },
  {
    id: 6,
    title: "Cost",
    isOpen: false,
    subquestions: [
      {
        id: 1,
        title: "1. How much does MedData cost?",
        answer: <Q6S1 />,
      },
      {
        id: 2,
        title: "2. Do you have a test period?",
        answer: <Q6S2 />,
      },
      {
        id: 3,
        title:
          "3. How much does it cost to implement a database into a platform?",
        answer: <Q6S3 />,
      },
    ],
  },
];
const Questions: React.FC = () => {
  const [questions, setQuestions] = useState(QuestionsList);

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
