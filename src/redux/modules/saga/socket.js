
  
import { put, call, takeEvery, take, fork } from 'redux-saga/effects';
import { socketController } from 'socket';
import { io } from 'socket.io-client';

const initialState = {
    socket: null,
    message: "",

}
const CONNECT = 'socket/connect';
const DISCONNECT = 'socket/disconnect';
const SETMESSAGE = 'socket/setMessage';
const START = 'socket/start';
const END = 'socket/end';

export const startChat = ({ email })=>({ type: START, payload:{ email }});
export const leaveChat = ()=> ({ type: DISCONNECT });
export const setMessage = ({ message })=>({ type: SETMESSAGE, payload: { message }});
export const connect = ({ socket })=> ({ type: CONNECT, payload: { socket }})

export function* connectSocket(email) {
    try {
        const socket = io("http://localhost:4000", {
            query: {
                email: email,
            }
        });
        return socket;
    }
    catch(err) {
        setMessage({ message: err.message })
    }
}

export function* watchSocket() {
    while(true) {
        // SOCKET CONNECT
        const { email } = yield take(START);
        const socket = yield call(connectSocket, email);
        if(socket) {
            yield put(connect({ socket }));
            socketController(socket);
            console.log('123123123123')
            // SOCKET DISCONNECT
            yield take(END);
            yield put(leaveChat())
        }
    }  
}


export default function socketReducer(state = initialState, action) {
    switch(action.type) {
        case CONNECT:
            const { socket } = action.payload 
            return {...state, socket: socket, message: 'socket connected'}
        case DISCONNECT:
            return initialState;
        case setMessage:
            const { message } = action.payload 
            return {...state, message: message}
        default: return state
    }
}

