

// import { useState } from "react";
// import "./Gallery.css";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { Box  } from '@mui/material';
// import { useMediaQuery } from "@mui/material";

// const Gallery = ({ images }) => {
//   const mainImage = require(`../../assets/images/products${images[0]}`);
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   const [selectedImage, setSelectedImage] = useState(mainImage);
//   const [startIndex, setStartIndex] = useState(0);

//   const thumbnailsToShow = isSmallScreen ? 3 : 4;
//   const canSlideUp = startIndex > 0;
//   const canSlideDown = startIndex + thumbnailsToShow < images.length;

//   const handleThumbnailClick = (image) => {
//     setSelectedImage(image);
//   };

//   const slideUp = () => {
//     if (canSlideUp) setStartIndex(startIndex - 1);
//   };

//   const slideDown = () => {
//     if (canSlideDown) setStartIndex(startIndex + 1);
//   };

//   return (
//     <>
//         <Box className="gallery-container">
//           <Box className="thumbnails-container">
//             {/* <Button disabled={ !canSlideUp } onClick={ slideUp } className="arrow-button"> */}
//             <KeyboardArrowLeftIcon onClick={ slideUp } className="arrow-button" />
//             {/* </Button> */}
//             <Box className="thumbnails">
//               { images.slice(startIndex, startIndex + thumbnailsToShow).map((img, index) => {
//                 const thumbnail = require(`../../assets/images/products${img}`);

//                 return (
//                   <img
//                     key={ index }
//                     src={ thumbnail }
//                     alt={ `Thumbnail ${index}` }
//                     className={ `thumbnail ${selectedImage === thumbnail ? "selected" : ""}` }
//                     onClick={ () => handleThumbnailClick(thumbnail) }
//                   />
//                 )
//               }) }
//             </Box>
//             {/* <Button disabled={ !canSlideDown } onClick={ slideDown } className="arrow-button"> */}
//               <KeyboardArrowRightIcon disabled={ !canSlideDown } onClick={ slideDown } className="arrow-button" />
//             {/* </Button> */}
//           </Box>
//           <Box className='main-image-container'>
//             <img src={ selectedImage } alt="Main" className="main-image" />
//           </Box>
//         </Box>
//       </>
//   );
// };

// export default Gallery;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Gallery.css";

const Gallery = ({ images }) => {
  console.log('IMAGEs', images)
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
        slidesPerView={ 4 }
        freeMode={ true }
        watchSlidesProgress={ true }
        modules={ [Thumbs] }
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
