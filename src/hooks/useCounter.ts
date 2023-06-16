import React from 'react';

export function useCounter(value: number, prewValue: number): number {
  const [counter, setCounter] = React.useState(prewValue);
  const DURATION = 15;

  React.useEffect(() => {
    if (value === counter) {
      return;
    }

    if (value > counter) {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, DURATION);
    }

    if (value < counter) {
      setTimeout(() => {
        setCounter((prev) => prev - 1);
      }, DURATION);
    }
  }, [counter, value]);

  return counter;
}
