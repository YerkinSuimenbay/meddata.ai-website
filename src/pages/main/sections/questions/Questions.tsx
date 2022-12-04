import React, { useState } from "react";
import Q1S1 from "./answers/Q1S1/Q1S1";
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
        title: "What is MedData?",
        answer: <Q1S1 />,
      },
      {
        id: 2,
        title: "Who is your platform for?",
        answer: <Q1S1 />,
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
        title: "How do you improve the efficiency of clinic management?",
        answer: <Q1S1 />,
      },
      {
        id: 2,
        title: "How do you increase the clinic profitability?",
        answer: <Q1S1 />,
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
