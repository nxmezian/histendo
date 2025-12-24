import React, { useState, useEffect, useRef } from 'react';
import TimelineGame from './TimelineGame';
import ImageCarousel from './ImageCarousel';

import totkImage from './assets/images/zelda/totk.jpg';
import botwImage from './assets/images/zelda/botw.jpg';
import totkLogo from  './assets/images/zelda/ocarina-logo.png';
import botwLogo from './assets/images/zelda/botw-logo.png';


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

const ZeldaTimeline = () => {
    const [selectedGame, setSelectedGame] = useState(totk);
    const games = [
        totk,
        botw
    ]
      const carouselRef = useRef(null);

useEffect(() => {
  const el = document.querySelector('.carousel-container');
  if (el) {
    const offset = 0; // pixels from top
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}, [selectedGame]);

  return (
    <>
      <div className="timeline" style={{backgroundImage: `url(${botwLogo})`}}>
        <nav>
          <button onClick={() => setSelectedGame(totk)}>TOTK</button>
          <button onClick={() => setSelectedGame(botw)}>BOTW</button>
        </nav>
      </div>

      <ImageCarousel selectedGame={selectedGame} games={games} />
    </>
  );
};


export default ZeldaTimeline;