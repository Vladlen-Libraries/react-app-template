import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from 'modules/auth/domain/services/AuthService';
import userRepository from 'modules/users/domain/repositories/UserRepository';
import { PREFIX } from './constants';
import { setSuccessAuthResponse } from './simple-actions';
import { history } from '../../../store/store';

export const checkAuthorization = createAsyncThunk(
  `${PREFIX}/checkAuthorization`,
  async (_, { dispatch }) => {
    const authResponse = await authService.checkAuth();
    if (authResponse) {
      await dispatch(setSuccessAuthResponse(authResponse));
      const isUserNew = userRepository.isUserNew(authResponse);
      if (isUserNew) {
        history.replace('/register');
      }
    }
    return authResponse;
  }
);

export const logout = createAsyncThunk(
  `${PREFIX}/logout`,
  async (_, { dispatch }) => {
    await authService.logout();
    history.replace('/login-by-phone');
  }
);
