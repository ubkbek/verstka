import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "./../../assets/images/logo.png";
import burgerMenu from "./../../assets/images/burger-menu.png";
import cross from "./../../assets/images/x.png";
import "./Header.css";
const Header = () => {
  const [mobile, setMobile] = useState(false);

  console.log(mobile);

  return (
    <div className={mobile ? "active header" : "header"}>
      <div className="container header__container">
        <Link className="header__logo-link" to={"/"}>
          <img
            src={logoImage}
            alt="Logotip of Renessans learning centre"
            width={180}
          />
        </Link>

        <div className="header__nav-wrapper">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__nav-link text-decoration-underline p-4"
                      : "header__nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink className="header__nav-link">About us</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink className="header__nav-link">Courses</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink className="header__nav-link">Contacts</NavLink>
              </li>
            </ul>
          </nav>

          <button className="sign-in-btn">Kirish</button>
        </div>

        <button onClick={() => setMobile(!mobile)} className="header__btn">
          <img
            className="burger__btn"
            width={20}
            src={burgerMenu}
            alt="burger menu"
          />
          <img className="close__btn" src={cross} alt="close menu" width={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
