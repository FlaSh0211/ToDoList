
import { put, call, takeEvery } from 'redux-saga/effects';
import * as todolistAxios from 'api/todolistAxios';
import { Map } from 'immutable';

const CREATE = 'todolist/CREATE';
const DELETE_DAY = 'todolist/DELETE_DAY';
const UPDATE = 'todolist/UPDATE';
const DELETE_LIST = 'todolist/DELETE_LIST';
const GET_TODOLIST = 'todolist/GET_TODOLIST';
const RESET = 'login/RESET';

const LOCAL_RESET = 'login/LOCAL_RESE';
const LOCAL_CREATE = 'todolist/LOCAL_CREATE';
const LOCAL_DELETE_DAY = 'todolist/LOCAL_DELETE_DAY';
const LOCAL_UPDATE = 'todolist/LOCAL_UPDATE';
const LOCAL_DELETE_LIST = 'todolist/LOCAL_DELETE_LIST';
const LOCAL_GET_TODOLIST = 'todolist/LOCAL_GET_TODOLIST';

const initialState = Map ({
    data: [],
    date: [],
    message: ""
});

export const getTodoListRequest = ()=> ({ type: LOCAL_GET_TODOLIST });
export const updateTodoListRequest = ({ _id, content })=> ({ type: LOCAL_UPDATE, payload:{ _id, content }});
export const deleteDayTodoListRequest = ({ date })=> ({ type: LOCAL_DELETE_DAY, payload:{ date }});
export const deleteListTodoListRequest = ({ _id })=> ({ type: LOCAL_DELETE_LIST, payload:{ _id }});
export const createTodoListRequest = ({ content, type, date })=> ({ type: LOCAL_CREATE, payload:{ content, type, date }});
export const resetRequest = ()=> ({ type: LOCAL_RESET });

export const reset = ()=> ({ type: RESET });
export const getTodoList = (data, message, date)=> ({ type: GET_TODOLIST, payload: { data, message, date }});
export const updateTodoList = ({ _id, content })=> ({ type: UPDATE, payload:{ _id, content }});
export const deleteDayTodoList = ({ date })=> ({ type: DELETE_DAY, payload:{ date }});
export const deleteListTodoList = ({ _id })=> ({ type: DELETE_LIST, payload:{ _id }});
export const createTodoList = (data, message, date)=> ({ type: CREATE, payload:{ data, message, date }});

export function* getTodoListSaga() {
    try {
        const result = yield call(todolistAxios.getPosts);
        let date = [... new Set(result.data.data.map(el => el.dateString))];
        yield put(getTodoList(result.data.data, result.data.message, date));
    } catch(e) {
        console.log('get list error');
    }
}

export function* resetSaga() {
    yield put(reset());
}

export function* createTodoListSaga(action) {
    try {
        const result = yield call(todolistAxios.create, action.payload);
        let date = [... new Set(result.data.data.map(el => el.dateString))];
        yield put(createTodoList(result.data.data, result.data.message, date));
    } catch(e) {
        console.log('create list error');
    }
}
export function* updateTodoListSaga(action) {
    try {
        const result = yield call(todolistAxios.update, action.payload);
        yield put(updateTodoList(result.data.data, result.data.message));
    } catch(e) {
        console.log('update list error');
    }
}
export function* deleteDayTodoListSaga(action) {
    try {
        yield call(todolistAxios.deleteDayPosts, action.payload);
        yield put(deleteDayTodoList(action.payload));
    } catch(e) {
        console.log('delete day list error');
    }
}
export function* deleteListTodoListSaga(action) {
    try {
        yield call(todolistAxios.deletePost, action.payload);
        yield put(deleteListTodoList(action.payload));
    } catch(e) {
        console.log('delete one list error');
    }
}


export function* watchTodoList() {
    yield takeEvery(LOCAL_CREATE, createTodoListSaga);
    yield takeEvery(LOCAL_DELETE_DAY, deleteDayTodoListSaga);
    yield takeEvery(LOCAL_UPDATE, updateTodoListSaga);
    yield takeEvery(LOCAL_GET_TODOLIST, getTodoListSaga);
    yield takeEvery(LOCAL_DELETE_LIST, deleteListTodoListSaga);
    yield takeEvery(LOCAL_RESET, resetSaga);
    
}

export default function todolistReducer(state = initialState, action) {
    switch (action.type) {
        case RESET:
            return initialState
        case CREATE:
            return(
                state.set('data', action.payload.data)
                     .set('date', action.payload.date)
                     .set('message', action.payload.message)
            );
         case UPDATE:
             let updateId = state.get('data').indexOf(state.get('data').find(el => el._id === action.payload._id? el: null))
            return(
                state.setIn(['data',updateId,'content'], action.payload.content)
            );
         case DELETE_DAY:
            let result_delete_day = state.get('data').filter(el => el.date !== action.payload.date)
            let dateResult = state.get('date').filter(el => el !== action.payload.date);
            return(
                state.set('data', result_delete_day)
                     .set('date', dateResult)
               
            );
         case DELETE_LIST:
            let result_delete_list = state.get('data').filter(el => el._id !== action.payload._id);
            return(
                state.set('data', result_delete_list)
            );
         case GET_TODOLIST:
            return(
                state.set('data', action.payload.data)
                     .set('date', action.payload.date)
                     .set('message', action.payload.message)
            );
        default: 
            return state;
    }
}

