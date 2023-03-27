import { configureStore } from "@reduxjs/toolkit";
import competitorReducer  from "./Feature/Competitors/competitor.Slice";
import modalReducer from "./Feature/Modal/ModalSlice";
export const Store= configureStore({
    reducer: {
        modal:modalReducer,
        competitor:competitorReducer
    }
});