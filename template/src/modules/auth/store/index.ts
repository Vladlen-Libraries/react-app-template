import { combineReducers } from 'redux';
import loginByPhoneReducer from './login-by-phone';
import sessionReducer from './session';

const authReducer = combineReducers({
  session: sessionReducer,
  loginByPhone: loginByPhoneReducer,
});

export type AuthState = ReturnType<typeof authReducer>;
export default authReducer;
