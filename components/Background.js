import React, { PropTypes } from 'react';
import styles from './Background.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.object
};

// background stretch to full width and height of the screen
export default function Background({ image, children }) {
  const bgStyle = {
    backgroundImage: `url("${image}")`
  };

  return (
    <div className={styles.background} style={bgStyle}>
      {children}
    </div>
  );
}

Background.propTypes = propTypes;
