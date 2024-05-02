import { useContext } from 'react';
import { RoleCanContext } from './context';

type Props = {
  children: any;
};
const RCSuccess = (props: Props) => {
  const isRoleCanSuccess = useContext(RoleCanContext);
  if (isRoleCanSuccess) {
    return props.children;
  }
  return null;
};

export default RCSuccess;
