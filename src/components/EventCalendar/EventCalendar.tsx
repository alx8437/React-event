import React, { FC } from "react";
import { Calendar } from "antd";
import { Moment } from "moment";
import { IEvent } from "../../types/IEvent";
import { formatDate } from "../../utils/formatDate";

interface IEventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<IEventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    const currentData = formatDate(value.toDate());
    const currentDayEvents = events.filter(
      (event) => event.data === currentData
    );
    return (
      <ul className="events">
        {currentDayEvents.map((event, index) => (
          <li key={index}>{event.description}</li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} fullscreen={false} />;
};

export default EventCalendar;
