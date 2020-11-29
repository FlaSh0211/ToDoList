
import { put, call, takeEvery } from 'redux-saga/effects';
import * as registerAxios from 'api/registerAxios';
import { Map } from 'immutable';

const REGISTER = 'register/REGISTER';

const LOCAL_REGISTER = 'register/LOCAL_REGISTER';

const initialState = Map ({
    email: '',
    message: '',
    nickname: '',

});

export const registerRequest = ({ email, password, nickname })=> ({ type: LOCAL_REGISTER, payload:{ email, password, nickname }});
export const register = (data, message)=> ({ type: REGISTER, payload: { data, message }});

export function* localRegisterSaga(action) {
    try {
        const result = yield call(registerAxios.register, action.payload);
        yield put(register(result.data.data, result.data.message));
    } catch(e) {
        console.log('register error');
    }
}
export function* watchRegister() {
    yield takeEvery(LOCAL_REGISTER, localRegisterSaga);
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            if(action.payload.message == "register success") {
                return(
                    state.set('message', action.payload.message)
                         .set('email', action.payload.data.email)
                         .set('nickname', action.payload.data.nickname)
                );
            }
            else {
                return(
                    state.set('message', action.payload.message)
                         .set('email', "")
                         .set('nickname', "")
                )
            }
        default: 
            return state;
    }
}

