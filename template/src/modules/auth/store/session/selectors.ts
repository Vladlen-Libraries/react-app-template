import { createSelector } from '@reduxjs/toolkit';
import { authStateSelector } from '../selectors';

const sessionStateSelector = createSelector(
  authStateSelector,
  (state) => state.session
);

export const isAuthCheckedSelector = createSelector(
  sessionStateSelector,
  (state) => state.isAuthChecked
);

export const currentUserSelector = createSelector(
  sessionStateSelector,
  (state) => state.user
);

export const userSessionTokenSelector = createSelector(
  sessionStateSelector,
  (state) => state.sessionToken
);

export const userSessionIsLoggedSelector = createSelector(
  sessionStateSelector,
  (state) => state.isLogged
);

export const userRoleSelector = createSelector(
  currentUserSelector,
  (state) => state?.role
);
