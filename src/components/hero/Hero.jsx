import React from "react";
import "./Hero.css";
import heroImg from "./../../assets/images/heroimg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__box">
          <h1 className="hero__heading">
            Biz bilan foydali bilimlar o'rganing
          </h1>

          <p className="hero__text">
            Renessans o'quv markazi sizga porloq kelajak va'da qiladi. Keling,
            o'qing va aql bovor qilmas natijalarga erishing.
          </p>

          <Link to="/" className="hero__btn">
            Kurslar
          </Link>
        </div>

        <img
          className="hero__image"
          src={heroImg}
          alt="image about hero"
          width={660}
          height={660}
        />
      </div>
    </div>
  );
};

export default Hero;
