import axios from './baseAxios';

export const create = ({ email, content, type })=> axios.post('/todolist/create', { email, content, type });
export const update = ({ email, id, content })=> axios.post('/todolist/update', { email, id, content });
export const deletePost = ({ id })=> axios.post('/todolist/deleteList', { id });
export const deleteDayPosts = ({ date })=> axios.put('/todolist/deleteDay', { date });
export const getPosts = ({ email })=> axios.post('api/todolist/get', { email });