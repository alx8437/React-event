import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../../utils/rules";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import styles from './LoginForm.module.scss'
import {useInput} from "../../hooks/useInput";
import {loading} from "../../store/reducers/auth/thunk-creators";

interface IFormItems {
  username: string,
  password: string,
}

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const {isLoading, error} = useTypedSelector(state => state.authReducer)

  const username = useInput('');
  const password = useInput('');

  const submit = (values: IFormItems) => {
    const {username, password} = values
    dispatch<any>(loading(username, password))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Error info", errorInfo)
  }


  return (
    <Form
      onFinish={submit}
      onFinishFailed={onFinishFailed}
    >
      {error && <div className={styles.error}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input {...username}/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password {...password}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
