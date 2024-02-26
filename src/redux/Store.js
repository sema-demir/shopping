import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../redux/categorySlice";
import productSlice from "../redux/productSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
  },
});
