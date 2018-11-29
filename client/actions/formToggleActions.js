import {TOGGLE_FPASS, TOGGLE_LOGIN, TOGGLE_SIGNUP} from './types';

export const toggleLogin = () => ({
	type: TOGGLE_LOGIN
});

export const toggleSignUp = () => ({
	type: TOGGLE_SIGNUP
});

export const toggleFpass = () => ({
	type: TOGGLE_FPASS
});