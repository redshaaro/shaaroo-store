import React from "react";
import style from "./product.module.css";
 

import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <>
      <Link to={`/product/${item.id}`}>
        {item?.attributes.isNew && (
          <div className={style.cardContainer}>
            <>
              <img
                className={style.img}
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes?.img?.data.attributes.url
                }
                alt=""
              />
              <img
                className={style.img2}
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  item.attributes?.img2?.data.attributes.url
                }
                alt=""
              />
            </>
            <p className={style.tag}>New Season</p>
            <div className={style.details}>
              <div className={style.top}>{item?.attributes.Title}</div>
              <div className={style.bottom}>
                <span className={style.discount}>
                  {item?.attributes.price + 200}
                </span>{" "}
                <span>{item?.attributes.price}</span>
              </div>
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default Product;
