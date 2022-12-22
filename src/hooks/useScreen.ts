import { useEffect, useState } from "react";
import { Screen } from "../types";

const useScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (width <= Screen.mobile) return Screen.mobile;
  if (width <= Screen.tablet) return Screen.tablet;
  if (width <= Screen.laptop) return Screen.laptop;
  if (width <= Screen.desktop) return Screen.desktop;
  return Screen.extraLargeScreen;
};

export default useScreen;
