import {
  AuthActionEnum,
  ISetAuthAction,
  ISetError,
  ISetIsLoading,
  ISetUserAction,
} from "./types";
import { IUser } from "../../../types/IUser";
import { TAppDispatch } from "../../index";
import UserService from "../../../api/UserServise";
import { LocalStorageService } from "../../../services/LocalStorageService";

export const authActionCreators = {
  setAuth: (isAuth: boolean): ISetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: isAuth,
  }),
  setUser: (user: IUser): ISetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsLoading: (isLoading: boolean): ISetIsLoading => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): ISetError => ({
    type: AuthActionEnum.SER_ERROR,
    payload: error,
  }),
  loading:
    (username: string, password: string) => async (dispatch: TAppDispatch) => {
      dispatch(authActionCreators.setIsLoading(true));
      setTimeout(async () => {
        try {
          const response = await UserService.getUsers();
          const mockUser: IUser | undefined = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            LocalStorageService.setValue("auth", true);
            LocalStorageService.setValue("username", mockUser.username);
            dispatch(authActionCreators.setAuth(true));
            dispatch(authActionCreators.setUser(mockUser));
          } else {
            dispatch(
              authActionCreators.setError("Incorrect username or password")
            );
          }
        } catch (e) {
          dispatch(authActionCreators.setError("Authorization error"));
        }
        dispatch(authActionCreators.setIsLoading(false));
      }, 1000);
    },
  logout: () => (dispatch: TAppDispatch) => {
    LocalStorageService.removeValue("auth");
    LocalStorageService.removeValue("username");
    dispatch(authActionCreators.setAuth(false));
    dispatch(authActionCreators.setUser({} as IUser));
    dispatch(authActionCreators.setError(""));
  },
};
