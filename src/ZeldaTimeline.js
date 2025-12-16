import React from 'react';
import TimelineGame from './TimelineGame';
import totkImage from './assets/images/zelda/totk.jpg';
import botwImage from './assets/images/zelda/botw.jpg';
import totkLogo from  './assets/images/zelda/ocarina-logo.png';
import botwLogo from './assets/images/zelda/botw-logo.png';
import ImageCarousel from './ImageCarousel';

const totk = new TimelineGame(
    totkLogo,
    'The Legend of Zelda: Tears of the Kingdom',
    2023,
    null,
    totkImage,
    
);

const botw = new TimelineGame(
    botwLogo,
    'The Legend of Zelda: Breath of the Wild',
    2023,
    null,
    botwImage,
    
);

const ZeldaTimeline = ({ selectedGame }) => {
    const games = [
        totk,
        botw
    ]
    
    return <ImageCarousel selectedGame={selectedGame} games={games} />;
};

export default ZeldaTimeline;