import React from "react";
import Dot from "../../rest/dot/Dot";
import "./customList.scss";

interface IList {
  title?: string;
  type?: "dot";
  items: string[];
}
const CustomList: React.FC<IList> = ({ title, type, items }) => {
  const renderListStyle = () => {
    if (!type) return null;

    switch (type) {
      case "dot":
        return <Dot />;
      default:
        return <Dot />;
    }
  };
  return (
    <div className="list">
      <p className="list__title">{title}</p>
      <div className="list__items">
        {items.map((item) => (
          <div key={item} className="list__item">
            {renderListStyle()}
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomList;
