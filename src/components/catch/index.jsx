import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Default from '../../layouts/Default';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class Catch extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo)    {
    console.log('error', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="container">
          <h1>Oops Something went wrong.</h1>
        </div>
      );
    }

    return children;
  }
}

Catch.propTypes = propTypes;
export default Catch;
