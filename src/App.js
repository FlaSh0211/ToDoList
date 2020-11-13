import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Home from 'page/Home/Home';
import Login from 'page/Login/Login';
import Register from 'page/Register/Register';
import Todolist from 'page/Todolist/Todolist'
import Wrapper from 'component/Wrapper/Wrapper';

const App = ()=> {
    let history = useHistory();
    return (
        <>
            <Wrapper history = { history }/>
            <Route exact path="/" component= { Home }/>
            <Route path="/login" component= { Login } />
            <Route path="/register" component= { Register } />
            <Route path="/todolist" component= { Todolist } />
        </>
    );
}

export default App;