import { useSelector } from 'react-redux';
import { userRoleSelector } from 'modules/auth/store/session/selectors';

export const useRole = () => {
  return useSelector(userRoleSelector);
};
