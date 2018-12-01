import {ADD_FLASH, DISMISS_FLASH, SET_CURRENT_USER} from './types';
import {baseURL} from "../config";
import jwt from 'jsonwebtoken';
import {setCookie} from '../utils/cookie';

const header = {
    "Content-Type": "application/json",
    'Accept': 'application/json'
};


export const assignFlashMsg = (info) => ({
  type: ADD_FLASH,
  payload: info
});

export const dismissFlashMsg = () => ({
  type: DISMISS_FLASH
});

export const signUpUser = (user) => (dispatch) => {
    fetch(`${baseURL}/user/add`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: header
    })
    .then((response) => response.json())
    .then((response) => {
        if (response.status === 'success') {
          dispatch(assignFlashMsg({
            text: 'You sign up successfully. Now you can login',
            type: 'success'
          }))
        } else if (response.status === 'email exists') {
          dispatch(assignFlashMsg({
            text: 'User with this email already exists',
            type: 'danger'
          }))
        }
    });
};

export const setCurrentUser = (details) => ({
  type: SET_CURRENT_USER,
  payload: details
});

export const loginUser = (user) => (dispatch) => {
	return fetch(`${baseURL}/user/auth`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: header
	})
    .then((response) => response.json())
    .then((response) => {
        if (response.status === 'no user') {
		  dispatch(assignFlashMsg({
			text: 'User with this email does not exist',
			type: 'danger'
		  }));
		  return response.status;
		} else if (response.status === "wrong password") {
		  dispatch(assignFlashMsg({
			text: 'Email and password do not match',
			type: 'danger'
		  }));
		  return response.status;
		} else if (response.token) {
          const token = response.token;
		  setCookie('jwttoken', token,  2);
		  dispatch(setCurrentUser(jwt.decode(token)));
	        return 'ok';
		}
    })
	.then((status) => status);

};


