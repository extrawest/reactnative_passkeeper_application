import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         CONFIRM_PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER,
         LOGOUT_USER,
         REGISTER_USER,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_FAIL
       } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const ConfirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const RegisterUser = ({ email, password, ConfirmPassword }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    
    if (password !== ConfirmPassword) {
      RegisterUserFail(dispatch, 'Dismatch passwords');
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => RegisterUserSuccess(dispatch, user))
          .catch((error) => {
            RegisterUserFail(dispatch, error.message);
          });
    }
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
        });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const RegisterUserFail = (dispatch, error) => {
  dispatch({ type: REGISTER_USER_FAIL, payload: error });
};

const RegisterUserSuccess = (dispatch) => {
  dispatch({
        type: REGISTER_USER_SUCCESS
    });
    Actions.login();
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

export const logoutUser = () => {
  return (dispatch) => {
      dispatch({ type: LOGOUT_USER });
  };
};
