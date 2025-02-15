import React from 'react';
import odysseyImage from './assets/images/mario/odyssey.jpg';
import world3dImage from './assets/images/mario/world3d.jpg';
import galaxy2Image from './assets/images/mario/galaxy2.jpg';
import galaxyImage from './assets/images/mario/galaxy.jpg';
import sunshineImage from './assets/images/mario/sunshine.jpg';
import sixtyfouryImage from './assets/images/mario/sixtyfour.jpg';
import worldImage from './assets/images/mario/world.jpg';
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
