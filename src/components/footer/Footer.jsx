import React from "react";
import "./Footer.css";
import logo from "./../../assets/images/logo.png";
import instagram from "./../../assets/images/instagram.svg";
import fasebook from "./../../assets/images/facebook.svg";
import twitter from "./../../assets/images/twitter.svg";
import youtube from "./../../assets/images/youtube.svg";
import pinterest from "./../../assets/images/pinterest.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <img src={logo} alt="logo image" />

          <nav className="footer__nav">
            <ul className="footer__navlist">
              <li className="footer__navitem">
                <Link to="/">Home</Link>
              </li>
              <li className="footer__navitem">
                <Link to="/">About us</Link>
              </li>
              <li className="footer__navitem">
                <Link to="/">Courses</Link>
              </li>
              <li className="footer__navitem">
                <Link to="/">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__devider"></div>

        <div className="footer__bottom">
          <p>Address: Shahrisabz mehmonxonasi</p>

          <ul className="footer__sotial-list">
            <li className="footer__sotial-item">
              <Link className="footer__sotial-link" to="/">
                <img
                  className="footer__sotial-img"
                  src={fasebook}
                  alt="fasebook"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className="footer__sotial-item">
              <Link className="footer__sotial-link" to="/">
                <img
                  className="footer__sotial-img"
                  src={youtube}
                  alt="youtube"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className="footer__sotial-item">
              <Link className="footer__sotial-link" to="/">
                <img
                  className="footer__sotial-img"
                  src={twitter}
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className="footer__sotial-item">
              <Link className="footer__sotial-link" to="/">
                <img
                  className="footer__sotial-img"
                  src={pinterest}
                  alt="pinterest"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className="footer__sotial-item">
              <Link className="footer__sotial-link" to="/">
                <img
                  className="footer__sotial-img"
                  src={instagram}
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>

          <p>Tel: 88 388 01 18</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
