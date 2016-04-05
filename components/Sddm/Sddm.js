import React, { PropTypes } from 'react';
import ScreenLockerPanel from '../ScreenLockerPanel';
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
  background: PropTypes.string.isRequired,
  onAccountClick: PropTypes.func.isRequired,
};

const accountWidth = 84;
const accountGutter = 30;
const idleSpace = 20;

function calcAccountsWidth(contentWidth) {
  return accountWidth + accountGutter + accountWidth / 2 + contentWidth / 2;
}

export default function Sddm({ accounts, windowWidth, background, onAccountClick }) {
  const contentWidth = windowWidth - idleSpace * 2;
  const accountsWidth = calcAccountsWidth(contentWidth);
  const datetimeWidth = contentWidth - accountsWidth;
  return (
    <Background image={background}>
      <div className={styles.wrapper}>
        <ScreenLockerPanel>
          <div className={styles.top}>
            <div className={styles.datetime} style={{ width: datetimeWidth }}>
              <DateTime datetime={'2016-03-21'} />
            </div>
            <div className={styles.accounts} style={{ width: accountsWidth }}>
              <Accounts
                accounts={accounts}
                onAccountClick={onAccountClick}
              />
            </div>
          </div>

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
        </ScreenLockerPanel>
      </div>
    </Background>
  );
}

Sddm.propTypes = propTypes;
