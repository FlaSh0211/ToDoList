import axios from './baseAxios';

export const create = ({ content, type })=> axios.post('api/todolist/create', { content, type });
export const update = ({ _id, content })=> axios.put('api/todolist/update', { _id, content });
export const deletePost = ({ _id })=> axios.put('api/todolist/deleteList', { _id });
export const deleteDayPosts = ({ date })=> axios.put('api/todolist/deleteDay', { date });
export const getPosts = ()=> axios.post('api/todolist/get');