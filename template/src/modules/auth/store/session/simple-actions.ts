import { createAction } from '@reduxjs/toolkit';
import { AuthResponse } from 'modules/auth/domain/interfaces/AuthResponse';
import { User } from 'modules/users/domain/interfaces/User';
import { PREFIX } from './constants';

export const setCurrentUser = createAction<User>(`${PREFIX}/setCurrentUser`);

export const setSuccessAuthResponse = createAction<AuthResponse>(
  `${PREFIX}/setSuccessAuthResponse`
);
