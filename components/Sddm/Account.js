import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import styles from './Account.css';

const accountPropTypes = {
  account: PropTypes.object.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function Account({ account, active, onClick }) {
  const logoClass = active ? styles.activeLogoImage : styles.logoImage;
  const logoContainerClass = active ? styles.activeLogoContainer : styles.logoContainer;
  return (
    <Motion style={{ x: spring(active ? 1 : 0.5) }}>
      {({ x }) => // eslint-disable-line react/prop-types
        <div className={styles.account} onClick={onClick} style={{ opacity: `${x}` }}>
          <div className={styles.wrapper}>
            <Motion style={{ y: spring(active ? 1 : 0.85) }}>
              {({ y }) => // eslint-disable-line react/prop-types
                <div className={logoContainerClass} style={{ transform: `scale(${y})` }}>
                  <img className={logoClass} src={account.icon} />
                </div>
              }
            </Motion>
          </div>
          <div className={styles.name}>{account.name}</div>
        </div>
      }
    </Motion>
  );
}

Account.propTypes = accountPropTypes;
