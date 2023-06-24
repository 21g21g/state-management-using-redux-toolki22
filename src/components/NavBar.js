import React from "react";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { FavsliceActions } from "../store/FavouriteSlice";
const NavBar = () => {
  const search = useSelector((state) => state.favo.search);
  console.log(search);
  const dispatch = useDispatch();
  const onchangeHandler = (event) => {
    dispatch(FavsliceActions.setSearch(event.target.value));
  };
  const containGrapedData = () => {
    dispatch(FavsliceActions.setSearchOut(search));
  };
  return (
    <div className="input-taker">
      <input
        type="text"
        placeholder="searchbyname"
        value={search}
        onChange={onchangeHandler}
      />
      <button onClick={containGrapedData} style={{ color: "blue" }}>
        search
      </button>
    </div>
  );
};

export default NavBar;
