import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HOCWrappedComponent from './components/WrappedComponent';
import HOCStyleWrappedComponent from './components/StyleWrappedComponent';
import InheritanceInversionExtendedComponent from './components/InheritanceInversionExtendedComponent';

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
        <div>
          <hr />
          <h3>HOC wrapping for styling</h3>
          <p>HOC will wrap styles!</p>
          <div>
            <HOCStyleWrappedComponent />
          </div>
        </div>
        <div>
          <hr />
          <h3>HOC extended using Inheritance Inversion</h3>
          <p>HOC will extends from wrapped component</p>
          <div>
            <InheritanceInversionExtendedComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
