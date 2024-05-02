import React from 'react';
import { Navigate } from 'react-router-dom';
import { useIsLogged } from '../../auth/ui/hooks/use-is-logged';

const RequireNotLogged = ({ children }: { children: JSX.Element }) => {
  const { isLogged, isAuthChecked } = useIsLogged();

  if (isLogged && isAuthChecked) {
    return <Navigate replace to="/" />;
  }

  return children;
};

export default RequireNotLogged;
