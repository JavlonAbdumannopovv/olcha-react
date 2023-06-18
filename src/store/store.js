import { configureStore } from '@reduxjs/toolkit'
import  homeReducer  from "../slice/home-slice";

export default configureStore({
  reducer: {
    home: homeReducer,
  },
})