import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, closeCart, decreaseCart, increaseCart } from 'features/cart/cartSlice';
import { openSnackbar } from 'features/snackbar/snackbarSlice';
import CartIcon from '../../assets/icons/cart-black.svg'
import QuantityInput from '../QuantityInput/QuantityInput';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const open = useSelector((state) => state.cart.isCartOpen);

  const dispatch = useDispatch();

  const setBackgroundImage = (path) => {
   const image = require(`/src/assets/images/products${path}`);
    return { backgroundImage: `url(${image})` }
  }

  function formatCurrency(number) {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
  }

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
    return totalPrice;
  }

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  const closeCartHandler = () => {
    dispatch(closeCart());
  }

  const increaseProductHandler = (id, quantity, inStock) => {
    const message = 'No more products in stock.';
    dispatch(increaseCart({ id, quantity }));
    if (quantity + 1 === inStock) {
     dispatch(openSnackbar(message))
    }
  }

  const decreaseProductHandler = (id, quantity) => {
    dispatch(decreaseCart({ id, quantity }));
  }

  if (open) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <Box className={`Modal-Wrapper ${open ? 'Visible' : 'Hidden'}`}>
      <Box className='Modal-Overlay' onClick={ closeCartHandler }></Box>
       <Box className={`Cart ${open ? 'ShowCart' : 'HideCart'}`}>
        { cartItems?.length > 0 ?
          <>
            <Box className='Cart-Header'>
              <Typography variant='body1'>CART ({cartItems?.length})</Typography>
              <Button onClick={ clearCartHandler }>Remove all</Button>
            </Box>
            <Box className='Cart-Items'>
              { cartItems?.map((item, index) => {
                return (
                  <Box className='Cart-Item' key={ index }>
                    <Box className='Cart-Left'>
                      <Box className='Cart-Item-Image' style={ setBackgroundImage(item?.image) }>
                      </Box>
                      <Box>
                        <Typography variant='h5'>{ item.title }</Typography>
                        <Typography variant='body'>{ formatCurrency(item.price) }</Typography>
                      </Box>
                    </Box>
                    <QuantityInput
                      inStock={ item.inStock }
                      quantity={ item.quantity }
                      id={ item.id }
                      increaseHandler={ () => increaseProductHandler(item.id, item.quantity, item.inStock) }
                      decreaseHandler={ () => decreaseProductHandler(item.id, item.quantity) }
                      increaseDisabled={ item.quantity === item.inStock}
                      openSnackbar={ openSnackbar }/>
                  </Box>
                )
              }) }
            </Box>
            <Box className='Cart-Total'>
              <Typography variant='body1'>
                TOTAL
              </Typography>
              <Typography variant='h6'>
                { formatCurrency(calculateTotal()) }
              </Typography>
            </Box>
            <Button variant='contained'>CHECKOUT</Button>
          </>
          :
          <Box className='Empty-Cart'>
            <Box className='Empty-Cart-Header'>
              <Typography variant='h5'>
                Your shopping cart is currently empty
              </Typography>
            </Box>
              <Box className='Empty-Cart-Image'><img src={ CartIcon } alt="" /></Box>
              <Typography variant='body1'>
                Feel free to explore our products and add items to your cart whenever you're ready. We're here to assist you with your shopping needs.
              </Typography>
          </Box>
      }
       </Box>
    </Box>
  )
}
