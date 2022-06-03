import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar/EventCalendar";
import { Button, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../types/IEvent";

export const Event: FC = () => {
  const { fetchGuests } = useActions();
  const guests = useTypedSelector((state) => state.eventReducer.guests);

  useEffect(() => {
    fetchGuests();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmitEvent = (event: IEvent) => {
    console.log(event);
    setIsModalVisible(false);
  };

  return (
    <div>
      <EventCalendar events={[]} />
      <Row>
        <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <EventForm guests={guests} submit={onSubmitEvent} />
      </Modal>
    </div>
  );
};
