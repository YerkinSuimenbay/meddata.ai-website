import React from "react";
import RippleAd from "../../rest/ripple/RippleAd";
import "./ad.scss";

interface IProps {
  topButtonText?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  bottomButtonText: string;
  bottomButtonUppercase?: boolean;
  onClickTopButton?: VoidFunction;
  onClickBottomButton: VoidFunction;
}

const Ad: React.FC<IProps> = ({
  topButtonText,
  title,
  text,
  bottomButtonText,
  bottomButtonUppercase = true,
  onClickTopButton,
  onClickBottomButton,
}) => {
  return (
    <>
      <div className="ad__background">
        <div className="ad">
          {topButtonText && (
            <button className="ad__top-button" onClick={onClickTopButton}>
              {topButtonText}
            </button>
          )}

          <h2 className="ad__title">{title}</h2>
          <p className="ad__text">{text}</p>
          <button
            className="ad__bottom-button"
            style={{
              textTransform: bottomButtonUppercase ? "uppercase" : "initial",
            }}
            onClick={onClickBottomButton}
          >
            {bottomButtonText}
          </button>
        </div>
        <RippleAd />
      </div>
    </>
  );
};

export default Ad;
