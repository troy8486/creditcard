import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice"
const cardStore = configureStore({
    reducer: {
        card: cardReducer,
    }
})

export default cardStore;