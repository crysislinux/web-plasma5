import React, { PropTypes } from 'react';
import Background from '../Background';
import styles from './Sddm.css';
import SddmLoginContainer from '../../containers/SddmLoginContainer';

const propTypes = {
  windowWidth: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
};

export default function Sddm({ windowWidth, background }) {
  return (
    <Background image={background}>
      <div className={styles.wrapper}>
        <SddmLoginContainer windowWidth={windowWidth} />
      </div>
    </Background>
  );
}

Sddm.propTypes = propTypes;
