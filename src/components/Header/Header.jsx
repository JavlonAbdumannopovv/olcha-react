import React from "react";
import "./header.css";
import Katalog from "../Katalog/Katalog";
import { useDispatch, useSelector } from "react-redux";
import { katalogOpenClose } from "../../slice/home-slice";

function Header() {
  const katalog = useSelector((state) => state.home.katalog);
  const dispatch = useDispatch();

  return (
    <div id="header">
      <div className="container flex">
        <div className="logo">
          <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="logo" />
        </div>
        <button className="katalog flex" onClick={() => {dispatch(katalogOpenClose())}}>
          <i className={`${katalog.icon}`}></i>
          <p>Katalog</p>
        </button>
        <div className="bottom-header__search">
          <div className="form-search flex">
            <input
              className="form-search__input"
              placeholder="Katalog bo'yicha qidirish"
              type="search"
            />
            <button aria-label="Search button" className="form-search__btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="actions flex">
          <div>
            <i className="fa fa-signal"></i>
            <p>Taqqoslash</p>
          </div>
          <div>
            <i className="fa fa-heart"></i>
            <p>Sevimlilar</p>
          </div>
          <div>
            <i className="fa fa-cart-shopping"></i>
            <p>Savatcha</p>
          </div>
          <div>
            <i className="fa fa-user"></i>
            <p>Kirish</p>
          </div>
        </div>
      </div>
      <div className="container">
        {katalog.active ? <Katalog /> : null} 
      </div>
    </div>
  );
}

export default Header;
