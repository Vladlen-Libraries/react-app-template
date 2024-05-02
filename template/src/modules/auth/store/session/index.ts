import { createSlice } from '@reduxjs/toolkit';
import { User } from 'modules/users/domain/interfaces/User';
import { checkAuthorization, logout } from './actions';
import { PREFIX } from './constants';
import { setSuccessAuthResponse, setCurrentUser } from './simple-actions';

export type State = {
  user: User | null;
  sessionToken: string | null;
  isAuthChecked: boolean;
  isLogged: boolean;
};

const sessionSlice = createSlice<State, {}>({
  name: PREFIX,
  initialState: {
    user: null,
    sessionToken: null,
    isAuthChecked: false,
    isLogged: false
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      checkAuthorization.fulfilled,
      (state: State, { payload }) => {
        const { token, ...user } = payload || {};
        state.user = (user as User) || null;
        state.sessionToken = token || null;
        state.isAuthChecked = true;
      }
    );
    builder.addCase(checkAuthorization.rejected, (state: State) => {
      state.isAuthChecked = true;
    });

    // region logout
    builder.addCase(logout.fulfilled, (state: State) => {
      state.user = null;
      state.sessionToken = null;
      state.isAuthChecked = true;
      state.isLogged = false;
    });
    // endregion

    builder.addCase(setCurrentUser, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(setSuccessAuthResponse, (state, { payload }) => {
      const { token, ...user } = payload;
      state.user = user;
      state.sessionToken = token;
      state.isLogged = true;
    });
  }
});

const sessionReducer = sessionSlice.reducer;
export type SessionReducer = ReturnType<typeof sessionReducer>;
export default sessionReducer;
