import { PermissionActionEnum, PermissionsMatrix } from './PermissionsMatrix';
import { UserRoleEnum } from 'modules/users/domain/enums/UserRoleEnum';

export class PermissionsService {
  constructor(private matrix: Record<PermissionActionEnum, UserRoleEnum[]>) {}

  public roleCan(role: UserRoleEnum, action: PermissionActionEnum): boolean {
    const accessRoles = this.matrix[action];
    return accessRoles?.some((r) => r === role);
  }
}

const permissionsService = new PermissionsService(PermissionsMatrix);
export default permissionsService;
