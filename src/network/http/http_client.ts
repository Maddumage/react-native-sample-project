import { AuthData } from './../../interfaces/auth/auth_data';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import * as AxiosLogger from 'axios-logger';

const getAuthToken = async (): Promise<string> => {
	try {
		const authData = await EncryptedStorage.getItem('@AuthData');
		if (authData) {
			const { accessToken }: AuthData = JSON.parse(authData);
			return accessToken;
		}
		return '';
	} catch (error) {
		return '';
	}
};

// configure axios instance
const httpClient = axios.create({
	baseURL: `http://localhost:4001/api/v1`,
	timeout: 5000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	transformResponse: [
		function (data) {
			let response;
			try {
				response = data ? JSON.parse(data) : {};
			} catch (error) {
				throw Error(JSON.stringify(error));
			}
			return response;
		},
	],
});

// Add a request interceptor
httpClient.interceptors.request.use(
	async function (config: AxiosRequestConfig) {
		// Do something before request is sent
		const token = await getAuthToken();
		config.headers = { Authorization: `Bearer ${token}` };
		return AxiosLogger.requestLogger(config, { headers: true });
	},
	function (error: AxiosError) {
		// Do something with request error
		return AxiosLogger.errorLogger(error.response?.data as any, {
			headers: true,
		});
	}
);

// Add a response interceptor
httpClient.interceptors.response.use(
	function (response: AxiosResponse) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return AxiosLogger.responseLogger(response);
	},
	function (error: AxiosError) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		// return Promise.reject(error.response?.data);
		return AxiosLogger.errorLogger(error.response?.data as any);
	}
);

export default httpClient;
