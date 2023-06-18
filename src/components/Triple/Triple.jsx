import React from "react";
import "./Triple.css";

function Triple(props) {
  const { data } = props;
  return (
    <div className="container">
      <div className="triple_content flex">
        {data.map((item) => {
          return (
            <div key={item.id} className="img_wrapper">
              <img src={item.img} alt={item.id} key={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Triple;
