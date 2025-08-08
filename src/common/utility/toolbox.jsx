import {getCsrf} from './csrf'
import axios from 'axios';
import store from '../../user_auths/store'
import { login } from '../../user_auths/authenticationSlice';
import { toast } from 'react-toastify';
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

const handleAuthResponse = (response, dispatch, navigate, successMsg, adminRedirect, userRedirect, adminPath, userPath) => {
	if (window.location.pathname.includes("admin")) {
		if (response !== 'error' && response.status === 201) {
			dispatch(login(response.data.user));
			navigate(adminRedirect);
			customToast(successMsg, "success", "light");
		} else {
			navigate(adminPath);
		}
	} else {
		if (response !== 'error' && response.status === 201) {
			dispatch(login(response.data.user));
			navigate(userRedirect);
			customToast(successMsg, "success", "dark");
		} else {
			navigate(userPath);
		}
	}
};

export const SubmitLogin = async (formData, dispatch, navigate) => {
	try {
		const response = await post(`v2/login`, formData);
		handleAuthResponse(
			response,
			dispatch,
			navigate,
			"Login Successful!",
			"/admin/companies",
			"/",
			"/admin/login",
			"/login"
		);
	} catch (error) {
		console.error('Submission error:', error);
		customToast("Login Failed!", "error", "dark");
		return 'error';
	}
};

export const SubmitSignUp = async (formData, dispatch, navigate) => {
	try {
		const response = await post(`v2/signup`, formData);
		handleAuthResponse(
			response,
			dispatch,
			navigate,
			"Registration Successful!",
			"/admin/companies",
			"/",
			"/admin/login",
			"/login"
		);
	} catch (error) {
		console.error('Submission error:', error);
		customToast("Registration Failed!", "error", "dark");
		return 'error';
	}
};

export const customToast = (message, type = 'success', theme = 'light') => {
	const toastTypes = {
        success: toast.success,
        error: toast.error,
        warning: toast.warning,
        info: toast.info,
        default: toast
    };
    const showToast = toastTypes[type] || toastTypes.default;
    showToast(message, {
        theme: "dark",
        style: { opacity: 0.8 }
    });
}