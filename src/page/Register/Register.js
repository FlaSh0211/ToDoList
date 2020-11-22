import React from 'react';
import 'antd/dist/antd.css';
import RegisterForm from 'component/Form/Form';
import { connect } from 'react-redux';
import * as registerCreators from 'redux/modules/reducers/register';
import { bindActionCreators } from 'redux';

const Register = ({ registerActions, registerState })=>{
    return (
      <RegisterForm registerActions={registerActions} registerState={registerState}/>
    )
}

export default connect (
  state => ({
      registerState: state.registerReducer,
  }),
  dispatch => ({
    registerActions: bindActionCreators(registerCreators, dispatch)
  })
)(Register);