import React, { useState } from "react";
// import "./question.scss";
import plus from "../../../../assets/images/plus.svg";
import Subquestion, { ISubquestion } from "./Subquestion";

interface IList {
  question: IQuestion;
  onClick: (id: number) => void;
}

export interface IQuestion {
  id: number;
  title: string;
  isOpen: boolean;
  subquestions: ISubquestion[];
}

const Question: React.FC<IList> = ({ question, onClick }) => {
  const { id, title, subquestions, isOpen } = question;
  return (
    <div key={id} className="question">
      <div className="question__title__container" onClick={() => onClick(id)}>
        <h2 className="question__title">{title}</h2>
        <button className={`question__button ${isOpen ? "open" : ""}`}>
          <img src={plus} alt="plus sign" />
        </button>
      </div>
      <div className="subquestions__container">
        <div id={String(id)} className="subquestions">
          {subquestions.map((subquestion, index) => {
            return (
              <Subquestion
                key={subquestion.id}
                {...subquestion}
                isDividerVisible={index + 1 < subquestions.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;
