import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalState from './components/GlobalState';
import { Route, Switch } from 'react-router';
import Details from './components/Details';

function App() {
  return (
    <GlobalState>
        <Header />
          <Switch>
              <Route path="/details/:name">
                  <Details />
              </Route>
             <Route path="/">
                <Home />
             </Route>
          </Switch>
    </GlobalState>
  );
}

export default App;
