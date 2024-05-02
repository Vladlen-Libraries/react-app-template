import { createSelector } from '@reduxjs/toolkit';
import { authStateSelector } from '../selectors';

const loginStateSelector = createSelector(
  authStateSelector,
  (state) => state.loginByPhone
);

export const loginStepSelector = createSelector(
  loginStateSelector,
  (state) => state.step
);

export const loginIsCodeSendingSelector = createSelector(
  loginStateSelector,
  (state) => state.isCodeSending
);

export const loginIsCodeCheckingSelector = createSelector(
  loginStateSelector,
  (state) => state.isCodeChecking
);

export const loginCredentialsSelector = createSelector(
  loginStateSelector,
  (state) => state.credentials
);

export const loginSendCodeErrorSelector = createSelector(
  loginStateSelector,
  (state) => state.sendCodeError
);

export const loginCheckCodeErrorSelector = createSelector(
  loginStateSelector,
  (state) => state.checkCodeError
);

export const loginCodeSentAtSelector = createSelector(
  loginStateSelector,
  (state) => state.codeSentAt
);

export const loginIsRetriesLimitErrorShownSelector = createSelector(
  loginStateSelector,
  (state) => state.retriesLimitErrorVisibility
);
