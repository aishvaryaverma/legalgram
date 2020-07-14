import { SET_TOKEN, LOAD_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
	authError: false,
	user: null,
	userLoading: true,
	tokenLoading: true,
	token: null
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch(type) {
		case SET_TOKEN:
			localStorage.setItem('token', payload);
			// localStorage.setItem('tokenValid', new Date().getTime() + (259200 * 1000));
			return {
				...state,
				tokenLoading: false,
				token: payload
			}
		case LOAD_USER:
			return {
				...state,
				userLoading: false,
				user: payload
			}
		case AUTH_ERROR:
			localStorage.removeItem('token');
			// localStorage.removeItem('tokenValid');
			return {
				...state,
				authError: true,
				user: null,
				userLoading: true,
				tokenLoading: true,
				token: null
			}
		default:
			return state
	}
}
