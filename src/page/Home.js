import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from 'container/HomePage';
const Home = () => {
    return (
        <div>
            <Route path ="/" component={ HomePage }/>
        </div>
    )
}

export default Home;