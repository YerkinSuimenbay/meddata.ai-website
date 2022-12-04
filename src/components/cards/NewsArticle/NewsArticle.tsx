import React from "react";
import "./newsArticle.scss";
import arrowRight from "../../../assets/images/arrowRight.svg";

interface IProps {
  poster: string;
  mediaLogo: string;
  title: string;
  // className?: string;
  // children: React.ReactNode;
}

// const NewsArticle: React.FC<IProps> = ({ textBadge, className, children }) => {
const NewsArticle: React.FC<IProps> = ({ poster, mediaLogo, title }) => {
  return (
    <div className="newsArticle">
      <div className="newsArticle__poster">
        <img src={poster} alt="news article poster" />
        <div className="newsArticle__poster__mediaName">
          <img src={mediaLogo} alt="media logo" />
        </div>
      </div>
      <p className="newsArticle__title">{title}</p>
      <button className="newsArticle__readMoreBtn">
        read more <img src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
};

export default NewsArticle;
