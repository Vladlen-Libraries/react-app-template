import { useRole } from '../../hooks/use-role';
import { UserRoleEnum } from 'modules/users/domain/enums/UserRoleEnum';

type Props = {
  oneOf?: UserRoleEnum | UserRoleEnum[];
  notOf?: UserRoleEnum | UserRoleEnum[];
  children: any;
};

export function isRoleContains(
  rolesSet: UserRoleEnum | UserRoleEnum[],
  role: UserRoleEnum
): boolean {
  if (Array.isArray(rolesSet)) {
    return rolesSet.some((r) => r === role);
  }
  return rolesSet === role;
}

export function isPassedForRole(rule: any, role: UserRoleEnum | undefined): boolean {
  const { oneOf, notOf } = rule;
  if (role) {
    let isOneOfPassed = true;
    if (oneOf != null) {
      isOneOfPassed = isRoleContains(oneOf, role);
    }

    let isNotOfPassed = true;
    if (notOf != null) {
      isOneOfPassed = !isRoleContains(notOf, role);
    }

    return isOneOfPassed && isNotOfPassed;
  }
  return false;
}

const IfRole = (props: Props) => {
  const { notOf, oneOf, children } = props;
  const role = useRole();
  if (!role) {
    return null;
  }

  const ifPassed = isPassedForRole({ notOf, oneOf }, role);

  if (ifPassed) {
    return children;
  }

  return null;
};

export default IfRole;
