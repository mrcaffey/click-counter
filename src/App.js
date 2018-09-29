import React, { Component } from 'react';
import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
      <button onClick={this.props.onClick}>
        This button has been clicked {this.props.clicks} times.
      </button>
      </div>
    );
  }
}

export default App;
