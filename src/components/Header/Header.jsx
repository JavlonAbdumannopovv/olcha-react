import React from "react";
import "./header.css";

function Header() {
  return (
    <div id="header">
      <div className="container flex">
        <div className="logo">
          <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="logo" />
        </div>
        <div className="katalog flex">
          <i class="fa fa-bars"></i>
          <p>Katalog</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
