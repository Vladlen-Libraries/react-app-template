import { createAction } from '@reduxjs/toolkit';
import { PREFIX } from './constants';

export const setRetriesLimitErrorVisibility = createAction<boolean>(
  `${PREFIX}/setRetriesLimitErrorVisibility`
);

export const setLoginStep = createAction<'phone' | 'code'>(
  `${PREFIX}/setLoginStep`
);

export const clearSendCodeError = createAction<void>(
  `${PREFIX}/clearSendCodeError`
);

export const clearCheckCodeError = createAction<void>(
  `${PREFIX}/clearCheckCodeError`
);
