import React, { PropTypes } from 'react';
import styles from './ProgressBar.css';

const propTypes = {
  progress: PropTypes.number.isRequired,
};

export default function ProgressBar({ progress }) {
  const width = `${progress}%`;
  return (
    <div className={styles.bar}>
      <div className={styles.fill} style={{ width }}></div>
    </div>
  );
}

ProgressBar.propTypes = propTypes;
