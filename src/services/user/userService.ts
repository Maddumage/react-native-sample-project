import { HttpClient } from '../../network';

export default {
	user: {
		getProfile: (params: any): Promise<any> => {
			return new Promise<any>(async (resolve, reject) => {
				try {
					const { data, status } =
						await HttpClient.get(
							'/user/profile',
							{}
						);
					resolve({ data: data.results, status });
				} catch (error) {
					reject(error);
				}
			});
		},
	},
};
