import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SddmLogin from '../components/Sddm/SddmLogin';

import {
  activateAccount,
} from '../actions';

const propTypes = {
  accounts: PropTypes.array.isRequired,
  activateAccount: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
};

class SddmLoginContainer extends Component {
  handleAccountClick(account) {
    this.props.activateAccount(account);
  }

  render() {
    const { accounts, windowWidth } = this.props;

    return (
      <SddmLogin
        onAccountClick={this.handleAccountClick}
        accounts={accounts}
        windowWidth={windowWidth}
      />
    );
  }
}

SddmLoginContainer.propTypes = propTypes;

function mapStateToProps(state, props) {
  const { account } = state;

  return {
    accounts: account.ids.map(id => account.entities[id]),
    windowWidth: props.windowWidth,
  };
}

export default connect(mapStateToProps, {
  activateAccount,
})(SddmLoginContainer);
