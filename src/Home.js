import React from 'react';
import MainNav from './MainNav';
import HistendoLogo from './assets/images/histendo.png';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <MainNav />
        <img src={HistendoLogo} id="histendo-logo" alt="Histendo Logo" />
      </div>
    </>
  );
}
