import React from "react";
import "./FoodItem.css";
import { FaHandPointRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FavsliceActions } from "../../store/FavouriteSlice";
import { FoodsliceAction } from "../../store/FoodExpanded";

const FoodItem = ({ id, name, images, descr }) => {
  const dispatch = useDispatch();

  const addToFavourite = () => {
    dispatch(FavsliceActions.addToFavourite({ id, images, name }));
  };
  const onclickExpand = () => {
    dispatch(FoodsliceAction.onclickExpand({ id, images, descr, name }));
  };
  return (
    <div className="food-item" key={id} style={{ cursor: "pointer" }}>
      <img
        style={{ height: "6rem", width: "8rem" }}
        src={images}
        alt="no image"
        onClick={onclickExpand}
      />

      <div className="name">
        <h1 style={{ fontSize: "15px", marginTop: "0.1rem" }}>{name}</h1>
        <FaHandPointRight
          style={{ color: "brown", cursor: "pointer" }}
          onClick={addToFavourite}
        />
      </div>
    </div>
  );
};

export default FoodItem;
