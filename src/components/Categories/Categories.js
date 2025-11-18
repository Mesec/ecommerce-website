import React from 'react';
import { Box, Typography } from '@mui/material';
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
    <div className='Categories-Container'>
      <Typography className='Categories-Title' variant='h6'>Popular products:</Typography>
      <Swiper
        // loop={ true}
        pagination={ {
          type: 'progressbar',
        } }
        modules={ [Pagination] }
        spaceBetween={ 10 }
        slidesPerView={ 3 }
        breakpoints={ {
          1500: {
            slidesPerView: 5,
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
        { data.products.map(item => {
          const image = require(`../../assets/images/products${item.images.main}`);
          return (
            <SwiperSlide key={ item.id } className='Category-Swiper-Slide'>
              <Box className="Category-Slide">
                <Link to={ `/article/${item.id}` } className="Slide-Image-Container">
                  <img src={ image } alt={ item.title } />
                </Link>
                <Typography variant='p'>{ item.title }</Typography>
              </Box>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}