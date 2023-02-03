import React from "react";
import style from "./trend.module.css";
import Product from "../product/Product";
import useFetch from "../../hooks/useFetch";

const Trending = () => {
  const { data, error, loading } = useFetch(
    "/products?populate=*&[filters] [type] [$eq]=trending"
  );

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.left}>
          <h2>Trending Proudcts</h2>
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
        {error
          ? "something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Product item={item} key={item.id}></Product>)}
      </div>
    </div>
  );
};

export default Trending;
