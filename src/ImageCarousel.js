import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ selectedImage, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(
    images.findIndex((image) => image === selectedImage)
  );

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Carousel
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      selectedItem={selectedIndex}
    >
      {images.map((image, index) => (
        <div key={index}>
          {/* Use anchor tags to make the images clickable */}
          <a href="#/" onClick={() => handleImageClick(index)}>
            <img src={image} />
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
