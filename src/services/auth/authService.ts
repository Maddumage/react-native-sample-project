import { HttpClient } from '../../network';
import { LoginPayload } from '../../slices';

export default {
  auth: {
    login: (params: LoginPayload): Promise<any> => {
      return new Promise<any>(async (resolve, reject) => {
        try {
          const { data, status } = await HttpClient.post('/auth/login', params);
          resolve({ data, status });
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};
