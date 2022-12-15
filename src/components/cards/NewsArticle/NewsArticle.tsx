import React from "react";
import "./newsArticle.scss";
import arrowRight from "../../../assets/images/arrowRight.svg";
import { useTranslation } from "react-i18next";
import { Lang } from "../../../types";

interface IProps {
  title: string;
  poster: string;
  mediaLogo: string;
  link: string;
}

const NewsArticle: React.FC<IProps> = ({ poster, mediaLogo, title, link }) => {
  const { i18n } = useTranslation();
  // const = useNa

  const handleClick = () => {
    window.open(link);
  };

  const readMoreButtonText = () => {
    if (i18n.language === Lang.ru) {
      return "читать далее";
    }

    return "read more";
  };

  return (
    <div className="newsArticle">
      <div className="newsArticle__poster">
        <img src={poster} alt="news article poster" />
        <div className="newsArticle__poster__mediaName">
          <img src={mediaLogo} alt="media logo" />
        </div>
      </div>
      <p className="newsArticle__title">{title}</p>
      <button className="newsArticle__readMoreBtn" onClick={handleClick}>
        {readMoreButtonText()} <img src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
};

export default NewsArticle;
