import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const instance = axios.create({
    baseURL: process.env.baseUrl,
})
export default instance;