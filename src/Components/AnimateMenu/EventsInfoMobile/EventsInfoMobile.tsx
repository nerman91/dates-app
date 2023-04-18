import React from 'react';
import styles from './eventsinfomobile.scss';
import { EventsContext } from '../../../Context/EventsProvider';
import { nanoid } from 'nanoid';

export function EventsInfoMobile() {
  const { data, currentEventsCount } = React.useContext(EventsContext);

  return (
    <div key={nanoid()} className={styles.eventsInfo}>
      {data[currentEventsCount].type}
    </div>
  );
}
