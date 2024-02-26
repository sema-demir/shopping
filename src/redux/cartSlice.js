import { createSlice } from "@reduxjs/toolkit";

//cart la ilgili verileri local storage'a kaydet
const fetchFromLocelStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const storeInlocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocelStorage(),
  itemCount: 0,
  totalAmount: 0,
};
//kartı tanıtma ve ekleme özellikleri
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQtyt = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQtyt + item.price;
            return {
              ...item,
              quantity: tempQtyt,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInlocalStorage(state.carts);
        //kartı bulamadıgın durumda
      } else {
        state.carts.push(action.payload);
        storeInlocalStorage(state.carts);
      }
    },
    //kartı kaldırma durumunda
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id == action.payload);
      state.carts = tempCart;
      storeInlocalStorage(state.carts);
    },
    //tüm kartı temizlemek durumunda
    clearCart: (state) => {
      state.carts = [];
      storeInlocalStorage(state.carts);
    },
    //toplam fiyat ve ürün sayısnı
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});
//actionları export ediyoruz
export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
