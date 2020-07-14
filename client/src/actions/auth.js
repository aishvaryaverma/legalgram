import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_TOKEN, LOAD_USER, AUTH_ERROR } from './types';

export const setToken = token => dispatch => {
	dispatch({
		type: SET_TOKEN,
		payload: token
	});
};

export const loadUser = mobile => async dispatch => {
	dispatch({type: AUTH_ERROR});
	
	// const valid = new Date(parseInt(localStorage.getItem('tokenValid'))) > new Date();
	// if(localStorage.token && valid) {
		// try {
		// 	const token = localStorage.getItem('token');
		// 	dispatch(setToken(token));
	
		// 	const userData = jwt.decode(token);
		// 	dispatch({
		// 		type: LOAD_USER,
		// 		payload: userData
		// 	});
		// } catch (err) {
		// 	console.error(err);
		// 	dispatch({type: AUTH_ERROR});
		// }
	// } else {
		const config = {
			headers: { 'Content-Type': 'application/json' }
		};
		const body = JSON.stringify({mobile});

		try {
			const res = await axios.post('/api/auth', body, config);
			const token = res.data.token;

			dispatch(setToken(token));
			
			const userData = jwt.decode(token);
			dispatch({
				type: LOAD_USER,
				payload: userData
			});
		} catch (err) {
			console.error(err);
			dispatch({type: AUTH_ERROR});
		}
	// }
};
