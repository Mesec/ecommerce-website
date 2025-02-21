

import { useState } from "react";
import "./Gallery.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid } from '@mui/material';

const Gallery = ({ images }) => {
  const image1 = require(`../../assets/images/products${images[0]}`);

  const [selectedImage, setSelectedImage] = useState(image1);
  const [startIndex, setStartIndex] = useState(0);

  const thumbnailsToShow = 3;
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
    <Grid container spacing={{ xl: 5, lg: 10}} direction={{ xs: 'column-reverse', lg: 'row'}} className="gallery-container">
      <Grid xl={3} lg={2} xs={12} item className="thumbnails-container" justifyContent='center' alignItems='center'>
        <button disabled={ !canSlideUp } onClick={ slideUp } className="arrow-button">
            <KeyboardArrowUpIcon />
        </button>
        <div className="thumbnails">
          { images.slice(startIndex, startIndex + thumbnailsToShow).map((img, index) => {
            const test = require(`../../assets/images/products${img}`);

            return (
              <img
                key={ index }
                src={ test }
                alt={ `Thumbnail ${index}` }
                className={ `thumbnail ${selectedImage === test ? "selected" : ""}` }
                onClick={ () => handleThumbnailClick(test) }
              />
            )
          }) }
        </div>
          <button disabled={ !canSlideDown } onClick={ slideDown } className="arrow-button">
            <KeyboardArrowDownIcon />
          </button>
      </Grid>
      <Grid xl={9} lg={10} xs={12} item>
        <img src={ selectedImage } alt="Main" className="main-image" />
      </Grid>
    </Grid>
  );
};

export default Gallery;
