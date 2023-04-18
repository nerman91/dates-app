import React from 'react';
import { events } from '../data/data';

interface IEventsData {
  year: number;
  event: string;
}

function getAllYears(arr: IEventsData[]): number[] {
  return [...arr.map((event) => event.year)];
}

export function useEvents(currentEventsCount: number): number[] {
  const [minYear, setMinYear] = React.useState(Math.min(...getAllYears(events[0].list)));
  const [maxYear, setMaxYear] = React.useState(Math.max(...getAllYears(events[0].list)));
  const [prewMinYear, setPrewMinYear] = React.useState(minYear);
  const [prewMaxYear, setPrewMaxYear] = React.useState(maxYear);

  React.useEffect(() => {
    if (currentEventsCount !== 0) {
      setPrewMinYear(minYear);
      setPrewMaxYear(maxYear);
    }
    setMinYear(Math.min(...getAllYears(events[currentEventsCount].list)));
    setMaxYear(Math.max(...getAllYears(events[currentEventsCount].list)));
  }, [currentEventsCount]);

  return [minYear, maxYear, prewMaxYear, prewMinYear];
}
