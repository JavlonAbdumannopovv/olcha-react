import React from "react";
import "./CatalogBig.css";
import { Popular } from "../index";

const CatalogBig = (props) => {
  const { data } = props;
  console.log(data.products);
  return (
    <div id="CatalogBig" className="container section">
      <div className="catalog-big_top flex">
        <div className="top_img">
          <img
            className="border-radius-3"
            src={data.globalCategory.topImg}
            alt="big-top"
          />
        </div>
        <div className="top_img">
          <img
            className="border-radius-3"
            src={data.globalCategory.topImg1}
            alt="big-top"
          />
        </div>
      </div>
      <div className="catalog-big_body">
        <div className="sidebar">
          <img src={data.globalCategory.sideImg} alt="sidebar"/>
        </div>
        <div className="products">
         <Popular data={data} width="240" />
        </div>
      </div>
    </div>
  );
};

export default CatalogBig;
