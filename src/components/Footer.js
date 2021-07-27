import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-wrap">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            EUROPE <i className="fas fa-globe-europe"></i>
          </Link>
        </div>
        <small className="website-rights">
          EUROPE &copy; {new Date().getFullYear()}
        </small>
        <div className="social-icons">
          <a
            className="social-icon-link"
            href="https://github.com/krilian88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-icon-link"
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
