import { combineReducers } from "@reduxjs/toolkit";
import AboutSlice from "./aboutSlice";

const RootReducer = combineReducers({
    about: AboutSlice,
})

export default RootReducer;