import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; 

const ImageCarousel = ({ games = [], selectedGame }) => {
  const initialIndex = Math.max(
    0,
    games.findIndex(game => game.image === selectedGame?.image)
  );

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = () => {
    if (!games.length) return;
    setCurrentIndex((prev) => (prev + 1) % games.length);
  };

  const goToPrev = () => {
    if (!games.length) return;
    setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  useEffect(() => {
    const newIndex = games.findIndex(
      game => game.image === selectedGame?.image
    );
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  }, [selectedGame, games]);

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToPrev}>
        &lt;
      </button>

      <div
        className="carousel-image-wrapper"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {games.map((game, idx) => (
          <div key={game.id ?? idx}>
          <img
            src={game.image}
            alt={`Slide ${idx + 1}`}
            className="carousel-image"
          />
        </div>
        ))}
      </div>

      <button className="carousel-button right" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
