import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product && quantity > 0) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
