import React, { useState } from "react";
import Modal from "../../../../components/rest/modal/Modal";

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
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => setOpenModal(true);

  return (
    <React.Fragment>
      <div className="subquestion">
        <h1 className="subquestion__title" onClick={handleClick}>
          {title}
        </h1>
      </div>
      {isDividerVisible && <hr className="subquestions__divider" />}
      {openModal && <Modal onClick={() => setOpenModal(false)}>{answer}</Modal>}
    </React.Fragment>
  );
};

export default Subquestion;
