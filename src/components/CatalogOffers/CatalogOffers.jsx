import React from "react";
import { Category, Product } from "../index";
import "./CatalogOffers.css";

function CatalogOffers(props) {
  const { data } = props;
  return (
    <div id="CatalogOffers">
      <div className="container section">
        <div className="offers_body flex">
          <div className="flex offers_product">
            {data.products.map((product, i) => {
              if (i < 5) {
                return (
                  <div key={product.id}>
                    <Product product={product} width={"233"} />
                  </div>
                );
              } else return null;
            })}
          </div>
          <div className="offers_sidebar">
            <img src={data.globalCategory.sideImg} alt={"offers_img"} />
          </div>
        </div>
        <div className="offers_category">
          <Category data={data}/>
        </div>
      </div>
    </div>
  );
}

export default CatalogOffers;
