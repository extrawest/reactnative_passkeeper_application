import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         CONFIRM_PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER,
         LOGOUT_USER,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_FAIL,
         REGISTER_USER
       } from '../actions/types';

const INITIAL_STATE = {
      email: '',
      password: '',
      ConfirmPassword: '',
      user: null,
      error: '',
      loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, ConfirmPassword: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'login failed!', password: '', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, error: '' };
    case REGISTER_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
