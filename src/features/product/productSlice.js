import { createSlice } from '@reduxjs/toolkit'
import JSONData from '../../db/products.json'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    promoted: {}
  },
  reducers: {
    fetchProducts: (state) => {
      state.data = JSONData.products;
    },
    setPromotedProduct: (state) => {
      state.promoted = state?.data.filter(item => item.promoted)[0];
    },
    getProductData: (state, action) => {
      const product =  state?.data?.filter(item => item.id === action.payload);
      return product;
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchProducts, setPromotedProduct, getProductData } = productSlice.actions

export default productSlice.reducer