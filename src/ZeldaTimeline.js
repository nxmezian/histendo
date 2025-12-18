import React from 'react';
import TimelineGame from './TimelineGame';
import totkImage from './assets/images/zelda/totk.jpg';
import botwImage from './assets/images/zelda/botw.jpg';
import totkLogo from  './assets/images/zelda/ocarina-logo.png';
import botwLogo from './assets/images/zelda/botw-logo.png';
import ImageCarousel from './ImageCarousel';

let totkDescription = `Embark on a new adventure in "The Legend of Zelda: Tears of the Kingdom," the highly anticipated sequel to the critically acclaimed "Breath of the Wild." Explore a vast and dynamic world filled with new challenges, innovative gameplay mechanics, and an engaging storyline that continues the legacy of the beloved franchise. Uncover ancient secrets, harness new powers, and shape your destiny in this epic journey through Hyrule.`;
let botwDescription = `Step into a breathtaking open world in "The Legend of Zelda: Breath of the Wild," where adventure awaits at every turn. As Link, awaken from a century-long slumber to a land in peril, and embark on a quest to defeat Calamity Ganon and restore peace to Hyrule. With unparalleled freedom to explore, solve puzzles, and engage in dynamic combat, this game redefines the boundaries of the action-adventure genre. Experience the beauty and danger of Hyrule like never before.`;
const totk = new TimelineGame(
    totkLogo,
    'The Legend of Zelda: Tears of the Kingdom',
    totkDescription,
    null,
    totkImage,
    
);

const botw = new TimelineGame(
    botwLogo,
    'The Legend of Zelda: Breath of the Wild',
    botwDescription,
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