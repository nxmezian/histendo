import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Timelines from './Timelines';
import Music from './Music';
import MarioTimeline from './MarioTimeline'
import FinalFantasyTimeline from './FinalFantasyTimeline'; 
import ZeldaTimeline from './ZeldaTimeline';

export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Timelines" element={<Timelines />} />
        <Route path="music" element={<Music />} />
        <Route path="mario_timeline" element={<MarioTimeline />} />
        <Route path="finalfantasy_timeline" element={<FinalFantasyTimeline />} />
        <Route path="zelda_timeline" element={<ZeldaTimeline />} />
      </Routes>
    </div>
  );
}