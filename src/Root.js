import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const Root = () => {
    return (
        <div style={{height: "100vh"}}>
            <BrowserRouter>
                <Route path="/" component={ App }/>
            </BrowserRouter>
        </div>
    );
};

export default Root;