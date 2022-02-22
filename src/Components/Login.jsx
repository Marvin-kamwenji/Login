import React, {useState, useEffect} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import UserService from "../Services/UserService";
import '../App.css';


function Login(){

        const onFinish = (values) => {
          console.log('Received values of form: ', values);
        };


    return(
        <div className="container">
        <Form name="normal_login"  className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
      
        <h2 className="text-center">Log in</h2>
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
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button 
               type="primary" 
               htmlType="submit" 
               className="login-form-button"
              >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
    );
}

export default Login;