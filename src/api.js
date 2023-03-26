import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:443/',
  headers: {
    common: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  }
});

let loading = false
api.interceptors.request.use(
  function (config) {
    loading = true

    // Do something before sending the request
    console.log('Request sent with config:', config);
    return config;
  },
  function (error) {
    // Do something with the request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  function (config) {
    loading = false

    // Do something before sending the request
    console.log('Response sent with config:', loading);
    return config;
  },
  function (error) {
    // Do something with the request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default api;