import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Headphones from '../../assets/images/headphones.png';
import Speakers from '../../assets/images/speakers.png';
import Earphones from '../../assets/images/earphones.png';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import './Categories.css';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Categories() {
  return (
    <>
      <Swiper
        navigation={ true }
        pagination={ { clickable: true } }
        modules={ [Navigation, Pagination] }
        spaceBetween={ 10 }
        slidesPerView={ 3 }
        breakpoints={ {
          1200: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        } }
        className="mySwiper"
      >
        <SwiperSlide>
          <Box className="slide">
            <Box className="SlideImageContainer">
              <img src={ Headphones } alt="Slide 2" />
            </Box>
            <Typography variant='h6'>Headphones</Typography>
            <Link to='/headphones' className='Product-Item-Link'>
              <Button variant="text">
                Shop
                <KeyboardArrowRightIcon />
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="slide">
            <Box className="SlideImageContainer">
              <img src={ Speakers } alt="Slide 2" />
            </Box>
            <Typography variant='h6'>Speakers</Typography>
            <Link to='/speakers' className='Product-Item-Link'>
              <Button variant="text">
                Shop
                <KeyboardArrowRightIcon />
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="slide">
            <Box className="SlideImageContainer">
              <img src={ Earphones } alt="Slide 2" />
            </Box>
            <Typography variant='h6'>Earphones</Typography>
            <Link to='/earphones' className='Product-Item-Link'>
              <Button variant="text">
                Shop
                <KeyboardArrowRightIcon />
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}