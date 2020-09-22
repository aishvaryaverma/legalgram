import axios from 'axios';
import { toast } from 'react-toastify';
import setAuthToken from '../utils/setAuthToken';
import { isTokenExpired } from '../utils/functions';
// redux
import { setAlert } from './alert';
import { SET_TOKEN, LOAD_USER, AUTH_ERROR } from './types';

export const setToken = token => dispatch => {
	dispatch({
		type: SET_TOKEN,
		payload: token
	});
};

export const loadUser = () => async dispatch => {
	const valid = await isTokenExpired(localStorage.token);

	if(valid) {
		const token = localStorage.getItem('token');
		const configs = {headers: {'Authorization': token}};
		const res = await axios.get('/api/users/me/', configs);
		const { user } = res.data.data;
		
		// update state
		dispatch(setToken(token));
		dispatch({
			type: LOAD_USER,
			payload: user
		});
	} else {
		dispatch({ type: AUTH_ERROR });
	}
};

export const register = (formData, push) => async dispatch => {
	try {
		const body = JSON.stringify(formData);
		const configs = { headers: {'Content-Type': 'application/json'} };
		const res = await axios.post('/api/users/register', body, configs);
		const { token } = res.data.data;
		
		await dispatch(sentOTP(token));
		
		sessionStorage.setItem('otpToken', token);
		sessionStorage.setItem('mobile', formData.mobile);

		// update state
		dispatch({
			type: SET_TOKEN,
			payload: token
		});

		setTimeout(() => push('/verify-otp'), 100);
	} catch (err) {
		const message = err.response.data.errorMsg;
		dispatch(setAlert(message, 'error'));

		const invalid = err.response.data.inputErrors;
		if(invalid) {
			Object.keys(invalid).forEach(key => {
				toast.error(invalid[key]);
			});	
		}
	}
};

export const sentOTP = token => async dispatch => {
	try {
		setAuthToken(token);
		const res = await axios.get('/api/mobile/send-otp');
		const { message } = res.data;
		return new Promise(resolve => {
			resolve(message);
		});
	} catch (err) {
		console.log(err.response.data);
		const message = err.response.data.errorMsg;
		dispatch(setAlert(message, 'error'));
		return new Promise(resolve => {
			resolve(message);
		});
	}
};

export const verifyOTP = (token, otp, history) => async dispatch => {
	try {
		setAuthToken(token);
		const configs = { headers: { 'Content-Type': 'application/json'}};
		const body = JSON.stringify({otp});
		const res = await axios.post('/api/mobile/verify-otp', body, configs);
		const { message } = res.data;
		
		history.push('/my-profile');
		toast.success(message);

	} catch (err) {
		console.log(err.response.data);
		const message = err.response.data.errorMsg;
		dispatch(setAlert(message, 'error'));
	}
};
