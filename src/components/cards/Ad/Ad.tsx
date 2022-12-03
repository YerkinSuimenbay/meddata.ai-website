import React from "react";
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
    <div className="ad">
      {topButtonText && (
        <button className="ad__top-button">{topButtonText}</button>
      )}

      <h2 className="ad__title">{title}</h2>
      <p className="ad__text">{text}</p>
      <button className="ad__bottom-button">{bottomButtonText}</button>

      {/* <div className="ripple">
        <div className="circle1" />
        <div className="circle2" />
        <div className="circle3" />
      </div> */}
    </div>
  );
};

export default Ad;
