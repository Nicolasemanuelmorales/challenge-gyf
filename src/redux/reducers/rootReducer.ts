import { combineReducers, Reducer } from "redux";
import { ILoaderReducer, loaderReducer } from "./LoaderReducer";

import { IAction } from "../actions/types";
export interface IRootState {
  loader: ILoaderReducer;
}

const appReducer: Reducer<IRootState> = combineReducers({
  loader: loaderReducer,
});

const rootReducer = (state: any, action: IAction) => {
  return appReducer(state, action);
};

export default rootReducer;
