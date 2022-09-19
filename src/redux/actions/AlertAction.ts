import { IAlertReducer } from "../reducers/AlertReducer";
import { ALERT, IAction } from "./types";

const alertAction = (value: IAlertReducer): IAction => ({
  type: ALERT,
  payload: value,
});

export default alertAction;
