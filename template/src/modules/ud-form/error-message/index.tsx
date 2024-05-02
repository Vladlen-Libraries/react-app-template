import React, { useEffect, useRef, useState } from 'react';
import styled from './ud-form-error-message.module.scss';

type Props = {
  message?: string | null;
  showTimeout?: number; // seconds
  onHide?: () => void;
};
const UDFormError = (props: Props) => {
  const [isShown, setIsShown] = useState(false);
  const { message, showTimeout, onHide } = props;
  const timer = useRef();

  useEffect(() => {
    if (showTimeout && !!message) {
      setIsShown(true);
      // @ts-ignore
      timer.current = setTimeout(() => {
        setIsShown(false);
        onHide && onHide();
        // @ts-ignore
        timer.current = null;
      }, showTimeout * 1000);
    }
  }, [message, showTimeout, onHide]);

  useEffect(() => {
    return () => {
      if (!!timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  if ((message && !showTimeout) || (message && showTimeout && isShown)) {
    return <div className={styled.message}>{message}</div>;
  }
  return null;
};

export default UDFormError;
