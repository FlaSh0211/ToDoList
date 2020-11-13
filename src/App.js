import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Todolist from 'pages/Todolist/Todolist'
import Wrapper from 'components/Wrapper/Wrapper';

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