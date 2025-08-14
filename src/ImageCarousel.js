import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Create this file for basic styles

const ImageCarousel = ({ images, selectedImage }) => {
  const initialIndex = Math.max(0, images.findIndex(img => img === selectedImage));
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Update index if selectedImage prop changes
    const newIndex = images.findIndex(img => img === selectedImage);
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  }, [selectedImage, images]);

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToPrev}>&lt;</button>

      <div className="carousel-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      <button className="carousel-button right" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default ImageCarousel;