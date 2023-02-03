import React from "react";
import Product from "../product/Product";
import style from "./featured.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const {data,error,loading} = useFetch("/products?populate=*")
   

  
   
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.left}>
          <h2>Featured Proudcts</h2>
        </div>
        <div className={style.right}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis iusto ipsum deserunt cumque natus voluptate. Sequi
            placeat laboriosam illo nemo assumenda dicta, nostrum odit laborum
            voluptatibus ex porro ad ea?
          </p>
        </div>
      </div>
      <div className={style.bottom}>
        {loading?"error": data.map((item) => (
          <Product item={item} key={item.id}></Product>
        ))}
       
      </div>
    </div>
  );
};

export default Featured;
