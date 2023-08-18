import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Games from './Games';
import Music from './Music';
<<<<<<< HEAD
import MarioTimeline from './MarioTimeline'
import FinalFantasyTimeline from './FinalFantasyTimeline';
=======
>>>>>>> origin/master

export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="music" element={<Music />} />
<<<<<<< HEAD
        <Route path="mario_timeline" element={<MarioTimeline />} />
        <Route path="finalfantasy_timeline" element={<FinalFantasyTimeline />} />
=======
>>>>>>> origin/master
      </Routes>
    </div>
  );
}