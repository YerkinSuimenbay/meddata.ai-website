import React from "react";
import "./rippleAnimated.scss";

interface IProps {}
const RippleAnimated: React.FC<IProps> = () => {
  return (
    <div className="circles">
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
      <div className="circle4" />
      <div className="circle5" />
      {/* <div className="circle6" /> */}
    </div>
  );
};

export default RippleAnimated;
