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
    scrollToTimeline();
  };

  const scrollToTimeline = () => {
    const timelineEl = document.querySelector(".timeline");
    if (timelineEl) {
      const top = timelineEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: 'smooth' })

    }
}

  useEffect(() => {
    const newIndex = games.findIndex(
      game => game.image === selectedGame?.image
    );
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  }, [selectedGame, games]);

const [showDescription, setShowDescription] = useState(0);

useEffect(() => {
  setShowDescription(false)
}, [currentIndex])

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToPrev}>
        ↑
      </button>

      <div
        className="carousel-image-wrapper"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {games.map((game, idx) => (
          <div key={game.id ?? idx} className="carousel-slide"> 
          <img
            src={game.image}
            alt={`Slide ${idx + 1}`}
            className="carousel-image"
          />
    <img className="logo" src={game.logo} alt={`${game.title} logo`}/>

    {idx === currentIndex && (
      <>
        <button
          className="description-button"
          onClick={() => setShowDescription(prev => !prev)}
        >
          {showDescription ? 'Hide Info' : 'Show Info'}
        </button>

        <div className={`description ${showDescription ? 'visible' : ''}`}>
          {game.description}
        </div>
      </>
    )}

        </div>
      ))}
      </div>

      <button className="carousel-button right" onClick={goToNext}>
        ↓
      </button>
    </div>
  );
};

export default ImageCarousel;
