import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar/EventCalendar";
import { Button, Row } from "antd";
import Modal from "antd/lib/modal/Modal";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../types/IEvent";

export const Event: FC = () => {
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { user } = useTypedSelector((state) => state.authReducer);
  const { events } = useTypedSelector((state) => state.eventReducer);
  const { guests } = useTypedSelector((state) => state.eventReducer);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmitEvent = (event: IEvent) => {
    createEvent(event);
    setIsModalVisible(false);
  };

  return (
    <div>
      <EventCalendar events={events} />
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
