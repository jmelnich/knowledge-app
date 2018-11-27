import {ADD_FLASH, DISMISS_FLASH, SET_CURRENT_USER} from './types';
import {baseURL} from "../config";

const assignFlashMsg = (info) => ({
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
        headers: {"Content-Type": "application/json",
            'Accept': 'application/json'
        }
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

export const loginUser = (user) => (dispatch) => {
	fetch(`${baseURL}/user/auth`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {"Content-Type": "application/json",
			'Accept': 'application/json'
		}
	})
    .then((response) => response.json())
    .then((response) => {
        console.log(response.status);
    });

};
