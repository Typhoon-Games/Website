import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './GameFrame.css';

function GameFrame(props) {
  const handleFullscreenClick = () => {
    const iframe = document.querySelector('.game-frame');
    iframe.requestFullscreen();
  };

  return (
    <div className="app-container">
      <Header />
      <div className="game-frame-container">
        <iframe src={props.path1} className="game-frame" title={props.path2} />
        <div className="game-info">
          <h2 className="game-title">{props.path2}</h2>
          <p className="game-description">{props.description}</p>
          <button className="fullscreen-button" onClick={handleFullscreenClick}>
            Fullscreen
           <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 20 20" width="512" height="512">
            	<g id="Layer">
            		<path id="Layer" class="s0" d="m1 1v6h2v-4h4v-2zm2 12h-2v6h6v-2h-4zm14 4h-4v2h6v-6h-2zm0-16h-4v2h4v4h2v-6z"/>
            	</g>
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GameFrame;