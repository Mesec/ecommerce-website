import React, { useCallback, useEffect } from 'react';
import { Box, Button, Typography, Divider, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import QuantityInput from '../QuantityInput/QuantityInput';
import { clearCart, closeCart, decreaseCart, increaseCart } from '../../features/cart/cartSlice';
import { openSnackbar } from '../../features/snackbar/snackbarSlice';
import CartIcon from '../../assets/icons/cart-black.svg';
import './Cart.css';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const open = useSelector((state) => state.cart.isCartOpen);
  const location = useLocation();
  const dispatch = useDispatch();

  const setBackgroundImage = (path) => {
    const image = require(`/src/assets/images/products${path}`);
    return { backgroundImage: `url(${image})` };
  };

  function formatCurrency(number) {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
  }

  const calculateTotal = () => {
    return cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  const clearCartHandler = () => {
    closeCartHandler();
    dispatch(clearCart());
  };

  const closeCartHandler = useCallback(() => {
    dispatch(closeCart());
  }, [dispatch]);

  const increaseProductHandler = (id, quantity, inStock) => {
    dispatch(increaseCart({ id, quantity }));
    if (quantity + 1 === inStock) {
      dispatch(openSnackbar('No more products in stock.'));
    }
  };

  const decreaseProductHandler = (id, quantity) => {
    dispatch(decreaseCart({ id, quantity }));
  };

  if (open) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  useEffect(() => {
    return () => {
      if (open) {
        closeCartHandler();
      }
    };
  }, [location, closeCartHandler, open]);

  return (
    <Box className={ `Modal-Wrapper ${open ? 'Visible' : 'Hidden'}` }>
      <Box className="Modal-Overlay" onClick={ closeCartHandler }></Box>
      <Box className={ `Cart ${open ? 'ShowCart' : 'HideCart'}` }>
        { cartItems.length > 0 ? (
          <Box display="flex" flexDirection="column" height="100%">
            {/* Header */ }
            <Box className="Cart-Header">
              <Typography variant="h6">Shopping Cart ({ cartItems.length })</Typography>
              <IconButton onClick={ closeCartHandler } size="small" sx={ { position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' } }>
                <CloseIcon sx={ { color: 'white' } } />
              </IconButton>
            </Box>

            {/* Items */ }
            <Box flexGrow={ 1 } overflow="auto" padding={ 2 }>
              { cartItems.map((item, index) => (
                <Box key={ index }>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={ 2 }>
                    <Box display="flex" alignItems="center" gap={ 2 }>
                      <Box
                        sx={ {
                          width: 64,
                          height: 64,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderRadius: 2,
                          backgroundImage: `url(${require(`/src/assets/images/products${item.image}`)})`,
                        } }
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          { item.title }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          { formatCurrency(item.price) }
                        </Typography>
                      </Box>
                    </Box>

                    <QuantityInput
                      quantity={ item.quantity }
                      increaseHandler={ () => increaseProductHandler(item.id, item.quantity, item.inStock) }
                      decreaseHandler={ () => decreaseProductHandler(item.id, item.quantity) }
                      increaseDisabled={ item.quantity === item.inStock }
                      decreaseDisabled={ item.quantity <= 1 }
                    />
                  </Box>
                  { index !== cartItems.length - 1 && <Divider sx={ { mb: 2 } } /> }
                </Box>
              )) }
            </Box>

            {/* Controls */ }
            <Box padding={ 2 }>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={ 2 }>
                <Typography variant="body1" fontWeight="bold">
                  Total
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  { formatCurrency(calculateTotal()) }
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={ 2 }>
                <Link to="/checkout" style={ { textDecoration: 'none' } }>
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={ <ShoppingCartCheckoutIcon /> }
                    sx={ { backgroundColor: '#d87d4a', '&:hover': { backgroundColor: '#c56c3d' } } }
                  >
                    Checkout
                  </Button>
                </Link>
                <Button sx={ {
                  borderColor: '#d87d4a', /* ili neka tamnija nijansa */
                  color: '#d87d4a',
                  '&:hover': {
                    borderColor: '#c56c3d',
                    color: '#c56c3d',
                  }
                } } fullWidth variant="outlined" color="secondary" onClick={ clearCartHandler }>
                  Discard Cart
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
            <Box className="Empty-Cart">
              <Box className="Empty-Cart-Header">
                <Typography variant="h6">Shopping Cart (0)</Typography>
                <IconButton
                  onClick={ closeCartHandler }
                  size="small"
                  sx={ { position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' } }
                >
                  <CloseIcon sx={ { color: 'white' } } />
                </IconButton>
              </Box>

              <Box className="Empty-Cart-Content">
                <Box className="Empty-Cart-Image">
                  <img src={ CartIcon } alt="Empty cart" />
                </Box>

                <Typography variant="body2" sx={ { mt: 2, mb: 2, px: 2, textAlign: 'center' } }>
                  Feel free to explore our products and add items to your cart whenever you're ready.
                </Typography>
                <Button onClick={ closeCartHandler } variant="contained" sx={ { backgroundColor: '#d87d4a', '&:hover': { backgroundColor: '#c56c3d' } } }>
                  Continue Shopping
                </Button>
              </Box>
            </Box>
        ) }
      </Box>
    </Box>
  );
}
