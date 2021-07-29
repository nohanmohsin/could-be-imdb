import React from 'react';
//import { createContext, useEffect, useState } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchPage from './components/SearchPage/SearchPage';
function App() {
 
  return (
    <Router>
      <div className="App">
        
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path='/home'>
            <Main></Main>
          </Route>
          <Route path={`/q=:query/f=:filter`}>
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
