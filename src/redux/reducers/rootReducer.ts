import { combineReducers, Reducer } from "redux";
import { ILoaderReducer, loaderReducer } from "./LoaderReducer";

import { IAction } from "../actions/types";
import { ICommentReducer, commentReducer } from "./CommentReducer";
import { IAlertReducer, alertReducer } from "./AlertReducer";
export interface IRootState {
  loader: ILoaderReducer;
  comment: ICommentReducer;
  alert: IAlertReducer;
}

const appReducer: Reducer<IRootState> = combineReducers({
  loader: loaderReducer,
  comment: commentReducer,
  alert: alertReducer,
});

const rootReducer = (state: any, action: IAction) => {
  return appReducer(state, action);
};

export default rootReducer;
