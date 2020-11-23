import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as loginCreators from 'redux/modules/saga/login';
import { connect } from 'react-redux';

let demo = {
    username: '',
    password: ''
}

const Login = ({ history, state, loginState, loginActions })=> {
    const onFinish = (values) => {
        let data = {
            username: values.username,
            password: values.password
        };
        console.log(data,'데이터')
        // axios 로 전송
        loginActions.loginRequest(data);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={ onFinish }
        >
            <Col md={{span: 8, offset: 8}} style={{marginTop: "80px"}}>
                <Form.Item 
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
                >
                    <Input 
                    name="username" 
                    prefix={<UserOutlined 
                    className="site-form-item-icon" />} 
                    placeholder="Username" 
                    />
                </Form.Item>
            </Col>
            <Col md={{span: 8, offset: 8}}>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    name="password"
                    />
                </Form.Item>
            </Col>
            <Col md={{span: 8, offset: 8}}>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    {/* 링크에 url을 삽입*/}
                    <Link to=''>
                        Forgot password
                    </Link>
                </Form.Item>
            </Col>
            <Col md={{span: 8, offset: 8}}>
                <Form.Item>
                    <Button 
                    type="primary" 
                    htmlType="submit" 
                    className="login-form-button" 
                    style={{marginRight: "10px"}} 
                    >
                        Log in
                    </Button>
                        Or <Link to='/register'>&nbsp;register now!</Link>
                </Form.Item>
            </Col>
        </Form>
    );
};

export default connect(
    state => ({
        loginState: state.loginReducer
    }),
    dispatch => ({
        loginActions: bindActionCreators(loginCreators, dispatch)
    })
)(Login);
