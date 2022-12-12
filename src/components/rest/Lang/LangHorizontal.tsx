import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./lang.scss";

const options = ["en", "ru"];

const LangHorizontal: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClick = async (option: string) => {
    await i18n.changeLanguage(option);
    setSelectedLang(option);
  };

  return (
    <div className="langHorizontal" ref={selectRef}>
      <ul className="langHorizontal__options">
        {options.length ? (
          options.map((option) => (
            <li
              key={option}
              onClick={() => handleClick(option)}
              className={selectedLang === option ? "active" : ""}
            >
              {option}
            </li>
          ))
        ) : (
          <li>no option</li>
        )}
      </ul>
    </div>
  );
};

export default LangHorizontal;
