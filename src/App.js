import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Timelines from './Timelines';
import Music from './Music';
import MarioTimeline from './MarioTimeline'
import FinalFantasyTimeline from './FinalFantasyTimeline'; 
import ZeldaTimeline from './ZeldaTimeline';
import UnderConstruction from './UnderConstruction';

export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="timelines" element={<Timelines />} />
        <Route path="music" element={<Music />} />

        <Route path="timelines/mario" element={<MarioTimeline />} />
        <Route path="timelines/finalfantasy" element={<FinalFantasyTimeline />} />
        <Route path="timelines/zelda" element={<ZeldaTimeline />} />

        <Route path="under_construction" element={<UnderConstruction />} />
      </Routes>
    </div>
  );
}