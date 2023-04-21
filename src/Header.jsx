import React, { useState, useRef } from 'react';
import Games from './Games';
import { isMobile } from './Consts';
import './Header.css';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const inputRef = useRef(null);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    // Only show suggestions if the input is not blank
    if (value !== '') {
      // Filter games based on input value
      const filteredGames = Games.filter((game) => {
        return game.title.toLowerCase().includes(value.toLowerCase());
      });

      // If it's mobile, filter games based on platform "both"
      const filteredGamesForMobile = isMobile
        ? filteredGames.filter((game) => game.platform === 'both')
        : filteredGames;

      // Sort the filtered games alphabetically by title
      const sortedGames = filteredGamesForMobile.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });

      // Show suggestions if there are any matches
      if (sortedGames.length > 0) {
        setShowSuggestions(true);
        setSuggestions(sortedGames.slice(0, 5));
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
  };
  

  const handleSuggestionClick = (game) => {
    setSearchValue('');
    setShowSuggestions(false);
    window.location.href = game.path2;
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleInputClick = () => {
    if (searchValue === '') {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  return (
    <header className="header">
      <a href="/">
        <img className="header-logo" src="/small.svg"></img>
        <h1 className="header-title" style={{ marginLeft: '8px', marginTop: '6px', marginRight: '40px' }}>Typhoon</h1>
      </a>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for games..."
          className={`search-input ${searchValue !== '' ? 'filled' : ''}`}
          value={searchValue}
          onChange={handleSearchChange}
          onBlur={handleInputBlur}
          onClick={handleInputClick}
          ref={inputRef}
        />      
        {showSuggestions && (
          <div className="suggestions" ref={inputRef}>
            {suggestions.map((game) => (
              <div
                key={game.id}
                className="suggestion"
                onClick={() => handleSuggestionClick(game)}
              >
                {game.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="buttons-container">
        <a href="/">
          {/* <button className="other-button">Home</button> */}
        </a>
      </div>
    </header>
  );
}

export default Header;
