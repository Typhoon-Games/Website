import React, { useState, useEffect } from 'react';
import './FeaturedSection.css';

const games = [
  {
    title: 'Game 1',
    description: 'Description for Game 1',
    image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF/?text=Game+1',
  },
  {
    title: 'Game 2',
    description: 'Description for Game 2',
    image: 'https://via.placeholder.com/600x400/FFC300/FFFFFF/?text=Game+2',
  },
  {
    title: 'Game 3',
    description: 'Description for Game 3',
    image: 'https://via.placeholder.com/600x400/C70039/FFFFFF/?text=Game+3',
  },
];

function FeaturedSection() {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((currentGameIndex + 1) % games.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentGameIndex]);

  const currentGame = games[currentGameIndex];

  return (
    <section className="featured-section">
      <div
        className="featured-section-image"
        style={{ backgroundImage: `url(${currentGame.image})` }}
      >
        <div className="featured-section-content">
          <h2 className="featured-section-title">{currentGame.title}</h2>
          <p className="featured-section-description">
            {currentGame.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
