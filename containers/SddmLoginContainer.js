import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SddmLogin from '../components/Sddm/SddmLogin';

import {
  activateAccount,
} from '../actions';

const propTypes = {
  accounts: PropTypes.array.isRequired,
  activateAccount: PropTypes.func.isRequired,
};

class SddmLoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);
    this.handleAccountClick = this.handleAccountClick.bind(this);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleAccountClick(account) {
    this.props.activateAccount(account);
  }

  render() {
    const { accounts } = this.props;

    return (
      <SddmLogin
        onAccountClick={this.handleAccountClick}
        accounts={accounts}
        windowWidth={this.state.windowWidth}
      />
    );
  }
}

SddmLoginContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { account } = state;

  return {
    accounts: account.ids.map(id => account.entities[id]),
  };
}

export default connect(mapStateToProps, {
  activateAccount,
})(SddmLoginContainer);
