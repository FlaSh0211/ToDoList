import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const token = localStorage.getItem('token')

const instance = axios.create({
    baseURL: process.env.REACT_APP_baseUrl,
    headers: { Authorization: `Bearer ${token}` }
})
export default instance;