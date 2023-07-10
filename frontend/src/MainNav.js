import React from 'react';
import { Link } from 'react-router-dom';

function mainNav() {
  return (
    <nav id="main-nav">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/music">Music</Link>
      <a href="http://127.0.0.1:5000/blog">Blog</a>
      <Link to="/games">Forum</Link>
    </nav>
  );
}

export default mainNav;
