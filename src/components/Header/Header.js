import React from 'react';
import { logo } from "./imdb logo.png";
const Header = () => {
    return (
        <header className="App-header">
        <img src={logo} alt="could-be-imdb logo" className="logo" />

        <div className="menu doesnt-work"></div>

        <form>
          <input type="text" placeholder="Search Could be IMDb" />
          <img src="" alt="" className="search-icon" />
        </form>

        <div className="watchlist doesnt-work">Watchlist</div>
        <div className="sign-in doesnt-work">Sign In</div>
      </header>
    );
};

export default Header;