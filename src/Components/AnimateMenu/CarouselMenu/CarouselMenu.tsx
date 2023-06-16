import React from 'react';
import styles from './carouselmenu.scss';
import { CarouselItem } from './CarouselItem';
import { EventsContext } from '../../../Context/EventsProvider';

export function CarouselMenu() {
  const { deg, data } = React.useContext(EventsContext);

  return (
    <div className={styles.carouselMenuWrapper}>
      <div className={styles.carouselMenu} style={{ transform: `rotate(${deg}deg)` }}>
        {data.map((_, index) => (
          <CarouselItem key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
