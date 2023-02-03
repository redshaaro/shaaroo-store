import React from "react";
import style from "./cat.module.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className={style.categories}>
      <div className={style.col}>
        <div className={style.row}>
          <img
            className={style.img}
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={style.button}>
            <Link className={style.link} to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className={style.row}>
          <img
            className={style.img}
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={style.button}>
            <Link to="/products/1" className={style.link}>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className={style.col}>
        <div className={style.row}>
          {" "}
          <img
            className={style.img}
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={style.button}>
            <Link to="/products/1" className={style.link}>
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className={`${style.col} ${style.colLarge}`}>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.row}>
              <img
                className={style.img}
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className={style.button}>
                <Link to="/products/2" className={style.link}>
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.row}>
              {" "}
              <img
                className={style.img}
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className={style.button}>
                <Link to="/products/1" className={style.link}>
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <img
            className={style.img}
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className={style.button}>
            <Link to="/products/1" className={style.link}>
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
