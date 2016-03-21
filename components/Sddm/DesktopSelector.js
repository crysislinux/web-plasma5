import React, { PropTypes } from 'react';
import styles from './DesktopSelector.css';

function Dropdown({ items }) {
  return (
    <div className={styles.dropdown}>
     {items.map((item, index) =>
       <div key={index} className={styles.dropdownItem}>{item}</div>)
     }
    </div>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array.isRequired
};

function Arrow() {
  return (
    <span className={styles.arrow}>
    </span>
  );
}

export default function DesktopSelector({ selecting, environments }) {
  return (
    <div>
      <div className={selecting ? styles.selectingCombox : styles.normaCombox}>
        {environments[0]}
        <Arrow />
      </div>
      {selecting && <Dropdown items={environments} />}
    </div>
  );
}

DesktopSelector.propTypes = {
  selecting: PropTypes.bool.isRequired,
  environments: PropTypes.array.isRequired
};
