import React from 'react';
import { Form, Input, Button } from 'antd';
import "antd/dist/antd.css";
import { useDispatch } from 'react-redux';
import { reducerSlice } from '../store/reducer';

const Login: React.FC<any> = () => {
    const dispatch = useDispatch();
    const onFinish = (values: any) => {
        localStorage.setItem('Auth', 'true');
        dispatch(reducerSlice.actions.setAuth('true'));
    };

    const onFinishFailed = (errorInfo: any) => {
    
    };
    
      return (
          <Form
              style={{position: 'absolute', left: '40%', top: '40%'}}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
                label="Username"
                  name="username"
                  style={{ color: "red" }}
                rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
                label="Password"
                  name="password"
                  style={{ color: "red" }}
                rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
    
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
        </Form>
      );
};

export default Login;