import React from "react";
import "./MainPage.css";
import { FoodStore } from "../../FoodStore";
import FoodItem from "./FoodItem";

const MainPage = () => {
  return (
    <div className="main-page">
      {FoodStore.map((food) => (
        <FoodItem
          key={food.id}
          id={food.id}
          name={food.name}
          images={food.img}
          descr={food.description}
        />
      ))}
    </div>
  );
};

export default MainPage;
