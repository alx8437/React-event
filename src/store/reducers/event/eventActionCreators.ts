import { IUser } from "../../../types/IUser";
import { EventActionsEnum, ISetEvents, ISetGuests } from "./types";
import { IEvent } from "../../../types/IEvent";
import { TAppDispatch } from "../../index";
import { AxiosResponse } from "axios";
import UserService from "../../../api/UserServise";

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
    } catch (e) {}
  },
};
