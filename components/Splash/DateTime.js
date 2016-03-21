import React, { PropTypes } from 'react';
import styles from './DateTime.css';
import moment from 'moment';

const propTypes = {
  datetime: PropTypes.string.isRequired
};

export default function DateTime({ datetime }) {
  const momentObj = moment(datetime);
  const time = momentObj.format('h:mm [PM]');
  const date = momentObj.format('dddd, MMMM Do, YYYY');

  return (
    <div className={styles.datetime}>
      <div className={styles.time}>{time}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
}

DateTime.propTypes = propTypes;
