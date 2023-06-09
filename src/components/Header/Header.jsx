import React from "react";

function Header() {
  return (
    <div id="header">
      <div className="container flex">
        <div className="logo">
          <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="logo" />
        </div>
        <div className="katalog">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
