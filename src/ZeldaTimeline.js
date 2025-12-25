import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; 
import TimelineGame from './TimelineGame';
import ImageCarousel from './ImageCarousel';

import zeldaTimeline from './assets/images/zelda/zelda-timeline.jpg';
import totkImage from './assets/images/zelda/totk.jpg';
import botwImage from './assets/images/zelda/botw.jpg';
import totkLogo from  './assets/images/zelda/totk-logo.png';
import botwLogo from './assets/images/zelda/botw-logo2.png';


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
    const [selectedGame, setSelectedGame] = useState();
    const games = [
        totk,
        botw
    ]

    useEffect(() => {
    if (!selectedGame) return;

    const el = document.querySelector('.carousel-container');
    if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
    }, [selectedGame]);

  return (
    <>
      <div className="timeline" style={{backgroundImage: `url(${zeldaTimeline})`}}>
        <div className="logo-container">
        <nav>
          <button onClick={() => setSelectedGame(totk)}><img src={totkLogo} alt="TOTK logo"/><p>2023</p></button>
          <button onClick={() => setSelectedGame(botw)}><img src={botwLogo} alt="BOTW logo"/><p>2017</p></button>
        </nav>
        </div>
      </div>

      <ImageCarousel selectedGame={selectedGame} games={games} />
    </>
  );
};


export default ZeldaTimeline;