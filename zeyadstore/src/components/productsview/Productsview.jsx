import React from "react";
import style from "./products.module.css";
import List from "../List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useAppContext } from "../../context/appContext";


const Productsview = () => {
  const{maxPrice,setMaxPrice,sort,setSort,selectedSubCats,setSelectedSubCats,handleChange }=useAppContext()
  const params = parseInt(useParams().id)
  console.log(params);
  const { data, error, loading } = useFetch( `/sub-categories?[filters] [categories] [id] [$eq]=${params}`
  );
  console.log(data);

  return (
    <div className={style.Container}>
      <div className={style.top}>
        <img
          src="https://media.istockphoto.com/id/184330929/photo/deep-blue-ocean-panorama.jpg?b=1&s=170667a&w=0&k=20&c=_xNAxQKrM2Yp3I8sD9GOgCjwT2kUNtTNv3bBQnSRiSo="
          alt=""
        />
      </div>
      <div className={style.bottom}>
        {data?.map((item)=>(
          <List item={item} params={params} maxPrice={maxPrice} sort={sort} selectedSubCats={selectedSubCats}   key={item.id}></List>

        ))}
        
      </div>
    </div>
  );
};

export default Productsview;
