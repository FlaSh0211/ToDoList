import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loginReducer, { watchLogin } from './login';
import registerReducer, { watchRegister } from './register';
import todolistReducer, { watchTodoList } from './todolist';

const rootReducer = combineReducers({ loginReducer, registerReducer, todolistReducer });

export function* rootSaga() {
  yield all([watchLogin(), watchRegister(), watchTodoList()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;