import React from "react";

export interface ISubquestion {
  id: number;
  title: string;
  answer: JSX.Element;
}

interface IProps extends ISubquestion {
  isDividerVisible: boolean;
}

const Subquestion: React.FC<IProps> = ({
  id,
  title,
  answer,
  isDividerVisible,
}) => {
  return (
    <React.Fragment>
      <div className="subquestion">
        <h1
          className="subquestion__title"
          onClick={() => console.log("OPEN MODAL")}
        >
          {id}. {title}
        </h1>
      </div>
      {isDividerVisible && <hr className="subquestions__divider" />}
    </React.Fragment>
  );
};

export default Subquestion;
