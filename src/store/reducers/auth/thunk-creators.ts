import {TAppDispatch} from "../../index";
import axios from "axios";
import {IUser} from "../../../models/IUser";
import {authActionCreators} from "./action-creators";

export const loading = (username: string, password: string) => async (dispatch: TAppDispatch) => {
  dispatch(authActionCreators.setIsLoading(true))
  setTimeout(async () => {
    try {
      const response = await axios.get<IUser[]>('./users.json')
      const mockUser: IUser | undefined = response.data.find(user => user.username === username && user.password === password);
      if (mockUser) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', mockUser.username);
        dispatch(authActionCreators.setAuth(true));
        dispatch((authActionCreators.setUser(mockUser)));
      } else {
        dispatch(authActionCreators.setError('Incorrect username or password'))
      }
    } catch (e) {
      dispatch(authActionCreators.setError('Authorization error'))
    }
    dispatch(authActionCreators.setIsLoading(false))
  }, 1000)
}

export const logout = () => (dispatch: TAppDispatch) => {
  localStorage.removeItem('auth');
  localStorage.removeItem('username');
  dispatch(authActionCreators.setAuth(false));
  dispatch(authActionCreators.setUser({} as IUser));
  dispatch(authActionCreators.setError(''));
}