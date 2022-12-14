import React from "react";
import "./cardWithBadge.scss";

interface IProps {
  textBadge?: string;
  className?: string;
  children: React.ReactNode;
  alignItems?: "center" | "flex-start";
}

const CardWithBadge: React.FC<IProps> = ({
  textBadge,
  className,
  children,
  alignItems = "flex-start",
}) => {
  return (
    <div
      className={
        className ? `card cardWithBadge ${className}` : "card cardWithBadge"
      }
    >
      {textBadge && <div className="cardWithBadge__badge">{textBadge}</div>}
      <div className="card__content" style={{ alignItems }}>
        {children}
      </div>
    </div>
  );
};

export default CardWithBadge;
