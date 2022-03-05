import { useState, useEffect } from 'react';

export const useMyHook = () => {
  const [{ counter }, setState] = useState<{
    counter: number;
  }>({
    counter: 0,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setState({ counter: counter + 1 });
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return counter;
};
