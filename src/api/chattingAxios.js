import axios from './baseAxios'

export const createRoom = ({ email })=> axios.post('api/chatting', { email: email });
export const deleteRoom = ({ email })=> axios.delete('api/chatting', { email: email });