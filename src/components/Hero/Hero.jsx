import React, { useEffect, useState } from "react";
import "./hero.css";
import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../../slice/home-slice";

function Hero() {
  const count = useSelector((state) => state.home.hero.count);
  const hero = useSelector((state) => state.home.hero);
  const [chevronStyle, setChevronStyle] = useState({
    transform: "scale(0)",
  });

  const dispatch = useDispatch();

  return (
    <div id="hero">
      <div className="container">
        <div id="hero_slider">
          <div
            id="slider_content"
            style={hero.style(count)}
            onMouseOver={() => setChevronStyle({ transform: "scale(1)" })}
            onMouseOut={() => setChevronStyle({ transform: "scale(0)" })}
          >
            {hero.slider.map((item) => {
              return <img src={item.img} alt={item.id} key={item.id}/>;
            })}
          </div>
          <span className="slider slider_left" onClick={() => dispatch(countMinus)}>
            <i
              style={chevronStyle}
              className="fa-solid fa-chevron-left"
              onMouseOver={() => setChevronStyle({ transform: "scale(1)" })}
            ></i>
          </span>
          <span className="slider slider_left" onClick={() => dispatch(countPlus)}>
            <i
              style={chevronStyle}
              className="fa-solid fa-chevron-right"
              onMouseOver={() => setChevronStyle({ transform: "scale(1)" })}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
