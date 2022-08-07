import { HttpClient } from '../../network';
import { LoginPayload } from '../../slices';

export default {
	auth: {
		login: (params: LoginPayload): Promise<any> => {
			return new Promise<any>(async (resolve, reject) => {
				try {
					const { data, status } =
						await HttpClient.post(
							'/auth/signin',
							params
						);
					resolve({ data: data.results, status });
				} catch (error) {
					reject(error);
				}
			});
		},
		logout: (params: { refreshToken: string }): Promise<any> => {
			return new Promise<any>(async (resolve, reject) => {
				try {
					const { data, status } =
						await HttpClient.post(
							'/auth/logout',
							params
						);
					resolve({ data: data.results, status });
				} catch (error) {
					reject(error);
				}
			});
		},
		signup: (params: LoginPayload): Promise<any> => {
			return new Promise<any>(async (resolve, reject) => {
				try {
					const { data, status } =
						await HttpClient.post(
							'/auth/signup',
							params
						);
					resolve({ data: data.results, status });
				} catch (error) {
					reject(error);
				}
			});
		},
		refreshToken: (params: {
			refreshToken: string;
		}): Promise<any> => {
			return new Promise<any>(async (resolve, reject) => {
				try {
					const { data, status } =
						await HttpClient.post(
							'/auth/refreshtoken',
							params
						);
					resolve({ data: data.results, status });
				} catch (error) {
					reject(error);
				}
			});
		},
	},
};
