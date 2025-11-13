import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);


  return (
    <div className="product-gallery">
      <Swiper
        spaceBetween={ 10 }
        navigation={ true }
        thumbs={ { swiper: thumbsSwiper } }
        modules={ [Navigation, Thumbs] }
        className="main-slider"
      >
        { images.map((image, index) => (
          <SwiperSlide key={ index }>
            <img
              src={ require(`../../assets/images/products${image}`) }
              alt='Test alt'
            />
          </SwiperSlide>
        )) }
      </Swiper>

      <Swiper
        onSwiper={ setThumbsSwiper }
        spaceBetween={ 10 }
        slidesPerView={ 3 }
        navigation={ true }
        freeMode={ true }
        watchSlidesProgress={ true }
        modules={ [Thumbs, Navigation] }
        className="thumbs-slider"
      >
        { images.map((image, index) => (
          <SwiperSlide key={ index }>
            <img
              src={ require(`../../assets/images/products${image}`) }
              alt={ `Thumbnail ${index}` }
            />
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  );
};

export default Gallery;
