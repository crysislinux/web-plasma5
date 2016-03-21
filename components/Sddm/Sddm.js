import React, { PropTypes } from 'react';
import Accounts from './Accounts';
import DateTime from './DateTime';
import DesktopSelector from './DesktopSelector';
import Background from '../Background';
import Login from './Login';
import Control from './Control';
import styles from './Sddm.css';

const propTypes = {
  accounts: PropTypes.array.isRequired,
  windowWidth: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired
};

const accountWidth = 84;
const accountGutter = 30;

function calcAccountsWidth(windowWidth) {
  return accountWidth + accountGutter + accountWidth / 2 + windowWidth / 2;
}

export default function Sddm({ accounts, windowWidth, background }) {
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
              <Accounts accounts={accounts} />
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.bottom}>
            <div className={styles.desktopSelector}>
              <DesktopSelector selecting={false} environments={['Plasma', 'Plasma Media Center']} />
            </div>

            <div className={styles.password}>
              <Login />
            </div>
            <div className={styles.control}>
              <Control />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

Sddm.propTypes = propTypes;
