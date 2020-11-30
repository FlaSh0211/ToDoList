import axios from './baseAxios';

export const create = ({ email, content, type })=> axios.post('api/todolist/create', { email, content, type });
export const update = ({ email, id, content })=> axios.post('api/todolist/update', { email, id, content });
export const deletePost = ({ id })=> axios.post('api/todolist/deleteList', { id });
export const deleteDayPosts = ({ date })=> axios.put('api/todolist/deleteDay', { date });
export const getPosts = ()=> axios.post('api/todolist/get');