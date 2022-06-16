import { IUser } from "../../../types/IUser";
import { EventActionsEnum, ISetEvents, ISetGuests } from "./types";
import { IEvent } from "../../../types/IEvent";
import { TAppDispatch } from "../../index";
import { AxiosResponse } from "axios";
import UserService from "../../../api/UserServise";
import { LocalStorageService } from "../../../services/LocalStorageService";

export const eventActionCreators = {
  setGuests: (payload: IUser[]): ISetGuests => ({
    type: EventActionsEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): ISetEvents => ({
    type: EventActionsEnum.SET_EVENTS,
    payload: payload,
  }),
  fetchGuests: () => async (dispatch: TAppDispatch) => {
    try {
      const response: AxiosResponse<IUser[]> = await UserService.getUsers();
      dispatch(eventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: TAppDispatch) => {
    try {
      const events = (LocalStorageService.getValue("events") as IEvent[]) || [];
      events.push(event);
      dispatch(eventActionCreators.setEvents(events));
      LocalStorageService.setValue("events", events);
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => (dispatch: TAppDispatch) => {
    try {
      const events = (LocalStorageService.getValue("events") as IEvent[]) || [];
      const currentUserEvents = events.filter(
        (event) => event.author === username || event.guest === username
      );
      dispatch(eventActionCreators.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
    }
  },
};
