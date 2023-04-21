import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameFrame from './GameFrame';
import games from './Games';
import Home from './Home';
import Proxy from './Proxy';
import TOSPP from './TOSPP';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proxy" element={<Proxy />} />
        <Route path="/tosandprivacy" element={<TOSPP />} />
        {games.map((game) => (
          <Route
            key={game.path2}
            path={game.path2}
            element={<GameFrame path1={game.path1} path2={game.title} description={game.description} />}
          />
        ))}
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
