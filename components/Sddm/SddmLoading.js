import React, { PropTypes } from 'react';
import ScreenLockerPanel from '../ScreenLockerPanel';
import KdeLogo from './KdeLogo';
import ProgressBar from './ProgressBar';
import styles from './SddmLoading.css';

const propTypes = {
  progress: PropTypes.number.isRequired,
};

export default function SddmLoading({ progress }) {
  return (
    <ScreenLockerPanel>
      <div>
        <div className={styles.logo}>
          <KdeLogo />
        </div>

      </div>

      <div className={styles.progressBar}>
        <ProgressBar progress={progress} />
      </div>
    </ScreenLockerPanel>
  );
}

SddmLoading.propTypes = propTypes;
