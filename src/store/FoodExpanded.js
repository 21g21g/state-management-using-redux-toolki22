import { createSlice } from "@reduxjs/toolkit";

const foodslice = createSlice({
  name: "food",
  initialState: {
    isClicked: false,
    foodItemms: [],
  },

  reducers: {
    onclickExpand(state, action) {
      const newFoo = action.payload;
      const existi = state.foodItemms.find((foo) => foo.id === newFoo.id);
      if (existi) {
        state.foodItemms = [];
      } else {
        state.foodItemms.push({
          id: newFoo.id,
          images: newFoo.images,
          descc: newFoo.descr,
          name: newFoo.name,
        });
        state.isClicked = true;
      }
    },
    returntoOriginal(state, action) {
      const idd = action.payload;
      const exist = state.foodItemms.find((item) => item.id === idd);
      if (exist) {
        // state.foodItemms.pop();
        state.isClicked = false;
        state.foodItemms = [];
      }
    },
  },
});
export const FoodsliceAction = foodslice.actions;
export default foodslice;
