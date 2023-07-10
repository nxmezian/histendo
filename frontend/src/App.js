import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Games from './Games';
import Music from './Music';

export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="music" element={<Music />} />
      </Routes>
    </div>
  );
}