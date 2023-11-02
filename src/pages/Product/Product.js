import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { products } from '../../data';
import { Button } from '@mui/base';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import './Product.css'
import ProductItem from '../../components/ProductItem/ProductItem';
import CircularProgress from '@mui/material/CircularProgress';
import Image1 from '../../assets/test/gallery1.png'
import Image2 from '../../assets/test/gallery2.png'
import Image3 from '../../assets/test/gallery3.png'
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation';
import { addToCart } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

export default function Product() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      const getProduct = products.filter(item => item.id === id);
      setProduct(getProduct);
      setLoading(false)
    }, 1200)
  }, [id]);

  const setAmountHandler = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value)
  }

  const addToCartHandler = () => {
    dispatch(addToCart({ quantity, id: product[0].id }));
    setQuantity(1)
  }

  if (loading) {
    return <Box className='Product-Spinner'><CircularProgress/></Box>
  }

  return (
    <Box marginTop={ location.pathname.length > 8 &&  '79px'}>
      <Box className='Product-Container'>
        <ProductItem { ...product[0] }>
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
            { product[0]?.features?.map((item, index) => {
              return <Typography variant='body1' key={ index }>
                { item }
              </Typography>
            }) }
          </Box>
          <Box className='In-Box'>
            <Typography variant='h4'>
              IN THE BOX
            </Typography>
            { product[0].inBox.map((item, index) => {
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
          <Box className='Product-Gallery-Left-Column'>
            <Box>
              <img src={ Image1 } alt="" />
            </Box>
           <Box>
              <img src={ Image2 } alt="" />
           </Box>
          </Box>
          <Box className='Product-Gallery-Right-Column'>
            <img src={ Image3 } alt="" />
          </Box>
        </Box>
        <ProductNavigation />
      </Box>
    </Box>
  )
}
