import React from "react";
import RippleAd from "../../rest/ripple/RippleAd";
import "./ad.scss";

interface IProps {
  topButtonText?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  bottomButtonText: string;
}
const Ad: React.FC<IProps> = ({
  topButtonText,
  title,
  text,
  bottomButtonText,
}) => {
  return (
    <div className="ad__background">
      <div className="ad">
        {topButtonText && (
          <button className="ad__top-button">{topButtonText}</button>
        )}

        <h2 className="ad__title">{title}</h2>
        <p className="ad__text">{text}</p>
        <button className="ad__bottom-button">{bottomButtonText}</button>
      </div>
      <RippleAd />
    </div>
  );
};

export default Ad;
