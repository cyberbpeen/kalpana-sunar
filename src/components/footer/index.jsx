import React from "react";
import Social from "../social";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container flex">
        <div className="footer__content">
          <h4 className="footer__name">Kalpana Sunar</h4>
          <ul className="footer__list flex">
            <li className="footer__item">
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item">
              <a href="#blog" className="footer__link">
                Resume
              </a>
            </li>
            <li className="footer__item">
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
          <Social />
        </div>
      </div>
      <div className="footer__copyright container">
        <p>&copy; Copyright 2023 Kalpana Sunar. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
