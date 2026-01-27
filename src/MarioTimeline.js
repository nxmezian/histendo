import React from 'react';
import { useTimelineNavigation } from './useTimelineNavigation.js'

import odysseyImage from './assets/images/mario/odyssey.jpg';
import odysseyLogo from './assets/images/mario/odyssey-logo.jpg'
import world3dImage from './assets/images/mario/world3d.jpg';
import world3dLogo from './assets/images/mario/world3d-logo.jpg'
import galaxy2Image from './assets/images/mario/galaxy2.jpg';
import galaxyImage from './assets/images/mario/galaxy.jpg';
import galaxyLogo from './assets/images/mario/galaxy-logo.jpg';
import sunshineImage from './assets/images/mario/sunshine.jpg';
import sixtyfouryImage from './assets/images/mario/sixtyfour.jpg';
import worldImage from './assets/images/mario/world.jpg';
import ImageCarousel from './ImageCarousel';
import TimelineGame from './TimelineGame';

let description = "";

const games = [
  new TimelineGame(odysseyLogo, "Super Mario Odyssey", description, "2018", odysseyImage),
  new TimelineGame(world3dLogo, "Super Mario World 3D", description, "2013", world3dImage),
  new TimelineGame(galaxyLogo, "Super Mario Galaxy", description, "2009", galaxyImage)
];

const MarioTimeline = () => {
  const {
    activeIndex,
    setActiveIndex,
    navVisible,
    showNav
  } = useTimelineNavigation();


return (
      <>
      {activeIndex > 0 && (
        <div className={`timeline-nav ${navVisible ? 'visible' : ''}`}>
          <button onClick={() => setActiveIndex(0)}>TOP</button>
          {/* mario buttons here */}
        </div>
      )}

      <ImageCarousel
        items={slides}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </>
);
}
export default MarioTimeline;
