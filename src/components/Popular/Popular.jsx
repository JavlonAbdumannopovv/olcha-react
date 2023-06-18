import React from "react";
import { Product } from "../index";

function Popular(props) {
  const { data, width } = props;
  return (
    <div className="flex">
      {data.products.map((product, i) => {
        if (i < 10) {
          return (
            <div key={product.id}>
              <Product product={product} width={width} />
            </div>
          );
        } else return null;
      })}
    </div>
  );
}

export default Popular;
