import { useCallback, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const useCountDownTimer = (initialSeconds: number, format = 'ss') => {
  const timer = useRef<any>();
  const time = useRef<number>(0);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  const stopTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      time.current = 0;
    }
  }, []);

  const startTimer = useCallback(
    (start) => {
      setSeconds(start);
      time.current = start;
      timer.current = setInterval(() => {
        if (time.current > 0) {
          time.current--;
          setSeconds(time.current);
        } else {
          stopTimer();
        }
      }, 1000);
    },
    [stopTimer]
  );

  useEffect(() => {
    return () => {
      if (timer.current != null) {
        clearInterval(timer.current);
      }
    };
  }, []);

  const formattedTime =
    seconds > 0 ? dayjs.duration({ seconds }).format(format) : 0;

  return { seconds, formattedTime, startTimer, stopTimer };
};
