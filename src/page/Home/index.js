import React from 'react';
import { Route } from 'react-router-dom';
import EditProfile from './container/EditProfile';
import Home from './container/Home';

const HomeComponent = ()=> {
    return (
        <>
            <Route exact path="/" component= { Home } />
            <Route path="/profile/edit" component={ EditProfile } />
        </>
    )
}

export default HomeComponent;