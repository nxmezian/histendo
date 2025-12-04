import React from 'react';
import MainNav from './MainNav';
import HistendoLogo from './assets/images/histendo.png';

export default function Home() {
  return (
    <>
      <div className="fullscreen-section home-1 screen">
        <MainNav />
        <img src={HistendoLogo} id="histendo-logo" alt="Histendo Logo" loading="lazy"/>
        <h1>We'll take you back in time and show you unforgettable games from past</h1>
      </div>

      <div className="fullscreen-section home-2 screen">
      <h1>through timelines</h1>
      </div>

      <div className="fullscreen-section home-3 screen">
      <h1>amazing artwork</h1>
      </div>

            <div className="fullscreen-section home-4 screen">
      <h1>and classic start screens!</h1>
      </div>
    </>
  );
}
