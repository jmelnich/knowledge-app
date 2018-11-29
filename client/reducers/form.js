import {TOGGLE_FPASS, TOGGLE_LOGIN, TOGGLE_SIGNUP} from '../actions/types';

const initialState = {
	login: false,
	signup: false,
	fpass: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case TOGGLE_LOGIN:
			return Object.assign({}, state, {
				login: !state.login,
				signup: false,
				fpass: false
			});
		case TOGGLE_SIGNUP:
			return Object.assign({}, state, {
				login: false,
				signup: !state.signup,
				fpass: false
			});
		case TOGGLE_FPASS:
			return Object.assign({}, state, {
				login: false,
				signup: false,
				fpass: !state.fpass
			});
		default:
			return state;
	}
}
