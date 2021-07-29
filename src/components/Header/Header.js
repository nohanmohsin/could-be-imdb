import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import  logo  from "./imdb logo.png";
const Header = () => {
  //the query parameter set by the input filed
  const [query, setQuery] = useState('');
  //the filter paramter set by the select element
  const [filter, setFilter] = useState('multi');
  const submitBtnRef = useRef(null);
  return (
    <header className="App-header">
      <img src={logo} alt="could-be-imdb logo" className="logo" />

      <div className="menu doesnt-work"></div>

      <form id="search-form">
        <div className="select">
          <select onChange={e => setFilter(e.target.value)} className="filter-search">
            <option value="multi">All</option>
            <option value="Movies">TItles</option>
            <option value="tv">TV Episodes</option>
            <option value="person">Celebs</option>
            <option value="company">Companies</option>
            <option value="keywords">keywords</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search Could be IMDb"
          id="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link to={`/q=${query}/f=${filter}`} ref={submitBtnRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="search-btn"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              id="magnifying-glass"
            ></path>
          </svg>
        </Link>
      </form>

      <div className="watchlist doesnt-work">Watchlist</div>
      <div className="sign-in doesnt-work">Sign In</div>
    </header>
  );
};

export default Header;