import React, { FC } from "react";
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";
import { Moment } from "moment";
import { IUser } from "../types/IUser";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../types/IEvent";

interface IEventFormValues {
  description: string;
  date: Moment;
  guest: string;
}

interface IEventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<IEventFormProps> = ({ guests, submit }) => {
  const currentUser: IUser = useTypedSelector(
    (state) => state.authReducer.user
  );

  const onSubmitEvent = (values: IEventFormValues) => {
    const { date, guest, description } = values;

    const event: IEvent = {
      guest,
      author: currentUser.username,
      data: date.format("YYYY-MM-DD"),
      description,
    };

    submit(event);
  };

  const selectOptions = () => {
    return guests.map((user: IUser) => (
      <Select.Option key={user.id} value={user.username}>
        {user.username}
      </Select.Option>
    ));
  };

  return (
    <Form onFinish={onSubmitEvent}>
      <Form.Item
        label="Description"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="User list" name="guest">
        <Select style={{ width: 120 }}>{selectOptions()}</Select>
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Button htmlType="submit">Create</Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
