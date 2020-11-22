
import { put, call, takeEvery } from 'redux-saga/effects';
import * as todolistAxios from 'api/todolistAxios';
import { Map } from 'immutable';

const CREATE = 'todolist/CREATE';
const DELETE_DAY = 'todolist/DELETE_DAY';
const UPDATE = 'todolist/UPDATE';
const DELETE_LIST = 'todolist/DELETE_LIST';
const GET_TODOLIST = 'todolist/GET_TODOLIST';

const LOCAL_CREATE = 'todolist/LOCAL_CREATE';
const LOCAL_DELETE_DAY = 'todolistLOCAL_/DELETE_DAY';
const LOCAL_UPDATE = 'todolist/LOCAL_UPDATE';
const LOCAL_DELETE_LIST = 'todolist/LOCAL_DELETE_LIST';
const LOCAL_GET_TODOLIST = 'todolist/LOCAL_GET_TODOLIST';

const demo =  [
    {
        id: 1,
        content: "투두리스트1",
        date: "2020-11-16",
        type: 'success',
    },
    {
        id: 2,
        content: "투두리스트2",
        date: "2020-11-16",
        type: 'success',
    },
    {
        id: 3,
        content: "투두리스트3",
        date: "2020-11-16",
        type: 'success',
    },
    {
        id: 4,
        content: "투두리스트4",
        date: "2020-11-19",
        type: 'success',
    },
    {
        id: 5,
        content: "투두리스트5",
        date: "2020-11-15",
        type: 'success',
    },
    {
        id:6,
        content: "투두리스트6",
        date: "2020-11-16",
        type: 'success',
    },
    {
        id: 7,
        content: "투두리스트7",
        date: "2020-11-16",
        type: 'success',
    }
];

const initialState = Map ([

]);

export const getTodoListRequest = ({ username })=> ({ type: LOCAL_GET_TODOLIST, payload:{ username }});
export const updateTodoListRequest = ({ id, content })=> ({ type: LOCAL_GET_TODOLIST, payload:{ id, content }});
export const deleteDayTodoListRequest = ({ date })=> ({ type: LOCAL_GET_TODOLIST, payload:{ date }});
export const deleteListTodoListRequest = ({ id })=> ({ type: LOCAL_GET_TODOLIST, payload:{ id }});
export const createTodoListRequest = ({ username, content, type, date })=> ({ type: LOCAL_GET_TODOLIST, payload:{ username, content, type, date }});

export const getTodoList = ({ username })=> ({ type: LOCAL_GET_TODOLIST, payload:{ username }});
export const updateTodoList = ({ id, content })=> ({ type: LOCAL_GET_TODOLIST, payload:{ id, content }});
export const deleteDayTodoList = ({ date })=> ({ type: LOCAL_GET_TODOLIST, payload:{ date }});
export const deleteListTodoList = ({ id })=> ({ type: LOCAL_GET_TODOLIST, payload:{ id }});
export const createTodoList = ({ username, content, type, date })=> ({ type: LOCAL_GET_TODOLIST, payload:{ username, content, type, date }});

export function* getTodoListSaga(action) {
    try {
        const data = yield call(todolistAxios.getPosts, action.payload);
        yield put(getTodoList(data));
    } catch(e) {
        console.log('get list error');
        // yield put(getTodoList(data));
    }
}
export function* createTodoListSaga(action) {
    try {
        const data = yield call(todolistAxios.create, action.payload);
        yield put(createTodoList(data));
    } catch(e) {
        console.log('create list error');
        // yield put(createTodoList(data));
    }
}
export function* updateTodoListSaga(action) {
    try {
        const data = yield call(todolistAxios.update, action.payload);
        yield put(updateTodoList(data));
    } catch(e) {
        console.log('update list error');
        // yield put(updateTodoList(data));
    }
}
export function* deleteDayTodoListSaga(action) {
    try {
        const data = yield call(todolistAxios.deleteDayPosts, action.payload);
        yield put(deleteDayTodoList(data));
    } catch(e) {
        console.log('delete day list error');
        // yield put(deleteDayTodoList(data));
    }
}
export function* deleteListTodoListSaga(action) {
    try {
        const data = yield call(todolistAxios.deletePost, action.payload);
        yield put(deleteListTodoList(data));
    } catch(e) {
        console.log('delete one list error');
        // yield put(deleteListTodoList(data));
    }
}


export function* watchTodoList() {
    yield takeEvery(LOCAL_CREATE, createTodoListRequest);
    yield takeEvery(LOCAL_DELETE_DAY, deleteDayTodoListRequest);
    yield takeEvery(LOCAL_UPDATE, updateTodoListRequest);
    yield takeEvery(LOCAL_GET_TODOLIST, getTodoListRequest);
    yield takeEvery(LOCAL_DELETE_LIST, deleteListTodoListRequest);
    
}

// 메시지가 있으면 데이터를 다시받아 렌더링
export default function todolistReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE:
            return(
                state.set(action.payload.data)
            );
         case UPDATE:
            return(
                state.set(action.payload.data)
            );
         case DELETE_DAY:
            return(
                state.set(action.payload.data)
            );
         case DELETE_LIST:
            return(
                state.set(action.payload.data)
            );
         case GET_TODOLIST:
            return(
                state.set(action.payload.data)
            );
        default: 
            return state;
    }
}

