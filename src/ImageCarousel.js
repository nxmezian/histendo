import React, { useEffect, useRef } from 'react';
import './ImageCarousel.css';

/**
 * REUSABLE vertical scrollable carousel
 * - scroll-snap for natural scrolling
 * - up/down arrows for navigation
 * - updates activeIndex on user scroll
 * - programmatic scroll does not trigger activeIndex change
 */
const ImageCarousel = ({ items = [], activeIndex = 0, onIndexChange }) => {
  const containerRef = useRef();
  const isScrollingRef = useRef(false);

  // Programmatic scroll when activeIndex changes
  useEffect(() => {
    if (!containerRef.current) return;
    const child = containerRef.current.children[activeIndex];
    if (child) {
      isScrollingRef.current = true;
      child.scrollIntoView({ behavior: 'smooth' });
      const timeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 500); // match scroll duration
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  // Update activeIndex on user scroll
  const handleScroll = () => {
    if (isScrollingRef.current) return;
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const vh = window.innerHeight;
    const newIndex = Math.round(scrollTop / vh);
    if (newIndex !== activeIndex) onIndexChange(newIndex);
  };

  const goNext = () => {
    if (activeIndex < items.length - 1) onIndexChange(activeIndex + 1);
  };

  const goPrev = () => {
    if (activeIndex > 0) onIndexChange(activeIndex - 1);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goPrev}>↑</button>
      <div
        className="carousel-scroll-wrapper"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {items.map((item, idx) => (
          <div key={idx} className="carousel-slide">
            <img src={item.image} alt={item.title} className="carousel-image" />
            {item.logo && (
              <img src={item.logo} alt={`${item.title} logo`} className="logo" />
            )}
            {idx === activeIndex && item.description && (
              <div className="description">{item.description}</div>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={goNext}>↓</button>
    </div>
  );
};

export default ImageCarousel;
