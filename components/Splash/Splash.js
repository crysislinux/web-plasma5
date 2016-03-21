import React, { PropTypes } from 'react';
import Account from './Account';
import DateTime from './DateTime';
import DesktopSelector from './DesktopSelector';
import Background from '../Background';
import styles from './Splash.css';

const propTypes = {
  accounts: PropTypes.array.isRequired,
  onAccountClick: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired
};

const accountWidth = 84;
const accountGutter = 30;

function calcAccountsWidth(windowWidth) {
  return accountWidth + accountGutter + accountWidth / 2 + windowWidth / 2;
}

export default function Splash({ accounts, onAccountClick, windowWidth, background }) {
  const accountsWidth = calcAccountsWidth(windowWidth);
  const datetimeWidth = windowWidth - accountsWidth;
  return (
    <Background image={background}>
      <div className={styles.wrapper}>
        <div className={styles.splash}>
          <div className={styles.top}>
            <div className={styles.datetime} style={{ width: datetimeWidth }}>
              <DateTime datetime={'2016-03-21'} />
            </div>
            <div className={styles.accounts} style={{ width: accountsWidth }}>
              { accounts.map(a =>
                (
                  <div key={a.id} className={styles.account}>
                    <Account active={a.active} account={a} onClick={onAccountClick} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.bottom}>
            <div className={styles.desktopSelector}>
              <DesktopSelector />
            </div>

            <div className={styles.password}>mmmmmmmmm</div>
            <div className={styles.reboot}>right</div>
          </div>
        </div>
      </div>
    </Background>
  );
}

Splash.propTypes = propTypes;
