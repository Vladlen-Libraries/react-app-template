import React, { useEffect, useState } from 'react';
import { useRole } from '../../hooks/use-role';
import { RoleCanContext } from './context';
import permissionsService from '../../../domain/PermissionsService';
import { PermissionActionEnum } from '../../../domain/PermissionsMatrix';

type Props = {
  children: any;
  action: PermissionActionEnum;
};

const RoleCan = (props: Props) => {
  const role = useRole();
  const [isRoleCan, setRoleCan] = useState<boolean | null>(null);
  useEffect(() => {
    if (role != null) {
      const isRoleCan = permissionsService.roleCan(role, props.action);
      setRoleCan(isRoleCan);
    }
  }, [role]);
  return (
    <RoleCanContext.Provider value={isRoleCan}>
      {props.children}
    </RoleCanContext.Provider>
  );
};

export default RoleCan;
