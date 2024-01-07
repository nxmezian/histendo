import React from 'react';
import totkImage from './assets/images/zelda/totk.jpg';
import botwImage from './assets/images/zelda/botw.jpg';
import ImageCarousel from './ImageCarousel';

const ZeldaTimeline = ({ selectedImage }) => {
    const images = [
        totkImage,
        botwImage
    ]
    
    return <ImageCarousel selectedImages={selectedImage} images={images} />;
};

export default ZeldaTimeline;