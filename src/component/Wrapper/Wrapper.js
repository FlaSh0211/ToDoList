import React from 'react';
import Nav from 'component/NavBar/Navbar'
const Wrapper = ({ history })=> {
    
    return(
        <div>
            <Nav history={ history }/>
        </div>
    );
};

export default Wrapper;