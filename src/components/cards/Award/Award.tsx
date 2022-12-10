import React from "react";
import "./award.scss";

interface IProps {
  image: string;
  name: string;
}

const Award: React.FC<IProps> = ({ image, name }) => {
  return (
    <div className="award">
      <div className="award__photo">
        <img src={image} alt="award" />
      </div>
      <div className="award__name">{name}</div>
    </div>
  );
};

export default Award;
