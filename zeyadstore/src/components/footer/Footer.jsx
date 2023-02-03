import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
import payment from '../../assets/payment.png'
import payment2 from '../../assets/payment2.png'
import visa from '../../assets/visa.jpg'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.col}>
            <p className={style.head}>Categories</p>
            <ul>
              <li>
                <Link className={style.link}>Women</Link>
              </li>
              <li>
                <Link className={style.link}>Men</Link>
              </li>
              <li>
                <Link className={style.link}>Shoes</Link>
              </li>
              <li>
                <Link className={style.link}>Accessories</Link>
              </li>
              <li>
                <Link className={style.link}>New Arrivals</Link>
              </li>
            </ul>
          </div>
          <div className={style.col}>
            <p className={style.head}>Links</p>
            <ul>
              <li>
                <Link className={style.link}>FAQ</Link>
              </li>
              <li>
                <Link className={style.link}>Pages</Link>
              </li>
              <li>
                <Link className={style.link}>Stores</Link>
              </li>
              <li>
                <Link className={style.link}>Compare</Link>
              </li>
              <li>
                <Link className={style.link}>Cookies</Link>
              </li>
            </ul>
          </div>
          <div className={style.col}>
            <p className={style.head}>About</p>
            <p className={style.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              error possimus iste cumque debitis sapiente nihil molestiae
              fugiat? Sequi deserunt quaerat asperiores velit voluptates quis
              quos excepturi architecto repellat laudantium!
            </p>
          </div>
          <div className={style.col}>
            <p className={style.head}>About</p>
            <p className={style.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              error possimus iste cumque debitis sapiente nihil molestiae
              fugiat? Sequi deserunt quaerat asperiores velit voluptates quis
              quos excepturi architecto repellat laudantium!
            </p>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.left}>
          ©SHAAROO
            </div>
          <div className={style.right}>
            <img className={style.logos} src={payment} alt="" />
            <img className={style.logos} src={payment2} alt="" />
            <img className={style.logos} src={visa} alt="" />

          </div>



        </div>
      </div>
    </div>
  );
};

export default Footer;
