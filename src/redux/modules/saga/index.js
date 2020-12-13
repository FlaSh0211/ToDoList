import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import loginReducer, { watchLogin } from './login';
import registerReducer, { watchRegister } from './register';
import socketReducer, { watchSocket } from './socket';
import todolistReducer, { watchTodoList } from './todolist';

const rootReducer = combineReducers({ 
  loginReducer, 
  registerReducer, 
  todolistReducer, 
  socketReducer 
});

export function* rootSaga() {
  yield all([
    watchLogin(), 
    watchRegister(), 
    watchTodoList(),
    watchSocket()
  ]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;