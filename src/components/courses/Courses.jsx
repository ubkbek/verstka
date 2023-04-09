import React from "react";
import "./Courses.css";
import brainImage from "./../../assets/images/history.png";
import math from "./../../assets/images/math.png";
import history from "./../../assets/images/history.png";
import fizike from "./../../assets/images/physics.png";
import kimyo from "./../../assets/images/chemistry.png";
import english from "./../../assets/images/general_english.png";

import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses">
      <div className="container courses__container">
        <h2 className="courses__heading">Bizning kurslar</h2>

        <ul className="courses__list">
          <li className="courses__item">
            <img
              className="courses__image"
              src={math}
              alt="Matematika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Matematika</h3>

              <p className="courses__text">Abituriyentlar uchun matematika</p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={fizike}
              alt="fizika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Fizika</h3>

              <p className="courses__text">Abituriyentlar uchun fizika kursi</p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={kimyo}
              alt="chemistry image"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Kimyo</h3>

              <p className="courses__text">Abituriyentlar uchun Kimyo kursi</p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={english}
              alt="English"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Ingliz tili</h3>

              <p className="courses__text">
                Abituriyentlar uchun umumiy ingliz tili
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
          <li className="courses__item">
            <img
              className="courses__image"
              src={brainImage}
              alt="Mnemonika"
              width={288}
              height={186}
            />

            <div className="courses__wrapper">
              <h3 className="courses__title">Mnemonika</h3>

              <p className="courses__text">
                Mnemonika kurslarimiz orqali miyangizni to'gri boshqaring
              </p>

              <p className="courses__text">100 % offline</p>

              <Link className="courses__more-info" to="#">
                Batafsil
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;
