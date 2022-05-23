import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../../utils/rules";

export const LoginForm: FC = () => {

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Error info", errorInfo)
  }


  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
