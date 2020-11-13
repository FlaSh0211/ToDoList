import React from 'react';
import Nav from 'components/NavBar/Navbar'
const Wrapper = ({ history })=> {
    
    return(
        <div>
            <Nav history={ history }/>
        </div>
    );
};

export default Wrapper;