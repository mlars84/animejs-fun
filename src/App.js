import React, { Component } from 'react';
import './App.css';
import anime from 'animejs'

anime({
  targets: 'div',
  translateX: [
    { value: 100, duration: 1200 },
    { value: 0, duration: 800 }
  ],
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 2000,
  loop: true
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>AnimeJS</h1>
      </div>
    );
  }
}

export default App;
