import React from "react";
import style from "./cart.module.css";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className={style.cart}>
      <p className={style.title}>Products In Your Cart</p>
      {products?.map((item) => (
        <div className={style.top} key={item.id}>
          <div className={style.topleft}>
            <img src={item.img} alt="" />
          </div>
          <div className={style.topright}>
            <p className={style.productname}>{item?.title}</p>
            <div className={style.flexhandler}>
              <p>{item.desc.substr(1, 40)}</p>

              <DeleteForeverTwoToneIcon
                onClick={() => dispatch(removeItem(item.id))}
                style={{ color: "red", cursor: "pointer" }}
              ></DeleteForeverTwoToneIcon>
            </div>
            <p className={style.quant}>{item.quantity}</p>
          </div>
        </div>
      ))}
      <div className={style.bottom}>
        <div className={style.bottomflexer}>
          <p>SUBTOTAL</p>
          <p>${totalPrice()}</p>
        </div>
        <button className={style.btn}>PROCEED TO CHECKOUT</button>
        <p
          onClick={() => {
            dispatch(resetCart());
          }}
          className={style.reset}
        >
          Reset Cart
        </p>
      </div>
    </div>
  );
};

export default Cart;
