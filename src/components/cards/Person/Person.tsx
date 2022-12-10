import React from "react";
import "./person.scss";

interface IProps {
  profile: string;
  name: string;
  position: string;
  details: string[];
}

const Person: React.FC<IProps> = ({ profile, name, position, details }) => {
  return (
    <div className="person">
      <div className="person__profile">
        <img src={profile} alt="profile" />
      </div>
      <h4 className="person__name">{name}</h4>
      <h4 className="person__position">{position}</h4>
      <div className="person__details">
        {details.map((detail) => (
          <p key={detail} className="persion__detail">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Person;
