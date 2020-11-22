
import { put, call, takeEvery } from 'redux-saga/effects';
import * as loginAxios from 'api/loginAxios';
import { Map } from 'immutable';
const LOGIN = 'login/LOGIN';

const LOCAL_LOGIN = 'login/LOCAL_LOGIN';

const initialState = Map ({
    username: '',
    nickname: '',
    password: '',
    message: '',
});

export const loginRequest = ({ username, password })=> ({ type: LOCAL_LOGIN, payload:{ username, password }});
export const login = ({ username, password })=> ({ type: LOGIN, payload:{ username, password }});

export function* localLoginSaga(action) {
    try {
        // const data = yield call(loginAxios.login, action.payload);
        // yield put(login(data));
        console.log(action.payload);
        yield put(login(action.payload));
    } catch(e) {
        console.log('login error');
        // yield put(login(data));
    }
}
export function* watchLogin() {
    yield takeEvery(LOCAL_LOGIN, localLoginSaga);
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload,'리덕스')
            return(
                state.set('username', action.payload.username)
                     .set('nickname', action.payload.nickname)
                     .set('message', action.payload.message)
            );
        default: 
            return state;
    }
}

