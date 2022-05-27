import {useDispatch} from "react-redux";
import {TAppDispatch} from "../store";
import {bindActionCreators} from "redux";
import {allActions} from "../store/reducers/allActions";

export const useActions = () => {
  const dispatch = useDispatch<TAppDispatch>();
  return bindActionCreators(allActions, dispatch)
}