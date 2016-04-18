import React, { PropTypes } from 'react';
import Background from '../Background';
import styles from './Sddm.css';
import SddmLoginContainer from '../../containers/SddmLoginContainer';
import SddmLoadingContainer from '../../containers/SddmLoadingContainer';

const propTypes = {
  background: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default function Sddm({ background, loading }) {
  return (
    <Background image={background}>
      <div className={styles.wrapper}>
        { !loading && <SddmLoginContainer /> }
        { loading && <SddmLoadingContainer /> }
      </div>
    </Background>
  );
}

Sddm.propTypes = propTypes;
