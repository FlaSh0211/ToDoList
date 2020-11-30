
import { put, call, takeEvery } from 'redux-saga/effects';
import * as loginAxios from 'api/loginAxios';
import { Map } from 'immutable';
const LOGIN = 'login/LOGIN';

const LOCAL_LOGIN = 'login/LOCAL_LOGIN';
const SET_MESSAGE = 'login/SET_MESSAGE';

const initialState = Map ({
    email: '',
    nickname: '',
    message: 'no login',
});

export const loginRequest = ({ email, password })=> ({ type: LOCAL_LOGIN, payload:{ email, password }});
export const login = (data, message, token)=> ({ type: LOGIN, payload:{ data, message, token }});
export const setMessage = ()=> ({ type: SET_MESSAGE });

export function* localLoginSaga(action) {
    try {
        const result = yield call(loginAxios.login, action.payload);
        console.log(result.data.message)
        yield put(login(result.data.data, result.data.message, result.data.token));
        localStorage.setItem("token", result.data.token);
    } catch(e) {
        console.log('login error');
    }
}
export function* watchLogin() {
    yield takeEvery(LOCAL_LOGIN, localLoginSaga);
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            if(action.payload.message === "login success") {
                return(
                    state.set('email', action.payload.data.email)
                         .set('nickname', action.payload.data.nickname)
                         .set('message', action.payload.message)
                );
            }
            else{
                return(
                    state.set('message', action.payload.message)
                );
            }
        case SET_MESSAGE:
            return(state.set('message', "no login"));
        default: 
            return state;
    }
}

