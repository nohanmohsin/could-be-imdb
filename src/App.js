import React from 'react';
//import { createContext, useEffect, useState } from 'react';
import './App.css';
import TrendingMovie from './components/trending/TrendingMovie';
import logo from './imdb logo.png';

function App() {
  
  
  
  
  //goes to search page...idk
  const search = () => {

  }  
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="could-be-imdb logo" className="logo" />

        <div className="menu doesnt-work"></div>

        <form onClick={search}>
          <input type="text" placeholder="Search Could be IMDb" />
          <img src="" alt="" className="search-icon" />
        </form>

        <div className="watchlist doesnt-work">Watchlist</div>
        <div className="sign-in doesnt-work">Sign In</div>
      </header>

      <main>
        <TrendingMovie />
      </main>
    </div>
  );
}

export default App;
