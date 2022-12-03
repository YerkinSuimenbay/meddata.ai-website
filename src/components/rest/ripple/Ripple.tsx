import React from "react";
import "./ripple.scss";

interface IProps {
  //   s1: number;
  //   s2: number;
  //   s3: number;
}
const Ripple: React.FC<IProps> = () => {
  //     $w1: 90vw;
  //     $coord1: -($w1/3);
  //     $w2: 75vw;
  //     $coord2: $coord1 + ($w1 - $w2)/2;
  //     $w3: 60vw;
  //     $coord3: $coord2 + ($w2 - $w3)/2;
  // const coord1 = s1/3

  // const getStyle = (id: number) => {
  //     let style: React.CSSProperties = {}
  //     if
  //     style.width
  // }

  return (
    //  <div className="ripple__container">
    <div className="ripple">
      <div
        className="circle1"
        //   style={getStyle}
      />
      <div className="circle2" />
      <div className="circle3" />
    </div>
    //  </div>
  );
};

export default Ripple;
