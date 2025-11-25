import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isCartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, title, price, image, inStock } = action.payload;
      if (state.items.length === 0) {
        state.items.push({
          id,
          quantity,
          title,
          price,
          image,
          inStock,
        })
      } else {
        const alreadyInCart = state.items.find(item => item.id === id);
        if (alreadyInCart) {
          const updatedCart = state.items.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + quantity }
            } else {
              return item;
            }
          })

          state.items = updatedCart;
        } else {
          state.items.push({
            id,
            quantity,
            title,
            price,
            image,
            inStock,
          })
        }
      }
    },
    increaseCart: (state, action) => {
      const { id } = action.payload;
      const updated = state.items.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1}
        } else {
          return { ...item }
        }
      });
      state.items = updated;
    },
    decreaseCart: (state, action) => {
      const { id, quantity } = action.payload;
      let updated;
      if (quantity === 1) {
        updated = state.items.filter(item => item.id !== id)

      } else {
        updated = state.items.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return { ...item }
          }
        });
      }
      state.items = updated;
    },
    clearCart: (state) => {
      state.items = [];
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state,) => {
      state.isCartOpen = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, openCart, closeCart, increaseCart, decreaseCart } = cartSlice.actions

export default cartSlice.reducer