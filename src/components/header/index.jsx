import { useState } from "react";
import {
  RiCloseLine,
  RiFunctionLine,
  RiGraduationCapLine,
  RiHome5Line,
  RiMoonLine,
  RiPhoneLine,
  RiUserLine,
} from "react-icons/ri";
import "./header.css";

const Header = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header flex">
      <nav className="nav container flex">
        {/* Logo */}
        <a href="#" className="nav__brand">
          Kalpana.
        </a>
        {/* Menu */}
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <RiHome5Line className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <RiUserLine className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                <RiGraduationCapLine className="nav__icon" />
                Resume
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <RiPhoneLine className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div className="nav__buttons flex">
          <span className="theme__toggle">
            <RiMoonLine />
          </span>
          <span className="nav__toggle" onClick={() => showMenu(!toggle)}>
            {toggle ? <RiCloseLine /> : <RiFunctionLine />}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
