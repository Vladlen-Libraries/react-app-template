import { useSelector } from 'react-redux';
import {
  isAuthCheckedSelector,
  userSessionIsLoggedSelector,
} from '../../store/session/selectors';

export type IsLoggedState = {
  isLogged: boolean;
  isAuthChecked: boolean;
};

export const useIsLogged = (): IsLoggedState => {
  const isLogged = useSelector(userSessionIsLoggedSelector);
  const isAuthChecked = useSelector(isAuthCheckedSelector);

  return {
    isLogged,
    isAuthChecked,
  };
};
