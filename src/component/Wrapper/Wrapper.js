import React from 'react';
import Nav from 'component/NavBar/Navbar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoListCreators from 'redux/modules/saga/todolist';
import * as loginCreators from 'redux/modules/saga/login';

const Wrapper = ({ history, loginState, todoListState, todoListActions, loginActions })=> {
    
    return(
        <div>
            <Nav history={ history } loginState={ loginState } todoListState={ todoListState } todoListActions={ todoListActions } loginActions={ loginActions }/>
        </div>
    );
};

export default connect (
    state => ({
        loginState: state.loginReducer,
        todoListState: state.todolistReducer
    }),
    dispatch => ({
        todoListActions: bindActionCreators( todoListCreators, dispatch),
        loginActions: bindActionCreators(loginCreators, dispatch)
    })
)(Wrapper);