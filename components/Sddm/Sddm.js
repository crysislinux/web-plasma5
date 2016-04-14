import React, { PropTypes } from 'react';
import Background from '../Background';
import styles from './Sddm.css';
import SddmLoginContainer from '../../containers/SddmLoginContainer';

const propTypes = {
  background: PropTypes.string.isRequired,
};

export default function Sddm({ background }) {
  return (
    <Background image={background}>
      <div className={styles.wrapper}>
        <SddmLoginContainer />
      </div>
    </Background>
  );
}

Sddm.propTypes = propTypes;
