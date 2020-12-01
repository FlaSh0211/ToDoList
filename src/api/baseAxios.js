import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const instance = axios.create({
    baseURL: process.env.REACT_APP_baseUrl,
})

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
        },
    error => Promise.reject(error)
  );

export default instance;
