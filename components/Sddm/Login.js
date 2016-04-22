import React, { PropTypes } from 'react';
import styles from './Login.css';

export default function Login({ onLoginClick }) {
  return (
    <div className={styles.login}>
      <input type="password" className={styles.input} />
      <button className={styles.button} onClick={onLoginClick}>Login</button>
    </div>
  );
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};
