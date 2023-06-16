import React from 'react';
import { events } from '../data/data';

export function useDeg(currentEventsCount: number) {
  const [deg, setDeg] = React.useState(-60);

  React.useEffect(() => {
    const gap = 360 / events.length;
    const targetAngle = -1 * gap * currentEventsCount - 60;
    setDeg(targetAngle);
  }, [currentEventsCount]);

  return [deg];
}
