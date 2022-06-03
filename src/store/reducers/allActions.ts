import { authActionCreators } from "./auth/authActionCreators";
import { eventActionCreators } from "./event/eventActionCreators";

export const allActions = {
  ...authActionCreators,
  ...eventActionCreators,
};
