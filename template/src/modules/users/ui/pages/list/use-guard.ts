import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserRoleEnum } from '../../../domain/enums/UserRoleEnum';
import { history } from 'modules/store/store';
import { UseGuardHook } from 'modules/permissions/domain/UseGuardHook';
import { useRole } from '../../../../permissions/ui/hooks/use-role';
import { currentUserSelector } from 'modules/auth/store/session/selectors';

export const useUsersListGuard: UseGuardHook = (): boolean | null => {
  const currentUser = useSelector(currentUserSelector);
  const currentUserRole = useRole();
  const [can, setCan] = useState<boolean | null>(true);

  return can;
};
