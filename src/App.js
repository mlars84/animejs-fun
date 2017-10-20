import React, { Component } from 'react';
import './App.css';
import anime from 'animejs'

anime({
  targets: 'div',
  translateX: 100,
  duration: 2000,
  loop: 3, // Play the animation 3 times
  direction: 'reverse', // Play the animation in reverse
  autoplay: false // Animation paused by default
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
