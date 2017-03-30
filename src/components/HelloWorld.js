import React, { Component, PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string,
  message: PropTypes.string
};

const defaultProps = {
  name: 'World',
  message: 'This is a simple component.'
};

class HelloWorld extends Component {
  render() {
    const { name, message } = this.props;

    return (
      <div>
      <h1 className="">Hello {name}!</h1>
      <p className="lead">
        {message}
      </p>
      </div>
    );
  }
}

HelloWorld.propTypes = propTypes;
HelloWorld.defaultProps = defaultProps;

export default HelloWorld;
