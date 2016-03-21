import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.node
};

/* eslint-disable  react/prefer-stateless-function */
class App extends Component {
  static propTypes = propTypes;
  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {

})(App);
