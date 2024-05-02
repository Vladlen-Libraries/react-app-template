import { useContext } from 'react';
import { RoleCanContext } from './context';

type Props = {
  children: any;
};
const RCFailed = (props: Props) => {
  const isRoleCanSuccess = useContext(RoleCanContext);
  if (!isRoleCanSuccess) {
    return props.children;
  }
  return null;
};

export default RCFailed;
