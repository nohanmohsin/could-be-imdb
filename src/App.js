/*PLEASE NOTE: you will see alot of eslint disable comments in the code...
dont worry about them they are just disabling the warning system check for the next line for vscode */



import React from 'react';
//import { createContext, useEffect, useState } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchPage from './components/SearchPage/SearchPage';
import Details from './components/Details/Details';
function App() {
 
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/home">
            <Main></Main>
          </Route>
          <Route path={`/q=:query/f=:filter`}>
            <SearchPage />
          </Route>
          <Route path={`/mt=:media_type/id=:id`}>
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
