import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useIsLogged } from '../../auth/ui/hooks/use-is-logged';

type Props = {
  children: JSX.Element;
};
const RequireLogged = ({ children }: Props) => {
  let location = useLocation();
  const { isLogged, isAuthChecked } = useIsLogged();

  if (!isLogged && isAuthChecked) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireLogged;
