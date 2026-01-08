import {configureStore} from "@reduxjs/toolkit";
import Slice1Reducer from "./slice1.js"
const store = configureStore({
    reducer:{
        slice1: Slice1Reducer
    }
})

export default store