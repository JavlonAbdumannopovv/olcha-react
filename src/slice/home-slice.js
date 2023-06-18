import {createSlice} from "@reduxjs/toolkit";
import data from "../data/data";

const homeSlice = createSlice({
  name: "home",
  initialState : data,
  reducers: {
    katalogOpenClose: (state) => {
      return {
        ...state,
        katalog: {
          ...state.katalog,
          active: !state.katalog.active,
          icon: state.katalog.active ? "fa fa-bars" : "fa-solid fa-x",
        }
      }
    },
    countPlus: (state) => {
      if (state.hero.count >= 0){
        state.hero.count = state.hero.count + 1;
        if (state.hero.count === 7) {
          state.hero.count = 0;
        }
      }
    },
    countMinus: (state) => {
      if (state.hero.count <= 7){
        state.hero.count = state.hero.count - 1;
        if (state.hero.count === -1) {
          state.hero.count = 6;
        }
      }
    },
  },
});

export const {katalogOpenClose, countPlus, countMinus} = homeSlice.actions;
export default homeSlice.reducer;