import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Sddm from '../components/Sddm';
import backgroundImage from '../assets/images/background.png';
import {
  activateAccount,
} from '../actions';

const propTypes = {
  accounts: PropTypes.array.isRequired,
  activateAccount: PropTypes.func.isRequired,
};

class SddmPage extends Component {
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
    console.log('haha', account);
    this.props.activateAccount(account);
  }

  render() {
    const { accounts } = this.props;

    return (
      <Sddm
        onAccountClick={this.handleAccountClick}
        accounts={accounts}
        windowWidth={this.state.windowWidth}
        background={backgroundImage}
      />
    );
  }
}

SddmPage.propTypes = propTypes;

function mapStateToProps(state) {
  const { account } = state;

  return {
    accounts: account.ids.map(id => account.entities[id])
  };
}

export default connect(mapStateToProps, {
  activateAccount,
})(SddmPage);
