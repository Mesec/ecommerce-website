

import { useState } from "react";
import "./Gallery.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Grid } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Gallery = ({ images }) => {
  const mainImage = require(`../../assets/images/products${images[0]}`);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [startIndex, setStartIndex] = useState(0);

  const thumbnailsToShow = isSmallScreen ? 3 : 4;
  const canSlideUp = startIndex > 0;
  const canSlideDown = startIndex + thumbnailsToShow < images.length;

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const slideUp = () => {
    if (canSlideUp) setStartIndex(startIndex - 1);
  };

  const slideDown = () => {
    if (canSlideDown) setStartIndex(startIndex + 1);
  };

  return (
    <>
    { isSmallScreen ?
        <Swiper
          loop={ true }
          navigation={ true }
          pagination={ { clickable: true } }
          modules={ [Navigation, Pagination] }
          spaceBetween={ 10 }
          slidesPerView={ 1 }
          className="Gallery-Swiper"
        >
          {
            images?.map(item => {
              console.log(item)
              const src = require(`../../assets/images/products${item}`);
              return (
                <SwiperSlide key={ src } className='Gallery-Swiper-Slide'>
                  <Box className="Gallery-Slide">
                    <img src={ src } alt='Article' />
                  </Box>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        :
        <Grid container className="gallery-container">
          <Grid item xs={ 12 } md={ 3 } className="thumbnails-container">
            <button disabled={ !canSlideUp } onClick={ slideUp } className="arrow-button">
              {/* <KeyboardArrowUpIcon /> */ }
              { isSmallScreen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowUpIcon /> }
            </button>
            <Box className="thumbnails">
              { images.slice(startIndex, startIndex + thumbnailsToShow).map((img, index) => {
                const thumbnail = require(`../../assets/images/products${img}`);

                return (
                  <img
                    key={ index }
                    src={ thumbnail }
                    alt={ `Thumbnail ${index}` }
                    className={ `thumbnail ${selectedImage === thumbnail ? "selected" : ""}` }
                    onClick={ () => handleThumbnailClick(thumbnail) }
                  />
                )
              }) }
            </Box>
            <button disabled={ !canSlideDown } onClick={ slideDown } className="arrow-button">
              { isSmallScreen ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon /> }
            </button>
          </Grid>
          <Grid item xs={ 12 } md={ 9 } className='main-image-container'>
            <img src={ selectedImage } alt="Main" className="main-image" />
          </Grid>
        </Grid>
  }
      </>
  );
};

export default Gallery;
