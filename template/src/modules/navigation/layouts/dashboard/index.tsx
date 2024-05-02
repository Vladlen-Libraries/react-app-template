import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from './layouts-dashboard.module.scss';
import { useIsLogged } from '../../../auth/ui/hooks/use-is-logged';

const NavigationLayoutsDashboard = (): React.ReactElement | null => {
  const { isAuthChecked } = useIsLogged();
  if (isAuthChecked) {
    return (
      <div className={styled.mainLayout}>
        <div className={styled.content}>
          <Outlet />
        </div>
      </div>
    );
  }
  return null;
};

export default NavigationLayoutsDashboard;
