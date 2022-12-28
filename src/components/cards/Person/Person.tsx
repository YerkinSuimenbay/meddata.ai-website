import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./person.scss";

interface IProps {
  profile: string;
  profilePlaceholder: string;
  name: string;
  position: string;
  details: string[];
}

const Person: React.FC<IProps> = ({
  profile,
  name,
  position,
  details,
  profilePlaceholder,
}) => {
  return (
    <div className="person">
      <div className="person__profile">
        <LazyLoadImage
          src={profile}
          alt={`profile of ${name}`}
          placeholderSrc={profilePlaceholder}
          effect="blur"
          width="100%"
          height="100%"
        />
        {/* <img src={profile} alt="profile" /> */}
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
