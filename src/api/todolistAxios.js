import axios from './baseAxios';

export const create = ({ email, content, type })=> axios.post('/login', { email, content, type });
export const update = ({ email, id, content })=> axios.post('/login', { email, id, content });
export const deletePost = ({ id })=> axios.post('/login', { id });
export const deleteDayPosts = ({ date })=> axios.put('/login', { date });
export const getPosts = ({ username })=> axios.post('/login', { username });