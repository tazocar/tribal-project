import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod',
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
  },
});

export default axiosClient;
