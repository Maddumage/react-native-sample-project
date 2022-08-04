import axios, { AxiosError } from 'axios';

// configure axios instance
const httpClient = axios.create({
  baseURL: `http://localhost:4001/api/v1`,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${'ddd'}`,
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
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response?.data);
  },
);

export default httpClient;
