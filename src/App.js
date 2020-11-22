import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import HomeComponent from 'page/Home';
import Login from 'page/Login/Login';
import Register from 'page/Register/Register';
import Wrapper from 'component/Wrapper/Wrapper';
import TodoComponent from 'page/Todo';

const App = ()=> {
    let history = useHistory();
    return (
        <>
            <Wrapper history = { history }/>
            <Route path="/" component= { HomeComponent } />
            <Route path="/login" component= { Login } />
            <Route path="/register" component= { Register } />
            <Route path="/todolist" component= { TodoComponent } />
        </>
    );
}

export default App;