import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { products } from '../../data';
// import {  } from '@mui/base';
import { TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system'
import './Product.css'
import ProductItem from '../../components/ProductItem/ProductItem';
import CircularProgress from '@mui/material/CircularProgress';
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation';
import { addToCart, decreaseCart, increaseCart, openCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import QuantityInput from 'components/QuantityInput/QuantityInput';
import { openSnackbar } from 'features/snackbar/snackbarSlice';

export default function Product() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  const products = useSelector((state) => state.products.data);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems?.filter(item => item?.id === product?.id);

  const dispatch = useDispatch();

  const setBackgroundImage = (position) => {
    let image;
    if (position === 'top') {
      image = require(`/src/assets/images/products${product?.images?.gallery[0]}`);
    }
    if (position === 'bottom') {
      image = require(`/src/assets/images/products${product?.images?.gallery[2]}`);
    }
    if (position === 'right') {
      image = require(`/src/assets/images/products${product?.images?.gallery[1]}`);
    }

    return { backgroundImage: `url(${image})` }
  }

  const addToCartHandler = () => {
    dispatch(addToCart({
      quantity,
      id: product?.id,
      title: product?.shortName,
      price: product?.price,
      image: product?.images?.main,
      inStock: product?.inStock
    }));
    dispatch(openCart());
    setQuantity(1)
  }

  const increaseProductHandler = () => {
    setQuantity(quantity + 1)
    if ((quantity + 1) + cartItem.quantity === cartItem.inStock) {
      dispatch(openSnackbar('No more products in stock.'))
    }
  }

  const decreaseProductHandler = () => {
    setQuantity(quantity - 1)
  }

  useEffect(() => {
    if (products?.length > 0) {
      const prod = products.filter(item => item.id === id);
      setProduct(prod[0])
    }
  }, [products, id]);

  useEffect(() => {
    setLoading(false)
  }, [product]);

  if (loading) {
    return <Box className='Product-Spinner'><CircularProgress/></Box>
  }

  const disableIncreaseButton = () => {
      if (cartItem.length > 0 && cartItem[0].quantity + quantity === product.inStock) {
        return true;
      }
    if (cartItem.length > 0 && cartItem[0].quantity === product.inStock) {
      return true;
    }
    if (cartItem.length <= 0 && quantity === product.inStock) {
      return true;
    }
    return false;
  }

  const disableAddToCartButton = () => {
    if (cartItem.length > 0 && (cartItem[0].quantity + quantity > product.inStock)) {
      return true
    } 
    if (cartItem.length === 0 && quantity > product.inStock) {
      return true;
    }
    if (cartItem.length > 0 && cartItem[0].quantity === product.inStock) {
      return true;
    }
    return false
  }

  const getAvailableProductStock = () => {
    if (cartItem?.length) {
      return product.inStock - cartItem[0].quantity;
    }
    if(!cartItem?.length) {
      return product.inStock;
    }
  }

  return (
    <Box marginTop={ location.pathname.length > 8 &&  '79px'}>
      { product &&
      <Box className='Product-Container'>
        <ProductItem { ...product }>
          <Box className='Product-Controls'>
            <Box className='Product-Controls-Form'>
              <QuantityInput
                id={ product.id }
                quantity={ quantity }
                inStock={ product.inStock }
                increaseHandler={ increaseProductHandler }
                decreaseHandler={ decreaseProductHandler }
                increaseDisabled={ disableIncreaseButton() }
                decreaseDisabled={ quantity === 1 } />
              <Button
                disabled={ disableAddToCartButton() }
                onClick={ addToCartHandler }
                className='Add-Product'
                variant='contained'>
                ADD TO CART
              </Button>
            </Box>
              { getAvailableProductStock() === 0 ?
              <Typography variant='h6'>
                Out of stock. We'll restock soon.
              </Typography>
                :
              <Typography variant='h6'>
                Available stock quantity: <span>{ getAvailableProductStock() }</span>
              </Typography>
              }
          </Box>

        </ProductItem>
        <Box display='flex' className='Product-Info'>
          <Box className='Product-Features'>
            <Typography variant='h4'>
              FEATURES
            </Typography>
            { product?.features?.map((item, index) => {
              return (
                <Typography variant='body1' key={ index }>
                  { item }
                </Typography>
              )
            }) }
          </Box>
          <Box className='In-Box'>
            <Typography variant='h4'>
              IN THE BOX
            </Typography>
            { product?.inBox.map((item, index) => {
              return (
                <Box className='In-Box-Items' key={ index }>
                  <Typography variant='body1'>{ `${item.quantity}x` }</Typography>
                  <Typography variant='body1'>{ item.name }</Typography>
                </Box>
              );
            }) }
          </Box>
        </Box>
        <Box className='Product-Gallery'>
          <Box className='Product-Gallery-Left'>
            <Box className='Product-Gallery-Top' style={ setBackgroundImage('top') }></Box>
            <Box className='Product-Gallery-Bottom' style={ setBackgroundImage('bottom') }></Box>
          </Box>
          <Box className='Product-Gallery-Right'>
            <Box className='Product-Gallery-Right' style={ setBackgroundImage('right') }></Box>
          </Box>
        </Box>
        <Box className='You-May-Also-Like'>
          <Typography variant='h5'>You may also like</Typography>
          <ProductNavigation />
        </Box>
      </Box> }
    </Box>
  )
}
