import React from 'react';

import { Form, Input, Button, Checkbox, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: "10px"}}>
                Log in
                </Button>
                Or <Link to='/register'>&nbsp;register now!</Link>
            </Form.Item>
        </Col>
    </Form>
  );
};

export default Login;
