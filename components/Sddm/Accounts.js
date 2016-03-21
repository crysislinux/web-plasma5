import React, { PropTypes } from 'react';
import styles from './Accounts.css';

const accountPropTypes = {
  account: PropTypes.object.isRequired,
  active: PropTypes.bool,
};

const accountsPropTypes = {
  accounts: PropTypes.array.isRequired,
};

function Account({ account, active }) {
  const logoClass = active ? styles.activeLogoImage : styles.logoImage;
  const logoContainerClass = active ? styles.activeLogoContainer : styles.logoContainer;
  return (
    <div className={styles.account}>
      <div className={styles.wrapper}>
        <div className={logoContainerClass}>
          <img className={logoClass} src={account.icon} />
        </div>
      </div>
      <div className={styles.name}>{account.name}</div>
    </div>
  );
}

Account.propTypes = accountPropTypes;

export default function Accounts({ accounts }) {
  return (
    <div className={styles.accounts}>
      {accounts.map(a =>
        (
          <Account key={a.id} active={a.active} account={a} />
        ))
      }
    </div>
  );
}

Accounts.propTypes = accountsPropTypes;
