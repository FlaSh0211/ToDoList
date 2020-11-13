import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'page/Home/Home';
import Wrapper from 'component/Wrapper/Wrapper';

const App = ()=> {

    return (
        <div>
            <Wrapper />
            <Route exact path="/" component={ Home }/>
        </div>
    );
}


export default App;