import React from "react";
import "./Teachers.css";
import womenImg from "./../../assets/images/woman.png";
import jamolImage from "./../../assets/images/jamoliddin.png";

const Teachers = () => {
  return (
    <div className="teachers">
      <div className="container teachers__container">
        <h2 className="teachers__heading">Bizning ustozlar</h2>

        <ul className="teachers__list">
          <li className="teachers__item">
            <img
              src={womenImg}
              alt="Teacher image"
              width={420}
              height={543}
              className="teachers__img"
            />

            <div className="teachers__wrapper">
              <h3 className="teachers__name">Julia Adams</h3>

              <p className="teachers__spicialist">
                IELTS instruktor with 8.5 score
              </p>

              <p className="teachers__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                dolorem saepe facilis perferendis! Aspernatur eveniet illum
                magnam adipisci rerum cum a nostrum similique facere ratione
                ipsum, repellat amet recusandae quasi.
              </p>
            </div>
          </li>

          <li className="teachers__item">
            <img
              src={jamolImage}
              alt="Teacher image"
              width={420}
              height={543}
              className="teachers__img"
            />

            <div className="teachers__wrapper">
              <h3 className="teachers__name">Jamoliddin Satimov</h3>

              <p className="teachers__spicialist">Senior software engineer</p>

              <p className="teachers__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                dolorem saepe facilis perferendis! Aspernatur eveniet illum
                magnam adipisci rerum cum a nostrum similique facere ratione
                ipsum, repellat amet recusandae quasi.
              </p>
            </div>
          </li>

          <li className="teachers__item">
            <img
              src={jamolImage}
              alt="Teacher image"
              width={420}
              height={543}
              className="teachers__img"
            />

            <div className="teachers__wrapper">
              <h3 className="teachers__name">Jamoliddin Satimov</h3>

              <p className="teachers__spicialist">Senior software engineer</p>

              <p className="teachers__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                dolorem saepe facilis perferendis! Aspernatur eveniet illum
                magnam adipisci rerum cum a nostrum similique facere ratione
                ipsum, repellat amet recusandae quasi.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teachers;
