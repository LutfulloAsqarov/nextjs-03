import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cartSlice from "./features/cartSlice";
import wishlistSlice from "./features/wishlistSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartSlice,
            wishlist: wishlistSlice,
            // counter: counterSlice,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    });
};
