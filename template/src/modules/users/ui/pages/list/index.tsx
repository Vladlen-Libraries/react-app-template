import React, { useState } from 'react';
import UDPageListContent from '../../../../ud-page/list-content';
import UDPageListTitle from 'modules/ud-page/list-title';
import { withRouteGuardByHook } from 'modules/permissions/ui/guards/with-route-guard';
import { useUsersListGuard } from './use-guard';

const UsersPagesList: React.FC = () => {

  return (
    <>
      <UDPageListTitle>Пользователи</UDPageListTitle>
      <UDPageListContent error={null} isLoading={false}>
        Users list
      </UDPageListContent>
    </>
  );
};

export default withRouteGuardByHook(UsersPagesList, useUsersListGuard);
