import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'page/Home/Home';
import Login from 'page/Login/Login';
import Wrapper from 'component/Wrapper/Wrapper';

const App = ()=> {

    return (
        <>
            <Wrapper />
            <Route exact path="/" component= { Home }/>
            <Route path="/login" component= { Login } />
        </>
    );
}


export default App;