import { SET_TOKEN, LOAD_USER, AUTH_ERROR, LOGOUT } from '../actions/types';

const initialState = {
	isAuthenticated: null,
	user: null,
	token: null,
	userLoading: true,
	tokenLoading: true
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch(type) {
		case SET_TOKEN:
			localStorage.setItem('token', payload);
			return {
				...state,
				tokenLoading: false,
				token: payload
			}
		case LOAD_USER:
			return {
				...state,
				isAuthenticated: true,
				userLoading: false,
				user: payload
			}
		case AUTH_ERROR:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
				userLoading: true,
				tokenLoading: true
			}
		default:
			return state
	}
}
