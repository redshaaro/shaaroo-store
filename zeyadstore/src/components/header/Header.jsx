import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/language1.png";
import style from "./header.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useState } from "react";
import Cart from "../cart/Cart";
import {useSelector} from 'react-redux'

const Header = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector(state=>state.cart.products)


  return (
    <div className={style.nav}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.dropdown}>
            <img src={img1} alt="" />
            <ArrowDownwardIcon fontSize="13"></ArrowDownwardIcon>
          </div>

          <div className={style.dropdown}>
            <p>USD</p>
            <ArrowDownwardIcon fontSize="13"></ArrowDownwardIcon>
          </div>
          <div className={style.links}>
            <Link to="/products/2" className={style.link}>
              <span>Men</span>
            </Link>
            <Link to="/products/1" className={style.link}>
              <span>Women</span>
            </Link>
            <Link to="/products/3" className={style.link}>
              <span>Children</span>
            </Link>
            <Link to="/products/4" className={style.link}>
              <span>Accessories</span>
            </Link>
          </div>
        </div>
        <Link className={style.link} to="/">
          <div className={style.mid}>SHAAROO STORE</div>
        </Link>
        <div className={style.right}>
          <Link className={style.link}>
            <span>HomePage</span>
          </Link>
          <Link className={style.link}>
            <span>About</span>
          </Link>
          <Link className={style.link}>
            <span>Contact</span>
          </Link>
          <Link className={style.link}>
            <span>Stores</span>
          </Link>
          <Link className={style.link}>
            <SearchIcon></SearchIcon>
          </Link>
          <Link className={style.link}>
            <PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
          </Link>
          <Link className={style.link}>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
          </Link>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={style.cart}
          >
            <LocalGroceryStoreOutlinedIcon></LocalGroceryStoreOutlinedIcon>
            <span>{products.length}</span>
          </div>
        </div>
      </div>
      {open&& <Cart></Cart>}
    </div>
  );
};

export default Header;
