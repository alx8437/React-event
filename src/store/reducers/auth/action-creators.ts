import {AuthActionEnum, ISetAuthAction, ISetError, ISetIsLoading, ISetUserAction} from "./types";
import {IUser} from "../../../models/IUser";

export const authActionCreators = {
  setAuth: (isAuth: boolean): ISetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
  setUser: (user: IUser): ISetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
  setIsLoading: (isLoading: boolean): ISetIsLoading => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
  setError: (error: string): ISetError => ({type: AuthActionEnum.SER_ERROR, payload: error}),
}
