import React, { Component } from 'react';
import { connect } from 'react-redux';

/* eslint-disable  react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div>
        Hello Plasma 5
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {

})(App);
