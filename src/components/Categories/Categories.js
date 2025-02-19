import React from 'react';
import { Box } from '@mui/material';
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
        className="Categories-Swiper"
      >
        <SwiperSlide className='Category-Swiper-Slide'>
          <Box className="Category-Slide">
            <Link to='/headphones' className="Slide-Image-Container">
              <img src={ Headphones } alt="Slide 2" />
            </Link>
            <Link to='/headphones'>Headphones</Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide className='Category-Swiper-Slide'>
          <Box className="Category-Slide">
            <Link to='/speakers' className="Slide-Image-Container">
              <img src={ Speakers } alt="Slide 2" />
            </Link>
            <Link to='/speakers'>Speakers</Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide className='Category-Swiper-Slide'>
          <Box className="Category-Slide">
            <Link to='/earphones' className="Slide-Image-Container">
              <img src={ Earphones } alt="Slide 2" />
            </Link>
            <Link to='earphones'>Earphones</Link>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}