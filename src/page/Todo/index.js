import React from 'react';
import { Route } from 'react-router-dom';
import Detail from './Detail';
import Todolist from './Todolist';

const Todo = ()=> {
    return (
        <>
            <Route exact path="/todolist" component= { Todolist } />
            <Route path="/todolist/detail" component={ Detail } />
        </>
    )
}

export default Todo;