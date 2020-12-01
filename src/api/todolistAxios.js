import axios from './baseAxios';

const token = localStorage.getItem('token')

export const create = ({ content, type, date })=> axios.post('api/todolist/create', { content, type, date });
export const update = ({ _id, content })=> axios.put('api/todolist/update', { _id, content });
export const deletePost = ({ _id })=> axios.put('api/todolist/deleteList', { _id });
export const deleteDayPosts = ({ date })=> axios.put('api/todolist/deleteDay', { date });
export const getPosts = ()=> axios.post('api/todolist/get',{headers: { Authorization: `Bearer ${token}` }});