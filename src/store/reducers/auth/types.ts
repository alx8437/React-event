import { IUser } from "../../../types/IUser";

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
  SER_ERROR = "SER_ERROR",
}

export interface ISetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export interface ISetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}

export interface ISetIsLoading {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface ISetError {
  type: AuthActionEnum.SER_ERROR;
  payload: string;
}

export type TAuthAction =
  | ISetAuthAction
  | ISetUserAction
  | ISetIsLoading
  | ISetError;
