import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HOCWrappedComponent from './components/WrappedComponent';

class App extends Component {
  render() {
    const dummyProps = { name: 'udin', age: 10 };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - HOC Implementations</h2>
        </div>
        <div>
          <h3>Props Proxy</h3>
          <p>props proxy do something below...</p>
          <div>
            <HOCWrappedComponent {...dummyProps} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
