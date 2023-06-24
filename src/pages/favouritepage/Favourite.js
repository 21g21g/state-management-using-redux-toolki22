import React from "react";
import "./Favourite.css";
import { useSelector } from "react-redux";
const Favourite = () => {
  const mealItem = useSelector((state) => state.favo.mealItem);
  console.log(mealItem);
  return (
    <div className="favorite">
      <h1 style={{ color: "white", textAlign: "left" }}>Favourite </h1>
      <div className="ere">
        {mealItem.map((mea) => {
          return (
            <div className="displays" key={mea.id}>
              <img
                style={{ width: "3rem", height: "2rem" }}
                src={mea.images}
                alt="no"
              />
              <h1 style={{ fontSize: "0.3rem", color: "white" }}>
                <b>{mea.name}</b>
              </h1>
              <h1 style={{ fontSize: "0.3rem", color: "white" }}>
                {mea.count}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
