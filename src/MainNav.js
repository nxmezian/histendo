import React from 'react';
import { Link } from 'react-router-dom';

function mainNav() {
  return (
    <nav id="main-nav">
      <Link to="/">Home</Link>
      <Link to="/timelines">Timelines</Link>
      <Link to="/under_construction">Artwork</Link>
      <Link to="/under_construction">Start Screens</Link>
      <Link to="/under_construction">Music</Link>
    </nav>
  );
}

export default mainNav;
