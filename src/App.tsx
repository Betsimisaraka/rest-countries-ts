import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalState from './components/GlobalState';

function App() {
  return (
    <GlobalState>
        <Header />
        <Home />
    </GlobalState>
  );
}

export default App;
