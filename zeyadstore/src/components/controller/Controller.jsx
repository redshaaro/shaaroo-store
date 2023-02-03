// import React from "react";
// import style from "./controller.module.css";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { useAppContext } from "../../context/appContext";

// const Controller = () => {
//   const{maxPrice,setMaxPrice,sort,setSort,selectedSubCats,setSelectedSubCats,handleChange }=useAppContext()
//   const params = parseInt(useParams().id);
//   console.log(params);
//   const { data, error, loading } = useFetch(
//     `/sub-categories?[filters] [categories] [id] [$eq]=${params}`
//   );
//   console.log(selectedSubCats);
//   return (
//     <>
//       <form className={style.form}>
//         <p className={style.title}>Product Categories</p>
//         {data.map((item) => (
//           <>
//             <input
//             onChange={handleChange}
//               className={style.input}
//               id={item.id}
//               value={item.id}
//               type="checkbox"
//             />
//             <label htmlFor={item.id}>{item.attributes.Title}</label>
//             <br />
//           </>
//         ))}
//         <p className={style.title}>Filter By Price</p>
//         <label>0</label> <input type="range" min="0" max="1000" />
//         <label>1000</label>
//         <p className={style.title}>Sort By: </p>
//         <input className={style.input} type="radio" />
//         <label>Price (Lowest first)</label>
//         <br />
//         <input className={style.input} type="radio" />
//         <label>Price (Highest first)</label>
//       </form>
//     </>
//   );
// };

// export default Controller;
