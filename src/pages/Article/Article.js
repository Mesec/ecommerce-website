import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system'
import './Article.css'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import Gallery from '../../components/Gallery/Gallery';
import QuantityInput from '../../components/QuantityInput/QuantityInput';
import { openSnackbar } from '../../features/snackbar/snackbarSlice';
import { addToCart } from '../../features/cart/cartSlice';
import { useSnackbar } from 'notistack';

export default function Article() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.products.data);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems?.filter(item => item?.id === product?.id);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addToCartHandler = () => {
    dispatch(addToCart({
      quantity,
      id: product?.id,
      title: product?.shortName,
      price: product?.price,
      image: product?.images?.gallery[0],
      inStock: product?.inStock
    }));
    enqueueSnackbar('The article has been added to your cart!', {
      variant: 'default',
      anchorOrigin: { vertical: "bottom", horizontal: "center" },
    });
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
    return <Box className='Article-Spinner'><CircularProgress /></Box>
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
    if (!cartItem?.length) {
      return product.inStock;
    }
  }

  return (
    <Box className='Article'>
      <Box className='Article-Top'>
        <Box className='Article-Gallery'>
          <Gallery images={ product.images.gallery } />
        </Box>
        <Box className='Article-Description'>
          <Box className='Article-Title'>
            { product.newProduct && <Typography className='New-Product-Flag' variant='h7'>NEW PRODUCT</Typography> }
            <Typography style={ { marginTop: `${product.newProduct ? '10px' : '0px'}` } } variant='h4'>{ product.title }</Typography>
            <Typography variant='body1'>{ product.generalInfo }</Typography>
          </Box>
          <Box className='Article-Controls'>
            <Box className='Article-Controls-Form'>
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
                className='Add-Article'
                variant='contained'>
                ADD TO CART
              </Button>
            </Box>
            { getAvailableProductStock() === 0 ?
              <Typography variant='p' className='Available-Quantity'>
                Out of stock. We'll restock soon.
              </Typography>
              :
              <Typography variant='p' className='Available-Quantity'>
                Available stock quantity: <span>{ getAvailableProductStock() }</span>
              </Typography>
            }
          </Box>
        </Box>

      </Box>
      <Box className='Article-Info'>
        <Box className='Article-Features'>
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
    </Box>
  )
}
