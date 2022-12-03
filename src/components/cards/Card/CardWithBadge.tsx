import React from "react";
import "./cardWithBadge.scss";

interface IProps {
  textBadge?: string;
  className?: string;
  children: React.ReactNode;
}

const CardWithBadge: React.FC<IProps> = ({
  textBadge,
  className,
  children,
}) => {
  return (
    <div
      className={
        className ? `card cardWithBadge ${className}` : "card cardWithBadge"
      }
    >
      {textBadge && <div className="cardWithBadge__badge">{textBadge}</div>}
      <div className="card__content">{children}</div>
    </div>
  );
};

export default CardWithBadge;
