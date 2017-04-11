import React from 'react';

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      const newDummyProps = {
        userStatus: 'registered',
        userAddress: 'react street',
      };
      return <WrappedComponent {...this.props} {...newDummyProps} />
    }
  }
}

const ComponentToBeWrapped = ({ name, age, userStatus, userAddress }) => (
  <div>
    <h4>This is a Wrapped Component as a result of Props Proxy Implementation of HOC</h4>
    <p>Here we modified the props by adding new props from ppHOC</p>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Status: {userStatus}</p>
    <p>Address: {userAddress}</p>
  </div>
);

export default ppHOC(ComponentToBeWrapped);
