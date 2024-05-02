import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseErrorType } from 'modules/core/enums/ResponseErrorType';
import { AuthCheckCodeDto } from 'modules/auth/domain/interfaces/AuthCheckCodeDto';
import { AuthSendCodeDto } from 'modules/auth/domain/interfaces/AuthSendCodeDto';
import { RootState } from 'modules/store/store';
import { setSuccessAuthResponse } from '../session/simple-actions';
import { PREFIX } from './constants';
import { loginCredentialsSelector } from './selectors';
import { setRetriesLimitErrorVisibility } from './simple-actions';
import { unwrapServerError } from 'modules/core/utils/unwrap-server-error';
import authPhoneService from "../../domain/services/AuthPhoneService";

export const sendPhoneCode = createAsyncThunk(
  `${PREFIX}/sendPhoneCode`,
  async (data: AuthSendCodeDto, { dispatch, rejectWithValue }) => {
    return authPhoneService.sendCode(data).catch((e) => {
      const er = unwrapServerError(e);
      if (er === ResponseErrorType.AuthBlocked) {
        dispatch(setRetriesLimitErrorVisibility(true));
      } else {
        // errorService.showErrorMessage(e?.message);
        return rejectWithValue(er);
      }
    });
  }
);

export const resendPhoneCode = createAsyncThunk(
  `${PREFIX}/resendPhoneCode`,
  async (_, { getState, dispatch, rejectWithValue }) => {
    const state = getState() as RootState;
    const { phone } = loginCredentialsSelector(state) as { phone: string };
    return authPhoneService.sendCode({ phone }).catch((e) => {
      const er = unwrapServerError(e);
      if (er === ResponseErrorType.AuthBlocked) {
        dispatch(setRetriesLimitErrorVisibility(true));
      } else {
        return rejectWithValue(er);
      }
    });
  }
);

export const checkCodeAndLogin = createAsyncThunk(
  `${PREFIX}/checkCodeAndLogin`,
  async (code: string, { getState, dispatch, rejectWithValue }) => {
    const state = getState() as RootState;
    const data = loginCredentialsSelector(state) as AuthCheckCodeDto;
    try {
      const authResponse = await authPhoneService.login(data);
      if (authResponse) {
        dispatch(setSuccessAuthResponse(authResponse));
      }
      return authResponse;
    } catch (e) {
      const er = unwrapServerError(e);
      if (er === ResponseErrorType.AuthBlocked) {
        dispatch(setRetriesLimitErrorVisibility(true));
      }
      return rejectWithValue(er);
    }
  }
);
