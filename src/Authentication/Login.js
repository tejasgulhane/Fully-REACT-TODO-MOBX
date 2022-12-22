import React, { useEffect } from'react';
import ReactDOM from'react-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { Indexstore } from '../store/Indexstore';
import { useNavigate } from 'react-router';
import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';


const Login = observer(({Auth}) => {

  const navigate = useNavigate();
  

  console.log(Auth);

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/todos')
        Auth.gotoTodo();
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const submithandler = (e) =>{
        console.log("submit");
        e.preventDefault() ;
      }
      return (
        <>
        <h1 style={{textAlign:"center", position:"relative"}}>LOGIN</h1>
        <Form
          onSubmit={submithandler}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </>
      );
    })
              



export default Login