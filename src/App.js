import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureApp from './TemperatureApp'; 

class App extends Component {
  render() {
    return (
      <div className="App">
       <TemperatureApp />
      </div>
    );
  }
}

export default App;
