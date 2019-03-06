import React, { Component } from 'react';
import logo from './logo.svg';
import Gamers from './comonents/gamers/gamers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

         <Gamers/>

        </header>
      </div>
    );
  }
}

export default App;
