import React from "react";
import "./rippleAd.scss";

interface IProps {}
const RippleAd: React.FC<IProps> = () => {
  return (
    <div className="rippleAd">
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
      <div className="circle4" />
    </div>
  );
};

export default RippleAd;
