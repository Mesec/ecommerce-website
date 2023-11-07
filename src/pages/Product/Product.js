import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { products } from '../../data';
import { Button } from '@mui/base';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import './Product.css'
import ProductItem from '../../components/ProductItem/ProductItem';
import CircularProgress from '@mui/material/CircularProgress';
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation';
import { addToCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Product() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  const products = useSelector((state) => state.products.data)
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

  const setAmountHandler = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value)
  }

  const addToCartHandler = () => {
    dispatch(addToCart({ quantity, id: product?.id }));
    setQuantity(1)
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

  return (
    <Box marginTop={ location.pathname.length > 8 &&  '79px'}>
      { product &&
      <Box className='Product-Container'>
        <ProductItem { ...product }>
          <Box className='Product-Controls'>
            <TextField
              onChange={ setAmountHandler }
              variant="outlined"
              type="number"
              value={ quantity }
              InputProps={ {
                inputProps: { min: 1 },
              } }
            />
            <Button onClick={ addToCartHandler } className='See-Product' variant='contained'>ADD TO CART</Button>
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
