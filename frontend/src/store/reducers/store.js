import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./ProductReducer.js";
import {errorReducer} from "./errorReducer.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
    },
    preloadedState: {},
});

export default store;
