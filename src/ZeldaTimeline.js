import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import TimelineGame from './TimelineGame';
import ImageCarousel from './ImageCarousel';

import zeldaTimeline from './assets/images/zelda/zelda-timeline.jpg';
import totkImage from './assets/images/zelda/totk.jpg';
import botwImage from './assets/images/zelda/botw.jpg';
import skywardImage from './assets/images/zelda/skyward.jpg';
import totkLogo from './assets/images/zelda/totk-logo.png';
import botwLogo from './assets/images/zelda/botw-logo2.png';
import skywardLogo from './assets/images/zelda/skyward-logo.png';

const games = [
  new TimelineGame(totkLogo, 'Tears of the Kingdom', 'Explore Hyrule in TOTK...', null, totkImage),
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
          {games.map((game, idx) => (
            <button key={idx} onClick={() => setActiveIndex(idx + 1)}>
              <img src={game.logo} alt={`${game.title} logo`} />
              <p>{idx === 0 ? '2023' : idx === 1 ? '2017' : '2013'}</p>
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
