import React, { PropTypes } from 'react';
import styles from './Account.css';

const propTypes = {
  account: PropTypes.object.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default function Account({ account, active, onClick }) {
  const logoClass = active ? styles.activeLogImage : styles.logoImage;

  return (
    <div className={styles.account} onClick={onClick}>
      <div className={styles.logoContainer}>
        <img className={logoClass} src={account.icon} />
      </div>
      <div className={styles.name}>{account.name}</div>
    </div>
  );
}

Account.propTypes = propTypes;
