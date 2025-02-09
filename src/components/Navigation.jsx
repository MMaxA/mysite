import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navigation.css"; // Импорт CSS для дополнительной стилизации

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <NavLink to="/mysite" className="nav__logo">
          Dendanart
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/mysite"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/taskmanager"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Task Manager
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/todo"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Todo List
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/weather"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Weather
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contacts"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
