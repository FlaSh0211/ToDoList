import React, { useState } from 'react';
import { Form, Input, Tooltip, Select, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
    md: {
        span: 8
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
    md: {
        span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterForm = () => {
    const [form] = Form.useForm();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        nickname: ""
    });
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            email: inputs.email,
            password: inputs.password,
            nickname: inputs.nickname
        };
        console.log(data,'데이터');

    }

    return (
        <Form style={{marginTop: "80px"}}
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
        }}
        scrollToFirstError
        onSubmit = {handleSubmit}
        >
        <Form.Item
            name="email"
            label="E-mail"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input name="email"/>
        </Form.Item>
        <Form.Item
            name="password"
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            hasFeedback
        >
            <Input.Password name="password"/>
        </Form.Item>
        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item
            name="nickname"
            label={
            <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
                </Tooltip>
            </span>
            }
            rules={[
            {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
            },
            ]}
        >
            <Input name="nickname"/>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
            Register
            </Button>
        </Form.Item>
        </Form>
    );
};

export default RegisterForm;