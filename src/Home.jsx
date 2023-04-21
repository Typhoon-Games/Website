import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Obfuscated, isMobile } from './Consts';
import Games from './Games'; 

function Home() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredGames = Games.filter(game => game.classes && game.classes.includes("featured"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFeaturedIndex((featuredIndex + 1) % featuredGames.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [featuredIndex]);

  return (
    <div className="app-container">
      <Header />
      <div className="featured-section">
        <a href={featuredGames[featuredIndex].path2} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
          <div
            className="featured-game"
            style={{
              backgroundImage: `url(${featuredGames[featuredIndex].image})`,
              transition: 'background-image 0.5s',
            }}
          >
            <div className="featured-game-background"></div>
            <div className="featured-game-content">
              <h2 className="featured-game-title"><Obfuscated>{featuredGames[featuredIndex].title}</Obfuscated></h2>
              <p className="featured-game-description"><Obfuscated>{featuredGames[featuredIndex].description}</Obfuscated></p>
            </div>
          </div>
        </a>
      </div>
      <div className="recently-added-wrapper">
        <h2 className="all-games-title">Popular</h2>
        <main className="main">
          {Games
            .filter(game => game.classes && game.classes.includes("popular"))
            .filter(game => game.platform === "both" || !isMobile) // Filter games based on platform value
            .map((game, index) => (
              <a href={game.path2} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" key={index}>
                <div className="card">
                  <img src={game.image} className="card-image"/>
                  <h2 className="card-title"><Obfuscated>{game.title}</Obfuscated></h2>
                  <p className="card-description"><Obfuscated>{game.description}</Obfuscated></p>
                </div>
              </a>
            ))}
        </main>
      </div>   
      <div className="recently-added-wrapper">
        <h2 className="all-games-title">Recently Added</h2>
        <main className="main">
          {Games.slice(-4).reverse().map((game, index) => (
            (isMobile && game.platform && game.platform === "both") || !isMobile ? (
              <a href={game.path2} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" key={index}>
                <div className="card">
                  <img src={game.image} className="card-image" />
                  <h2 className="card-title"><Obfuscated>{game.title}</Obfuscated></h2>
                  <p className="card-description"><Obfuscated>{game.description}</Obfuscated></p>
                </div>
              </a>
            ) : null
          ))}
        </main>
      </div>   
      <div className="main-wrapper">
  <h2 className="all-games-title">All Games</h2>
  <main className="main">
    {Games.map((game, index) => (
      (isMobile && game.platform && game.platform === "both") || !isMobile ? (
        <a href={game.path2} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" key={index}>
          <div className="card">
            <img src={game.image} className="card-image" />
            <h2 className="card-title"><Obfuscated>{game.title}</Obfuscated></h2>
            <p className="card-description"><Obfuscated>{game.description}</Obfuscated></p>
          </div>
        </a>
      ) : null
    ))}
  </main>
</div>

      <Footer />
    </div>
  );
}

export default Home;
