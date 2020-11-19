import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = ({ history })=> {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            username: inputs.username,
            passsword: inputs.password
        };
        console.log(data,'데이터')
        // axios 로 전송
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
                onSubmit={handleSubmit}
                >
                    <Input 
                    name="username" 
                    prefix={<UserOutlined 
                    className="site-form-item-icon" />} 
                    placeholder="Username" onChange={onChange} 
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
                    onChange={onChange}
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

export default Login;
