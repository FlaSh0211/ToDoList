import React from 'react';
import { Route } from 'react-router-dom';
import ChattingList from './container/ChattingList';

const ChattingComponent = ()=> {
    return(
        <>
            <Route path="/" component={ ChattingList } />
        </>
    )
}

export default ChattingComponent;