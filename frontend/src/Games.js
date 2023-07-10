import React from 'react';
import HistoryIndex from './HistoryIndex';
import MainNav from './MainNav';
import './style.css';

const Games = () => {
  return (
          // Games = History + Start Screens + Consoles + Specials + ?   // 
    <div className="games-container"> 
      <MainNav />
      <HistoryIndex />
    </div>
    
  );
};

export default Games;
