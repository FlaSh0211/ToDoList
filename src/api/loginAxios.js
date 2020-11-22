import axios from './baseAxios';

export const login = ({ username, password })=> axios.post('/login', { username, password });