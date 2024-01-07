import React from 'react';
import { Link } from 'react-router-dom';

function mainNav() {
  return (
    <nav id="main-nav">
      <Link to="/">Home</Link>
      <Link to="/timelines">Timelines</Link>
      <Link to="/artwork">Artwork</Link>
      <Link to="/music">Start Screens</Link>
      <Link to="/music">Music</Link>
    </nav>
  );
}

export default mainNav;
