import React, { FC } from "react";
import { Calendar } from "antd";
import { Moment } from "moment";
import { CalendarMode } from "antd/lib/calendar/generateCalendar";
import { IEvent } from "../../types/IEvent";

interface IEventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<IEventCalendarProps> = ({ events }) => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return <Calendar fullscreen={false} onPanelChange={onPanelChange} />;
};

export default EventCalendar;
