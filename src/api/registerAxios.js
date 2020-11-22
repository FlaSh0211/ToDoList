import axios from './baseAxios';

export const register = ({ email, password, nickname })=> axios.post('/login', { email, password, nickname });