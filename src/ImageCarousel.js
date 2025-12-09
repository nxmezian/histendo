import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; 

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
    const newIndex = images.findIndex(img => img === selectedImage);
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  }, [selectedImage, images]);

  return (
    <div className="carousel-container">

      <button className="carousel-button left" onClick={goToPrev}>&lt;</button>
      
        <div
          className="carousel-image-wrapper"
          style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      
        <button className="carousel-button right" onClick={goToNext}>&gt;</button>
    
    </div>
  );
};

export default ImageCarousel;