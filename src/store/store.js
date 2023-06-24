import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./FavouriteSlice";
import foodslice from "./FoodExpanded";

const store = configureStore({
  reducer: {
    favo: favSlice.reducer,
    food: foodslice.reducer,
  },
});
export default store;
