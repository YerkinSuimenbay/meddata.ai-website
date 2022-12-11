import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./lang.scss";

const options = ["en", "ru"];

const Lang: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(options[0]);
  const { t, i18n } = useTranslation();

  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!selectRef.current || !event.target) return;
    if (!selectRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOptions = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  const handleClick = async (option: string) => {
    await i18n.changeLanguage(option);
    setSelectedLang(option);
    setIsVisible(false);
  };

  return (
    <div className="lang" ref={selectRef}>
      <button className="lang__selected" onClick={toggleOptions}>
        {selectedLang}
      </button>

      {isVisible && (
        <ul className="lang__options">
          {options.length ? (
            options.map((option) => (
              <li key={option} onClick={() => handleClick(option)}>
                {option}
              </li>
            ))
          ) : (
            <li>no option</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Lang;
