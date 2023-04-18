import React from 'react';
import styles from './paginationevents.scss';
import { PaginationIcon } from '../Icons';
import { EventsContext } from '../../Context/EventsProvider';
import classNames from 'classnames';

export function PaginationEvents() {
  const {
    onSelectEvents,
    currentEventsCount: activeEvents,
    data
  } = React.useContext(EventsContext);
  const length = data.length;

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.counter}>
        0{activeEvents + 1}/0{length}
      </div>
      <div className={styles.buttonsControl}>
        <button
          onClick={() => onSelectEvents(activeEvents - 1)}
          className={classNames(styles.control, styles.btnPrew)}
          disabled={activeEvents === 0 ? true : false}>
          <PaginationIcon />
        </button>
        <button
          onClick={() => onSelectEvents(activeEvents + 1)}
          className={classNames(styles.control, styles.btnNext)}
          disabled={activeEvents === 5 ? true : false}>
          <PaginationIcon />
        </button>
      </div>
    </div>
  );
}
