/* global chrome */
import React, { Children, PropTypes } from 'react';
import warning from '../utils/warning.js';
import styles from './ScreenLockerPanel.css';

const propTypes = {
  children: PropTypes.array.isRequired
};

export default function ScreenLockerPanel({ children }) {
  const childArray = [];
  Children.forEach(children, (child) => {
    childArray.push(child);
  });

  if (childArray.length !== 2) {
    warning(`ScreenLockerPanel accepts 2 children, but ${childArray.length} are supplied`);
  }

  return (
    <div className={styles.screenLocker}>
      <div className={styles.top}>
        {childArray[0]}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottom}>
        {childArray[1]}
      </div>
    </div>
  );
}

ScreenLockerPanel.propTypes = propTypes;
