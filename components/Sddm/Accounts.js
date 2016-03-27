import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Account from './Account';
import styles from './Accounts.css';

const accountsPropTypes = {
  accounts: PropTypes.array.isRequired,
  onAccountClick: PropTypes.func.isRequired,
};

export default class Accounts extends Component {
  constructor(props) {
    super(props);
    this.handleAccountClick = this.handleAccountClick.bind(this);
  }

  handleAccountClick(account) {
    this.props.onAccountClick(account);
  }

  getActiveAccountIndex(accounts) {
    return accounts.findIndex(account => !!account.active);
  }

  calcTranslateX(activeAccountIndex) {
    const fixedIndex = 1;
    const accountWidth = 84;
    const accountGutter = 30;
    const diff = fixedIndex - activeAccountIndex;

    return diff * (accountWidth + accountGutter);
  }

  render() {
    const { accounts } = this.props;
    const index = this.getActiveAccountIndex(accounts);
    const translateX = this.calcTranslateX(index);

    return (
      <Motion style={{ x: spring(translateX) }}>
        {({ x }) => // eslint-disable-line react/prop-types
          <div className={styles.wrapper}>
            <div className={styles.accounts} style={{ transform: `translateX(${x}px)` }}>
              {accounts.map(a =>
                (
                  <div className={styles.account} key={a.id}>
                    <Account
                      active={a.active}
                      account={a}
                      onClick={() => this.handleAccountClick(a)}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        }
      </Motion>
    );
  }
}

Accounts.propTypes = accountsPropTypes;
