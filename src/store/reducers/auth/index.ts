import { AuthActionEnum, IAuthState, TAuthAction } from "./types";
import { IUser } from "../../../types/IUser";

const initialState: IAuthState = {
  isAuth: false,
  error: "",
  user: {} as IUser,
  isLoading: false,
};

export const authReducer = (
  state = initialState,
  action: TAuthAction
): IAuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH: {
      return { ...state, isAuth: action.payload, isLoading: false };
    }
    case AuthActionEnum.SER_ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case AuthActionEnum.SET_USER: {
      return { ...state, user: action.payload };
    }
    case AuthActionEnum.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};
