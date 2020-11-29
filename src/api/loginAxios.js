import axios from './baseAxios';

export const login = ({ email, password })=> axios.post('api/auth/login', { email, password });