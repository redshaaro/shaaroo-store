import React from "react";
import style from "./specific.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareTwoToneIcon from "@mui/icons-material/CompareTwoTone";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { addItem } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const Product = () => {
  const id = useParams().id;
  const [index, setIndex] = useState("img");

  const [quantity, setquantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();

  const quantityHandler = (type) => {
    switch (type) {
      case "increment":
        setquantity(quantity + 1);
        break;
      case "decrement":
        if (quantity !== 0) {
          setquantity(quantity - 1);
          break;
        } else {
          break;
        }

      default:
        setquantity(1);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.choices}>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data.attributes?.url
            }
            alt=""
            onClick={(e) => {
              setIndex("img");
            }}
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img2?.data.attributes?.url
            }
            alt=""
            onClick={(e) => {
              setIndex("img2");
            }}
          />
        </div>
        <div className={style.view}>
          {/* <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[index]?.data?.attributes?.url
            }
            alt=""
          /> */}

          {/* IMPORTANT ISSUE TO BE FIXEX !!!!!!! */}
        </div>
      </div>
      <div className={style.right}>
        <p className={style.title}>{data?.attributes?.Title}</p>
        <p className={style.price}>{data?.attributes?.price}</p>
        <p className={style.desc}>{data?.attributes?.desc}</p>
        <div className={style.controllers}>
          <div className={style.btnContainer}>
            <button
              onClick={() => {
                quantityHandler("increment");
              }}
              style={{ cursor: "pointer" }}
              className={style.btn}
            >
              <AddIcon style={{ fontSize: "12px" }}></AddIcon>
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                quantityHandler("decrement");
              }}
              style={{ cursor: "pointer" }}
              className={style.btn}
            >
              <RemoveIcon
             
                style={{ fontSize: "12px", cursor: "pointer" }}
              ></RemoveIcon>
            </button>
          </div>

          <button
            onClick={()=>{dispatch(
              addItem({
                id: data.id,
                title: data?.attributes?.Title,
                desc: data?.attributes?.desc,
                price: data?.attributes?.price,
                img:
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data.attributes?.url,
                  quantity
              })
            )}}
            className={style.special}
          >
            <AddShoppingCartIcon></AddShoppingCartIcon> Add To Cart
          </button>
          <div className={style.option}>
            <span className={style.flexHandler}>
              <FavoriteIcon
                style={{ marginRight: "5px", cursor: "pointer" }}
              ></FavoriteIcon>
              <p>Add To WishList</p>
            </span>
            <span className={style.flexHandler}>
              <CompareTwoToneIcon
                style={{ marginRight: "5px", cursor: "pointer" }}
              ></CompareTwoToneIcon>
              <p>Add To Compare</p>
            </span>
          </div>
        </div>

        <div className={style.details}>
          <p>Vendor:Polo</p>
          <p>ProductType:T-shirt</p>
          <p>Tag:T-shirt,Women,Top</p>
        </div>
        <div className={style.productoptions}>
          <p>Description</p>
          <p>Additional-infp</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
