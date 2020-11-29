import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const instance = axios.create({
    baseURL: process.env.REACT_APP_baseUrl,
})
export default instance;