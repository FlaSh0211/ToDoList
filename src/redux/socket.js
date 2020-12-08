import { put, call, takeEvery } from 'redux-saga/effects';
import { Map } from 'immutable';
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000/");

export function* watchSocket() {

}

export default function socketReducer() {

}
