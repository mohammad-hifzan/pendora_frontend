import {getCsrf} from './csrf'
import axios from 'axios';
import store from '../../user_auths/store'
import { login } from '../../user_auths/authenticationSlice';
const API_URL = process.env.REACT_APP_BACKEND_URL;


export const post = async (path, data) => {
	const csrfToken = await getCsrf(); // Get CSRF token
	const response = await axios.post(
		`${API_URL}/${path}`,
		data,
		{
		  headers: {
		    'Content-Type': 'multipart/form-data',
		    'X-CSRF-Token': csrfToken,
		  },
		  withCredentials: true, // Include cookies
		}
	);
	return response
}

export const get = async (path, data={}) => {
	console.log('backend: ' + API_URL)
	const response = await axios.get(
		`${API_URL}/${path}`,
		{
		  params: data,
		  withCredentials: true, // Include cookies
		}
	);
	return response
}

export const put = async (path, data) => {
	const csrfToken = await getCsrf(); // Get CSRF token
	const response = await axios.put(
		`${API_URL}/${path}`,
		data,
		{
		  headers: {
		    'Content-Type': 'multipart/form-data',
		    'X-CSRF-Token': csrfToken,
		  },
		  withCredentials: true, // Include cookies
		}
	);
	return response
}

export const getUser = () => {
  return store.getState().auth.user || {};
}

export const SubmitLogin = async (formData, dispatch, navigate) => {
    try {
        const response = await post(`v2/login`, formData);
		if (window.location.pathname.includes('/admin')) {
			if (response != 'error' && response.status == 201) {
				dispatch(login(response.data.user));
				navigate('/admin/companies');
			} else {
				navigate('/admin/login');
			}
		} else {
			if (response != 'error' && response.status == 201) {
				dispatch(login(response.data.user));
				navigate('/');
			} else {
				navigate('/login');
			}
		}
    } catch (error) {
        console.error('Submission error:', error);
        return 'error';
    }
}