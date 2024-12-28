import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Меняем язык через i18next
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("de")}>German</button>
      <button onClick={() => changeLanguage("ru")}>Russian</button>
      <button onClick={() => changeLanguage("uk")}>Ukrainian</button>
    </div>
  );
};

export default LanguageSwitcher;
