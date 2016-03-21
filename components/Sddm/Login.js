import React from 'react';
import styles from './Login.css';

export default function Login({ }) {
  return (
    <div className={styles.login}>
      <input type="password" className={styles.input} />
      <button className={styles.button}>Login</button>
    </div>
  );
}
