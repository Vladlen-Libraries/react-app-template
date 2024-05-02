import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { PREFIX } from './constants';
import { checkCodeAndLogin, resendPhoneCode, sendPhoneCode } from './actions';
import {
  clearCheckCodeError,
  clearSendCodeError,
  setLoginStep,
  setRetriesLimitErrorVisibility
} from './simple-actions';

type State = {
  step: 'phone' | 'code';
  retriesLimitErrorVisibility: boolean;
  isCodeSending: boolean;
  isCodeChecking: boolean;
  codeSentAt: string | null;
  sendCodeError: string | null;
  checkCodeError: string | null;
  credentials: {
    phone?: string;
    code?: string;
  };
};

const initialState: State = {
  step: 'phone',
  retriesLimitErrorVisibility: false,
  isCodeSending: false,
  isCodeChecking: false,
  codeSentAt: null,
  sendCodeError: null,
  checkCodeError: null,
  credentials: {
    phone: '',
    code: ''
  }
};

const loginByPhoneSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // region Send code
    builder.addCase(sendPhoneCode.pending, (state, action) => {
      state.isCodeSending = true;
      state.credentials.phone = action.meta.arg.phone;
    });
    builder.addCase(sendPhoneCode.fulfilled, (state) => {
      state.codeSentAt = dayjs().toISOString();
      state.isCodeSending = false;
      state.step = 'code';
    });
    builder.addCase(sendPhoneCode.rejected, (state, { payload }) => {
      console.log('sendPhoneCode.rejected payload', payload);
      state.isCodeSending = false;
      // @ts-ignore
      state.sendCodeError = payload;
    });
    // endregion

    // region Resend code
    builder.addCase(resendPhoneCode.pending, (state) => {
      state.isCodeSending = true;
    });
    builder.addCase(resendPhoneCode.fulfilled, (state) => {
      state.codeSentAt = dayjs().toISOString();
      state.isCodeSending = false;
    });
    builder.addCase(resendPhoneCode.rejected, (state, { payload }) => {
      state.isCodeSending = false;
      // @ts-ignore
      state.sendCodeError = payload;
    });
    // endregion

    // region Check code
    builder.addCase(checkCodeAndLogin.pending, (state: State, action) => {
      state.isCodeChecking = true;
      state.credentials.code = action.meta.arg;
    });
    builder.addCase(checkCodeAndLogin.rejected, (state: State, { payload }) => {
      state.isCodeChecking = false;
      // @ts-ignore
      state.checkCodeError = payload;
    });
    builder.addCase(
      checkCodeAndLogin.fulfilled,
      (state: State, { payload }) => {
        state.step = initialState.step;
        state.isCodeSending = initialState.isCodeSending;
        state.isCodeChecking = initialState.isCodeChecking;
        state.sendCodeError = initialState.sendCodeError;
        state.checkCodeError = initialState.checkCodeError;
        state.credentials = initialState.credentials;
        state.retriesLimitErrorVisibility =
          initialState.retriesLimitErrorVisibility;
        state.codeSentAt = initialState.codeSentAt;
      }
    );
    // endregion

    builder.addCase(setRetriesLimitErrorVisibility, (state, { payload }) => {
      state.retriesLimitErrorVisibility = payload;
    });

    builder.addCase(setLoginStep, (state, { payload }) => {
      state.step = payload;
    });

    builder.addCase(clearSendCodeError, (state, { payload }) => {
      state.sendCodeError = null;
    });
    builder.addCase(clearCheckCodeError, (state, { payload }) => {
      state.checkCodeError = null;
    });
  }
});

const loginByPhoneReducer = loginByPhoneSlice.reducer;
export type LoginByPhoneReducer = ReturnType<typeof loginByPhoneReducer>;
export default loginByPhoneReducer;
