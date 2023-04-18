import React from 'react';
import styles from './timeperiod.scss';
import classNames from 'classnames';
import { EventsContext } from '../../../Context/EventsProvider';
import { useCounter } from '../../../hooks/useCounter';

export function TimePeriod() {
  const { minYear, maxYear, prewMaxYear, prewMinYear } = React.useContext(EventsContext);
  const countMinYear = useCounter(minYear, prewMinYear);
  const countMaxYear = useCounter(maxYear, prewMaxYear);

  return (
    <div className={styles.timePeriod}>
      <p className={classNames(styles.minYear, styles.year)}>{countMinYear}</p>
      <p className={classNames(styles.maxYear, styles.year)}>{countMaxYear}</p>
    </div>
  );
}
