import React from 'react';
// important to note! II HOC wrapped component must be a class
function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
      render() {
        return super.render()
      }
    }
}

class InheritanceInversionExtendedComponent extends React.Component {
  render () {
    return (
      <div>
        <h2>This is an inheritance inversion extended component</h2>
      </div>
    );
  };
}

export default iiHOC(InheritanceInversionExtendedComponent);
