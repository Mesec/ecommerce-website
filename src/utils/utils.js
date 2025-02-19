import { decreaseCart, increaseCart } from '../features/cart/cartSlice';


const openSnackbarHandler = (message, snackbarSetter, messageSetter) => {
  snackbarSetter(true);
  messageSetter(message)
};

export const increase = (id, quantity, inStock, message, dispatch, snackbarSetter, messageSetter) => {
  dispatch(increaseCart({ id, quantity }));
  if (quantity + 1 === inStock) {
    snackbarSetter(true);
    messageSetter(message)
  }
}

export const decrease = (id, quantity, dispatch) => {
    dispatch(decreaseCart({ id, quantity }));
  }