import React from 'react';
import { useEvents } from '../hooks/useEvents';
import { useDeg } from '../hooks/useDeg';
import { events } from '../data/data';

interface IEventsContextProviderProps {
  children: React.ReactNode;
}

interface IEventsData {
  type: string;
  isActive: boolean;
  list: {
    year: number;
    event: string;
  }[];
}

interface IEventsContextData {
  deg: number;
  minYear: number;
  maxYear: number;
  prewMinYear: number;
  prewMaxYear: number;
  currentEventsCount: number;
  onSelectEvents: (t: number) => void;
  data: IEventsData[];
  setData: React.Dispatch<React.SetStateAction<IEventsData[]>>;
}

export const EventsContext = React.createContext<IEventsContextData>({
  deg: 0,
  minYear: 0,
  maxYear: 0,
  prewMinYear: 0,
  prewMaxYear: 0,
  currentEventsCount: 0,
  data: events,
  onSelectEvents: () => {},
  setData: () => {}
});

export function EventsContextProvider({ children }: IEventsContextProviderProps) {
  const [currentEventsCount, setCurrentEventsCount] = React.useState(0);
  const [minYear, maxYear, prewMaxYear, prewMinYear] = useEvents(currentEventsCount);
  const [data, setData] = React.useState(events);
  const [deg] = useDeg(currentEventsCount);

  function onSelectEvents(index: number) {
    setCurrentEventsCount(index);
    setData(
      data.map((event, i) => {
        if (event.isActive) {
          event.isActive = false;
        }
        if (i === index) {
          event.isActive = true;
        }
        return event;
      })
    );
  }

  React.useEffect(() => {
    setData(
      events.map((item, i) => {
        if (i === 0) {
          item.isActive = true;
        }
        return item;
      })
    );
  }, []);

  const contextData = {
    deg,
    minYear,
    maxYear,
    prewMinYear,
    prewMaxYear,
    currentEventsCount,
    data,
    setData,
    onSelectEvents
  };

  return <EventsContext.Provider value={contextData}>{children}</EventsContext.Provider>;
}
