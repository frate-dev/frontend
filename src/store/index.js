import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import packageReducer from "./packages";

const store = configureStore({
    reducer:{
        packages:packageReducer,
    },
    middlware:(getDefaultMiddleware)=>
    getDefaultMiddleware()
})
export default store;