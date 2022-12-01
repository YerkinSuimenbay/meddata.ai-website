import React from "react";
import "./cardWithBadge.scss";

interface IProps {
  text: string;
  textBadge: string;
  className?: string;
}

const CardWithBadge: React.FC<IProps> = ({ text, textBadge, className }) => {
  return (
    <div
      className={
        className ? `card cardWithBadge ${className}` : "card cardWithBadge"
      }
    >
      <div className="cardWithBadge__badge">{textBadge}</div>
      {text}
    </div>
  );
};

export default CardWithBadge;
