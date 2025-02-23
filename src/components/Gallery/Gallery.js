

import { useState } from "react";
import "./Gallery.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box  } from '@mui/material';
import { useMediaQuery } from "@mui/material";

const Gallery = ({ images }) => {
  const mainImage = require(`../../assets/images/products${images[0]}`);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

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
        <Box className="gallery-container">
          <Box className="thumbnails-container">
            {/* <Button disabled={ !canSlideUp } onClick={ slideUp } className="arrow-button"> */}
            <KeyboardArrowLeftIcon onClick={ slideUp } className="arrow-button" />
            {/* </Button> */}
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
            {/* <Button disabled={ !canSlideDown } onClick={ slideDown } className="arrow-button"> */}
              <KeyboardArrowRightIcon disabled={ !canSlideDown } onClick={ slideDown } className="arrow-button" />
            {/* </Button> */}
          </Box>
          <Box className='main-image-container'>
            <img src={ selectedImage } alt="Main" className="main-image" />
          </Box>
        </Box>
  {/* } */}
      </>
  );
};

export default Gallery;
