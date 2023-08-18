import React from 'react';
import odysseyImage from './assets/images/odyssey.jpg';
import world3dImage from './assets/images/world3d.jpg';
import galaxy2Image from './assets/images/galaxy2.jpg';
import galaxyImage from './assets/images/galaxy.jpg';
import sunshineImage from './assets/images/sunshine.jpg';
import sixtyfouryImage from './assets/images/sixtyfour.jpg';
import worldImage from './assets/images/world.jpg';
import ImageCarousel from './ImageCarousel';

const MarioTimeline = ({ selectedImage }) => {
  const images = [
    odysseyImage,
    world3dImage,
    galaxy2Image,
    galaxyImage,
    sunshineImage,
    sixtyfouryImage,
    worldImage,
  ];

  return <ImageCarousel selectedImage={selectedImage} images={images} />;
};

export default MarioTimeline;
