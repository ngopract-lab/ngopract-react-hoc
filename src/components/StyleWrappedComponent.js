import React from 'react';

function cardStyleHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return (
        <div style={{
            width: '80%',
            margin: '0 auto',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            background: '#F5F5F5'
        }}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
const StyleWrappedComponent = props => (
  <div>
    <h1>This is a Style Wrapped Component</h1>
    <p>Hello there!</p>
  </div>
);

export default cardStyleHOC(StyleWrappedComponent);
