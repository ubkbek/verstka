import React from "react";
import "./About.css";
import imageAbout from "./../../assets/images/about-us.png";

const About = () => {
  return (
    <div className="about">
      <h2 className="mobile__heading">Biz haqimizda</h2>
      <div className="container about__container">
        <div className="about__box">
          <h3 className="about__heading">Yutuqlarimiz</h3>

          <p className="about__text">
            Biz 2017 yildan buyon ilmga chanqoq talabalarga xizmat ko'rsatib
            kelamiz. Biz 2017 yildan buyon ilmga chanqoq talabalarga xizmat
            ko'rsatib kelamiz. Biz 2017 yildan buyon ilmga chanqoq talabalarga
            xizmat ko'rsatib kelamiz. Biz 2017 yildan buyon ilmga chanqoq
            talabalarga xizmat ko'rsatib kelamiz.
          </p>

          <div className="about__result">
            <ul>
              <li>
                <h3>2300+</h3>
                <p>Talaba</p>
              </li>

              <li>
                <h3>80+</h3>
                <p>O'qituvchilar</p>
              </li>

              <li>
                <h3>10+</h3>
                <p>Kurslar</p>
              </li>
            </ul>
          </div>
        </div>
        <img
          src={imageAbout}
          alt="about image"
          width={500}
          height={500}
          className="about__image"
        />
      </div>
    </div>
  );
};

export default About;
