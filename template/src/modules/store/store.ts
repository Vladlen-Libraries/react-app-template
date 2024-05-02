import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import authReducer from '../auth/store';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory()
  });

export const rootReducer = combineReducers({
  auth: authReducer,
  router: routerReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
