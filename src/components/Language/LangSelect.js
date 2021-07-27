import React from "react";

const LangSelect = ({ lang, handleLanguageChange }) => {
  return (
    <div className="languages">
      <i className="fas fa-globe"></i>
      <select value={lang} onChange={handleLanguageChange} className="select">
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LangSelect;
