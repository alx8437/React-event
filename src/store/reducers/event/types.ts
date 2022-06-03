import { IUser } from "../../../types/IUser";
import { IEvent } from "../../../types/IEvent";

export interface IEventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionsEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface ISetEvents {
  type: EventActionsEnum.SET_EVENTS;
  payload: IEvent[];
}

export interface ISetGuests {
  type: EventActionsEnum.SET_GUESTS;
  payload: IUser[];
}

export type TEventActionsTypes = ISetEvents | ISetGuests;
