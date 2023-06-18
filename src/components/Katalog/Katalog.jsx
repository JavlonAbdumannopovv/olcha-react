import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./katalog.css";

function Katalog() {
  const data = useSelector((state) => state.home.data);
  const [activeGlobalCategory, setAcGlCat] = useState(
    "Televizor, foto-video va audio"
  );

  return (
    <div className="Katalog flex">
      <div className="container">
        <div className="sidebar">
          <ul>
            {data.map((item) => {
              return (
                <li key={item.globalCategory.slug} onMouseOver={()=> setAcGlCat(item.globalCategory.title)}>
                  {item.globalCategory.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="katalog_main">
          {data.map((item) => {
            return item.categories.map((category) => {
              if (category.globalTitle === activeGlobalCategory) {
                return (
                  <div key={category.slug} className="katalog_box">
                    {item.products.map((product, i) => {
                      if (i === 0) {
                        return <h3 key={category.slug}>{category.title}</h3>;
                      }
                      if (category.title === product.category) {
                        return <p key={product.id}>{product.brend}</p>;
                      } else return null;
                    })}
                  </div>
                );
              } else return null;
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default Katalog;
