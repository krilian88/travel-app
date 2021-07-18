import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LangSelect from "./Language/LangSelect";
import Search from "./Search/Search";

const Header = ({
  handleSearchChange,
  lang,
  handleLanguageChange,
  searchRef,
  scroll,
}) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            EUROPE <i className="fas fa-globe-europe"></i>
          </Link>
        </div>
        <Search
          handleSearchChange={handleSearchChange}
          lang={lang}
          searchRef={searchRef}
          scroll={scroll}
        />
        <LangSelect lang={lang} handleLanguageChange={handleLanguageChange} />
      </nav>
    </>
  );
};

export default Header;
