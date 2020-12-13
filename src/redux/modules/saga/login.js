
import { put, call, takeEvery } from 'redux-saga/effects';
import * as loginAxios from 'api/loginAxios';
import { Map } from 'immutable';

const LOGIN = 'login/LOGIN';
const LOCAL_LOGIN = 'login/LOCAL_LOGIN';
const LOCAL_RESET = 'login/LOCAL_RESET';
const RESET = 'login/RESET';

const initialState = Map ({
    email: '',
    nickname: '',
    message: '',
    token: ""
});

export const loginRequest = ({ email, password })=> ({ type: LOCAL_LOGIN, payload:{ email, password }});
export const login = (data, message, token)=> ({ type: LOGIN, payload:{ data, message, token }});
export const reset = ()=> ({ type: RESET });
export const resetRequest = ()=> ({ type: LOCAL_RESET });

export function* localLoginSaga(action) {
    try {
        const result = yield call(loginAxios.login, action.payload);
        yield put(login(result.data.data, result.data.message, result.data.token));
        localStorage.setItem("token", result.data.token);
        localStorage.setItem('nickname', result.data.data.nickname)
    } catch(e) {
        console.log('login error');
    }
}
export function* resetSaga() {
    yield put(reset());
}

export function* watchLogin() {
    yield takeEvery(LOCAL_LOGIN, localLoginSaga);
    yield takeEvery(LOCAL_RESET, resetSaga)
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            if(action.payload.message === "login success") {
                return(
                    state.set('email', action.payload.data.email)
                         .set('nickname', action.payload.data.nickname)
                         .set('message', action.payload.message)
                         .set('token', action.payload.token)
                );
            }
            else{
                return(
                    state.set('message', action.payload.message)
                );
            }
        case RESET:
            return initialState
        default: 
            return state;
    }
}

