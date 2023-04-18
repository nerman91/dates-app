import React from 'react';
import styles from './carouselitem.scss';
import { EventsContext } from '../../../../Context/EventsProvider';
import { calculateCoordinates } from '../../../../utils/calculateCoordinates';
import classNames from 'classnames';

interface ICarouselItemProps {
  index: number;
}

export function CarouselItem({ index }: ICarouselItemProps) {
  const { onSelectEvents, deg, data, currentEventsCount } = React.useContext(EventsContext);
  const invertDeg = deg < 0 ? Math.abs(deg) : `-${deg}`;
  const rotateBtn = { transform: `rotate(${invertDeg}deg)` };
  const position = { ...calculateCoordinates(index, data.length) };

  return (
    <div
      className={classNames(styles.item, { [styles.isActive]: data[index].isActive })}
      style={position}>
      <button
        className={styles.carouselBtn}
        style={rotateBtn}
        onClick={() => {
          onSelectEvents(index);
        }}>
        {currentEventsCount === index ? (
          <div className={styles.selected}>{data[currentEventsCount].type}</div>
        ) : (
          ''
        )}
        {index + 1}
      </button>
    </div>
  );
}
