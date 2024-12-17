import {getCsrf} from './csrf'
import axios from 'axios';
const API_URL = 'http://localhost:3000';

export const post = async (path, data) => {
	const csrfToken = await getCsrf(); // Get CSRF token
	const response = await axios.post(
		`${API_URL}/${path}`,
		data,
		{
		  headers: {
		    'Content-Type': 'application/json',
		    'X-CSRF-Token': csrfToken,
		  },
		  withCredentials: true, // Include cookies
		}
	);
	return response
}

export const get = async (path, data={}) => {
	const response = await axios.get(
		`${API_URL}/${path}`,
		{
		  params: data,
		  withCredentials: true, // Include cookies
		}
	);
	return response
}