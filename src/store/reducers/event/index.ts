import { EventActionsEnum, IEventState, TEventActionsTypes } from "./types";

const initialState: IEventState = {
  guests: [],
  events: [],
};

export const eventReducer = (
  state: IEventState = initialState,
  action: TEventActionsTypes
): IEventState => {
  switch (action.type) {
    case EventActionsEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    case EventActionsEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    default:
      return state;
  }
};
