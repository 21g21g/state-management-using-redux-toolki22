import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favourite",
  initialState: {
    count: 0,
    search: "",
    mealItem: [],
  },
  reducers: {
    addToFavourite(state, action) {
      const newFavourite = action.payload;
      const existingFood = state.mealItem.find(
        (meal) => meal.id === newFavourite.id
      );
      if (existingFood) {
        existingFood.count++;
      } else {
        state.mealItem.push({
          id: newFavourite.id,
          images: newFavourite.images,
          name: newFavourite.name,

          count: 1,
        });
      }
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSearchOut(state, action) {
      const searchValue = action.payload;
      state.mealItem = state.mealItem.filter((meal) =>
        meal.name.includes(searchValue)
      );
    },
  },
});
export const FavsliceActions = favSlice.actions;
export default favSlice;
