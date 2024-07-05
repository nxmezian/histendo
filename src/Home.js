import React from 'react';
import MainNav from './MainNav';
import HistendoLogo from './assets/images/histendo.png';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <MainNav />
        <h1>HEEEEY HOW YOU DOIN?</h1>
        <img src={HistendoLogo} id="histendo-logo" alt="Histendo Logo" />
      </div>
    </>
  );
}
