import React from "react";
import style from "./list.module.css";

import useFetch from "../../hooks/useFetch";
import Product from "../product/Product";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters] [categories] [id]=${catId}${subCats?.map(
      (item) => `&[filters] [sub_categories][id][$eq]=${item}`
    )} `
  );

  return (
    <div className={style.list}>
      {loading
        ? "loading"
        : data?.map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default List;
