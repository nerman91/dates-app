import React from 'react';
import styles from './animatemenu.scss';
import { CarouselMenu } from './CarouselMenu';
import { TimePeriod } from './TimePeriod';
import { EventsInfoMobile } from './EventsInfoMobile';

export function AnimateMenu() {
  return (
    <div className={styles.animateMenu}>
      <CarouselMenu />
      <TimePeriod />
      <EventsInfoMobile />
    </div>
  );
}
