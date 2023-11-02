import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;

      if (state.items.length === 0) {
        state.items.push({
          id,
          quantity,
        })
      } else {
        const alreadyInCart = state.items.find(item => item.id === id);

        if (alreadyInCart) {
          const updatedCart = state.items.map(item => {
            if (item.id === id) {
              return { ...item, quantity }
            } else {
              return item;
            }
          })
          console.log(updatedCart)
        } else {
          state.items.push({
            id,
            quantity,
          })
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer