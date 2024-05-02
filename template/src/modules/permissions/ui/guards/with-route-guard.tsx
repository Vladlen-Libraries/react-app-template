import React from 'react';
import UDSpinner from '../../../ud-ui/spinner';
import { UseGuardHook } from "../../domain/UseGuardHook";

export const withRouteGuardByHook = (
  Page: any,
  useCanGuard: UseGuardHook
) => {
  const GuardedRoute = () => {
    const can = useCanGuard();

    if (can == null) {
      return <UDSpinner />;
    }

    if (can === false) {
      return null;
    }

    return <Page />;
  };
  return GuardedRoute;
};
