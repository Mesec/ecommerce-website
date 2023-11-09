import { createSlice } from '@reduxjs/toolkit'

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    isOpen: false,
    message: ''
  },
  reducers: {
    openSnackbar: (state, action) => {
      state.isOpen = true
      state.message = action.payload
    },
    closeSnackbar: (state) => {
      state.isOpen = false
      state.message = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { openSnackbar, closeSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer