import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://evader-backend.herokuapp.com/',
  // baseURL: 'http://localhost:8000/',
});

const { CancelToken } = axios;

export { CancelToken };
export default axiosInstance;
