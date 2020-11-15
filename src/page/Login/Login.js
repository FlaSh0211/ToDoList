import React from 'react';

import { Form, Input, Button, Checkbox, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = ({ history }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
const handleClick = ()=> {
    history.push('/register')
}
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
        <Col md={{span: 8, offset: 8}} style={{marginTop: "20px"}}>
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
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>
        </Col>
        <Col md={{span: 8, offset: 8}}>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: "10px"}}>
                Log in
                </Button>
                Or <a onClick={handleClick}>register now!</a>
            </Form.Item>
        </Col>
    </Form>
  );
};

export default Login;
