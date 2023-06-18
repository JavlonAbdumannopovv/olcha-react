import React from "react";
import "./product.css";

function Product(props) {
  const { product, width } = props;
  const style = {
    width: width === "288" ? "208px" : "150px",
  };
  return (
    <div style={{ width: `${width}px` }} id="Product">
      <div className="product_content">
        <div className="img_wrapper">
          <img src={product.img} alt={product.model} />
        </div>
        <p className="product_name">{product.name}</p>
        <p className="product_discount">{product.discount}</p>
        <p className="product_cost">{product.cost} so`m</p>
        <p className="product_term-payment">
          {product.termPayment} so`m x 12oy
        </p>
        <div className="footer flex">
          <button className="add_to_cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button style={style} className="term_payment">
            Muddatli to`lov
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
