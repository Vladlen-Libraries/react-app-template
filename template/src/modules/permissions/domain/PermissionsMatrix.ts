import { UserRoleEnum } from 'modules/users/domain/enums/UserRoleEnum';

export enum PermissionActionEnum {
  CreateUser
}

/**
 * Удобно, если на проекте подход к доступу осуществляется по матрице - действие, роль, разрешение
 */
export const PermissionsMatrix: Record<PermissionActionEnum, UserRoleEnum[]> = {
  [PermissionActionEnum.CreateUser]: [UserRoleEnum.Admin]
};
