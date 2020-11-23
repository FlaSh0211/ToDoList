
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
export const register = ({ email, password, nickname })=> ({ type: REGISTER, payload:{ email, password, nickname }});

export function* localRegisterSaga(action) {
    try {
        const data = yield call(registerAxios.register, action.payload);
        yield put(register(data));
    } catch(e) {
        console.log('register error');
        // yield put(register(data));
    }
}
export function* watchRegister() {
    yield takeEvery(LOCAL_REGISTER, localRegisterSaga);
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            return(state.setIn('message', action.payload.message));
        default: 
            return state;
    }
}

