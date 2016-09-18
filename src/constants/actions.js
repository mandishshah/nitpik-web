import createActions from '../utils/create-actions';

export const FORM_RESET = 'redux-form/RESET';

export const LOAD_USER_NITS = {
  PENDING: 'LOAD_USER_NITS_PENDING',
  SUCCESS: 'LOAD_USER_NITS_SUCCESS',
  ERROR: 'LOAD_USER_NITS_ERROR',
};

export const NIT_ACTIONS = createActions('App', [
  'LOAD_USER_NITS_PENDING',
  'LOAD_USER_NITS_SUCCESS',
  'LOAD_USER_NITS_ERROR',
  'SAVE_USER_NIT_DB_SUCESS',
  'SAVE_USER_NIT_DB_ERROR',
  'SAVE_USER_NIT_STATE',
]);

export const AUTH_ACTIONS = createActions('App', [
  'LOGIN_USER_PENDING',
  'LOGIN_USER_SUCCESS',
  'LOGIN_USER_ERROR',
  'LOGOUT_USER',
  'GET_USER_INFO',
  'GET_USER_INFO_SUCCESS',
  'GET_USER_INFO_ERROR',
]);
