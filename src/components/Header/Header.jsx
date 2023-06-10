import React from "react";
import "./header.css";
import Katalog from "../Katalog/Katalog";

function Header() {
  return (
    <div id="header">
      <div className="container flex">
        <div className="logo">
          <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="logo" />
        </div>
        <div className="katalog flex">
          <i className="fa fa-bars"></i>
          <p>Katalog</p>
        </div>
        <div className="bottom-header__search">
          <div className="form-search flex">
            <input
              className="form-search__input"
              placeholder="Katalog bo'yicha qidirish"
              type="text"
            />
            <button aria-label="Search button" className="form-search__btn">
              <span>
                <img src="/_nuxt/search.2a234c15.svg" alt="search" />
              </span>
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
      <div class="container">
        <Katalog />
      </div>
    </div>
  );
}

export default Header;
