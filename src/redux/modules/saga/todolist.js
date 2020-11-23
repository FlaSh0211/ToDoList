
import { put, call, takeEvery } from 'redux-saga/effects';
import * as todolistAxios from 'api/todolistAxios';
import { Map } from 'immutable';

const CREATE = 'todolist/CREATE';
const DELETE_DAY = 'todolist/DELETE_DAY';
const UPDATE = 'todolist/UPDATE';
const DELETE_LIST = 'todolist/DELETE_LIST';
const GET_TODOLIST = 'todolist/GET_TODOLIST';

const LOCAL_CREATE = 'todolist/LOCAL_CREATE';
const LOCAL_DELETE_DAY = 'todolist/LOCAL_DELETE_DAY';
const LOCAL_UPDATE = 'todolist/LOCAL_UPDATE';
const LOCAL_DELETE_LIST = 'todolist/LOCAL_DELETE_LIST';
const LOCAL_GET_TODOLIST = 'todolist/LOCAL_GET_TODOLIST';

let demo = [
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

const initialState = Map ({
    data: [],
    date: []
});

export const getTodoListRequest = ({ username })=> ({ type: LOCAL_GET_TODOLIST, payload:{ username }});
export const updateTodoListRequest = ({ id, content })=> ({ type: LOCAL_UPDATE, payload:{ id, content }});
export const deleteDayTodoListRequest = ({ date })=> ({ type: LOCAL_DELETE_DAY, payload:{ date }});
export const deleteListTodoListRequest = ({ id })=> ({ type: LOCAL_DELETE_LIST, payload:{ id }});
export const createTodoListRequest = ({ username, content, type, date })=> ({ type: LOCAL_CREATE, payload:{ username, content, type, date }});

export const getTodoList = (demo,date)=> ({ type: GET_TODOLIST, payload: { demo, date }});
export const updateTodoList = ({ id, content })=> ({ type: UPDATE, payload:{ id, content }});
export const deleteDayTodoList = ({ date })=> ({ type: DELETE_DAY, payload:{ date }});
export const deleteListTodoList = ({ id })=> ({ type: DELETE_LIST, payload:{ id }});
export const createTodoList = ({ username, content, type, date })=> ({ type: CREATE, payload:{ username, content, type, date }});

export function* getTodoListSaga(action) {
    try {
        // const data = yield call(todolistAxios.getPosts, action.payload);
        let date = [... new Set(demo.map(el => el.date))];
        yield put(getTodoList(demo, date));
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
        // const data = yield call(todolistAxios.update, action.payload);
        yield put(updateTodoList(action.payload));
    } catch(e) {
        console.log('update list error');
        // yield put(updateTodoList(data));
    }
}
export function* deleteDayTodoListSaga(action) {
    try {
        // const data = yield call(todolistAxios.deleteDayPosts, action.payload);
        yield put(deleteDayTodoList(action.payload));
    } catch(e) {
        console.log('delete day list error');
        // yield put(deleteDayTodoList(data));
    }
}
export function* deleteListTodoListSaga(action) {
    try {
        // const data = yield call(todolistAxios.deletePost, action.payload);
        yield put(deleteListTodoList(action.payload));
    } catch(e) {
        console.log('delete one list error');
        // yield put(deleteListTodoList(data));
    }
}


export function* watchTodoList() {
    yield takeEvery(LOCAL_CREATE, createTodoListSaga);
    yield takeEvery(LOCAL_DELETE_DAY, deleteDayTodoListSaga);
    yield takeEvery(LOCAL_UPDATE, updateTodoListSaga);
    yield takeEvery(LOCAL_GET_TODOLIST, getTodoListSaga);
    yield takeEvery(LOCAL_DELETE_LIST, deleteListTodoListSaga);
    
}

// 메시지가 있으면 데이터를 다시받아 렌더링
export default function todolistReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE:
            return(
                state.set(action.payload.data)
            );
         case UPDATE:
             let result_update = state.get('data').indexOf(state.get('data').find(el => el.id === action.payload.id? el: null))
             console.log( state.getIn(['data',result_update,'content']),'asdsad')
            return(
                state.setIn(['data',result_update,'content'], action.payload.content)
            );
         case DELETE_DAY:
            let result_delete_day = state.get('data').filter(el => el.date !== action.payload.date)
            let dateResult = state.get('date').filter(el => el !== action.payload.date);
            return(
                state.set('data', result_delete_day)
                     .set('date', dateResult)
               
            );
         case DELETE_LIST:
            let result_delete_list = state.get('data').filter(el => el.id !== action.payload.id);
            return(
                state.set('data', result_delete_list)
            );
         case GET_TODOLIST:
            return(
                state.set('data',action.payload.demo)
                     .set('date',action.payload.date)
            );
        default: 
            return state;
    }
}

