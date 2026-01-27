import React from 'react';
import HistoryIndex from './TimelineIndex';
import MainNav from './MainNav';
import './style.css';

const Timelines = () => {
  return (
    <div className="games-container"> 
      <MainNav />
      <HistoryIndex />
    </div>
    
  );
};

export default Timelines;
