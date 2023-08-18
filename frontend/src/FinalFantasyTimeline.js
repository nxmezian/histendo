import React from 'react';
import ff6Image from './assets/images/ff6.jpg';
import ff5Image from './assets/images/ff6.jpg';
import ff4Image from './assets/images/ff4.jpg';
import ff3Image from './assets/images/ff3.jpg';
import ff2Image from './assets/images/ff2.jpg';
import ff1Image from './assets/images/ff1.jpg';
import ImageCarousel from './ImageCarousel';

const FinalFantasyTimeline = ({ selectedImage }) => {
  const images = [
    ff6Image,
    ff5Image,
    ff4Image,
    ff3Image,
    ff2Image,
    ff1Image,
  ];

  return <ImageCarousel selectedImage={selectedImage} images={images} />;
};

export default FinalFantasyTimeline;
