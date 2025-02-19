import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import './Categories.css';
import { Link } from 'react-router-dom';
import data from '../../db/products.json';

export default function Categories() {
  return (
    <>
      <Swiper
        loop={ true}
        navigation={ true }
        pagination={ { clickable: true } }
        modules={ [Navigation, Pagination] }
        spaceBetween={ 10 }
        slidesPerView={ 3 }
        breakpoints={ {
          1500: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        } }
        className="Categories-Swiper"
      >
        {
          data?.categories?.map(category => {
            const image = require(`../../assets/images/${category.src}`);
            return (
              <SwiperSlide key={ category.id } className='Category-Swiper-Slide'>
                <Box className="Category-Slide">
                  <Link to={ `/${ category.name }` } className="Slide-Image-Container">
                    <img src={ image } alt={ category.name } />
                  </Link>
                  <Link to={ `/${ category.name }` }>{ category.name }</Link>
                </Box>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}