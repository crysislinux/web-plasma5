import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sddm from '../components/Sddm';
import backgroundImage from '../assets/images/background.png';

/* eslint-disable react/prop-types */
class SddmPage extends Component {
  render() {
    const { background, loading } = this.props;
    return (
      <Sddm
        background={background}
        loading={loading}
      />
    );
  }
}

function mapStateToProps(state) {
  const { account } = state;

  return {
    background: backgroundImage,
    loading: account.loading,
  };
}

export default connect(mapStateToProps, {

})(SddmPage);
