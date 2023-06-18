import React from "react";
import "./Category.css";

const Category = (props) => {
  const { data } = props;

  const style = {
    backgroundImage: `url(${data.globalCategory.boxImg})`,
  };

  return (
    <div className="Categories flex">
      {data.categories.map((category) => {
        return (
          <div className="category">
            <div style={style} className="category_img">
              <img src={category.img} alt={category.title} />
            </div>
            <p>{category.title}</p>
          </div>
        );
      })}
      {data.categories.map((category) => {
        return (
          <div className="category">
            <div style={style} className="category_img">
              <img src={category.img} alt={category.title} />
            </div>
            <p>{category.title}</p>
          </div>
        );
      })}
      {data.categories.map((category) => {
        return (
          <div className="category">
            <div style={style} className="category_img">
              <img src={category.img} alt={category.title} />
            </div>
            <p>{category.title}</p>
          </div>
        );
      })}
      {data.categories.map((category) => {
        return (
          <div className="category">
            <div style={style} className="category_img">
              <img src={category.img} alt={category.title} />
            </div>
            <p>{category.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
