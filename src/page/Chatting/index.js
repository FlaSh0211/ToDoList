import React from 'react';
import { Route } from 'react-router-dom';
import ChattingList from './container/ChattingList';
import ChattingRoom from './container/ChattingRoom';

const ChattingComponent = ()=> {
    return(
        <>
            <Route exact path="/chatting" component={ ChattingList } />
            <Route path="/chatting/room" component={ ChattingRoom } />
        </>
    )
}

export default ChattingComponent;