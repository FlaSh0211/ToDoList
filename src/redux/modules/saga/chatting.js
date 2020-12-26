import { put, call, take, takeEvery } from 'redux-saga/effects';
import * as chattingAxios from 'api/chattingAxios'

const CREATE = 'chatting/CRAETE';
const OUT = 'chatting/OUT';

export const createRoom = ({ email })=> ({ type: CREATE, payload: email });
export const deleteRoom = ({ email })=> ({ type: OUT, payload: email });

function createRoomSaga() {

}
function deleteRoomSaga() {
    
}

export function* watchChatting() {
    takeEvery();
    takeEvery();
}
export default function chattingReducer(state= initialState, action) {
    switch(action.type) {
        case CREATE
    }
}