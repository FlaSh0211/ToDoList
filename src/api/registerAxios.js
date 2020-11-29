import axios  from './baseAxios';

export const register = ({ email, password, nickname })=> axios.post('api/auth/register', { email, password, nickname });