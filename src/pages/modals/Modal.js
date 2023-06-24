import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FoodsliceAction } from "../../store/FoodExpanded";

const Modal = () => {
  const foodItem = useSelector((state) => state.food.foodItemms);
  console.log(foodItem);
  const dispatch = useDispatch();
  const returntoOriginal = (id) => {
    dispatch(FoodsliceAction.returntoOriginal(id));
  };
  return (
    <div className="modal">
      {foodItem.map((neww) => {
        return (
          <div key={neww.id} className="expanded">
            <img src={neww.images} alt="no" />
            <p>{neww.descc}</p>
            <button
              style={{ color: "white", backgroundColor: "red" }}
              onClick={() => returntoOriginal(neww.id)}
            >
              close
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Modal;
