import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import TimelineGame from './TimelineGame';
import ImageCarousel from './ImageCarousel';

import mainLogo from './assets/images/zelda/main-logo.png';
import zeldaTimeline from './assets/images/zelda/zelda-timeline.jpg';
import totkImage from './assets/images/zelda/totk.jpg';
import botwImage from './assets/images/zelda/botw.jpg';
import skywardImage from './assets/images/zelda/skyward.jpg';
import totkLogo from './assets/images/zelda/totk-logo.png';
import botwLogo from './assets/images/zelda/botw-logo2.png';
import skywardLogo from './assets/images/zelda/skyward-logo.png';

const totkDescription = "The Legend of Zelda: Tears of the Kingdom is an unfathomable follow-up to one of the greatest games ever made, somehow improving upon it in nearly every way – be that with simple quality-of-life improvements, a genuinely exciting story, or wildly creative new building mechanics that make you rethink what is possible. It both revamps old ground and introduces vast new areas so immense it somehow makes me wonder if Breath of the Wild was actually all that big, with an almost alarming number of tasks to complete, mysteries to discover, and delightful distractions to keep you from ever reaching that place you naively thought you were headed. Nintendo has followed up a triumph with a triumph, expanding and evolving a world that already felt full beyond expectation and raising the bar ever higher into the clouds. ";

const games = [
  new TimelineGame(totkLogo, 'Tears of the Kingdom', totkDescription, null, totkImage),
  new TimelineGame(botwLogo, 'Breath of the Wild', 'Explore Hyrule in BOTW...', null, botwImage),
  new TimelineGame(skywardLogo, 'Skyward Sword', 'Skyward Sword description...', null, skywardImage)
];

const timelineSlide = {
  image: zeldaTimeline,
  logo: null,
  description: null
};

const ZeldaTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navVisible, setNavVisible] = useState(true); 

  const slides = [timelineSlide, ...games];

  useEffect(() => {
    const timeout = setTimeout(() => setNavVisible(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {activeIndex > 0 && (
        <div className={`timeline-nav ${navVisible ? 'visible' : ''}`}>
          <button onClick={() => setActiveIndex(0)}>TOP</button>
          {games.map((game, idx) => (
            <button key={idx} onClick={() => setActiveIndex(idx + 1)}>
              <img src={game.logo} alt={`${game.title} logo`} />
            </button>
          ))}
        </div>
      )}

      <ImageCarousel
        items={slides}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
      />
      {activeIndex === 0 && (
        <div className="timeline-centered-logos">
          {games.map((game, idx) => (
            <img
              key={idx}
              src={game.logo}
              alt={`${game.title} logo`}
              onClick={() => setActiveIndex(idx + 1)}
              className="centered-logo"
            />
          ))}
        </div>
      )}
    </>
    
  );
};

export default ZeldaTimeline;
